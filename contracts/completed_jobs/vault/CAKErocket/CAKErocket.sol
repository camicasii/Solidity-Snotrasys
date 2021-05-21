// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;
import "./CAKErocket_state.sol";

contract CakeVault is CakeVault_State{
	event Newbie(address user);
	event NewDeposit(address indexed user, uint256 amount);
	event Withdrawn(address indexed user, uint256 amount);
	event RefBonus(address indexed referrer, address indexed referral, uint256 indexed level, uint256 amount);
	event FeePayed(address indexed user, uint256 totalAmount);
	event Reinvestment(address indexed user, uint256 amount);

	constructor(address payable devAddr, address payable SecAddr, address payable markAddrs, address payable projectAddrs,
		address payable partAddr, IBEP20 token_) public {
		require(!isContract(devAddr) && !isContract(SecAddr) && !isContract(partAddr) && !isContract(markAddrs));
		secureAddress = SecAddr;
		devAddress = devAddr;
		projectAdress =  projectAddrs;
		partnerAdress = partAddr;
		marketingAdress = markAddrs;
		token = token_;
		emit Paused(msg.sender);
	}

	modifier checkUser_() {
		uint256 check;
		check = block.timestamp.sub(getlastActionDate(users[msg.sender]));
		require(check > TIME_STEP,'try again later');
		_;
	}

	function checkUser() external view returns (bool){
		uint256 check;
		check = block.timestamp.sub(getlastActionDate(users[msg.sender]));
		if(check > TIME_STEP)
		return true;
	}

	function invest(address payable referrer, uint256 investAmt) external {
		require(investAmt >= INVEST_MIN_AMOUNT, 'insufficient deposit');

		token.transferFrom(msg.sender,address(this),investAmt);

		uint256 investFee = (investAmt.mul(INVEST_FEE)).div(PERCENTS_DIVIDER);

		token.transfer(partnerAdress,(investFee.mul(300)).div(PERCENTS_DIVIDER));
		token.transfer(devAddress,(investFee.mul(300)).div(PERCENTS_DIVIDER));
		token.transfer(marketingAdress,(investFee.mul(200)).div(PERCENTS_DIVIDER));
		token.transfer(projectAdress,(investFee.mul(200)).div(PERCENTS_DIVIDER));
		token.transfer(secureAddress,(investAmt.mul(SECURE_FEE)).div(PERCENTS_DIVIDER));

		emit FeePayed(msg.sender, (investAmt.mul(INVEST_FEE.add(SECURE_FEE))).div(PERCENTS_DIVIDER));

		User storage user = users[msg.sender];

		if (user.referrer == address(0) && users[referrer].depositsLength > 0 && referrer != msg.sender) {
			user.referrer = referrer;
		}

		if (user.referrer != address(0)) {
			address payable upline = user.referrer;
			for(uint256 i = 0; i < REFERRAL_PERCENTS.length; i++) {
				if(upline != address(0)) {
					uint256 amount = (investAmt.mul(REFERRAL_PERCENTS[i])).div(PERCENTS_DIVIDER);
					users[upline].bonus = users[upline].bonus.add(amount);
					if(user.depositsLength == 0)
					users[upline].referrerCount[i] = users[upline].referrerCount[i].add(1);
					emit RefBonus(upline, msg.sender, i, amount);
					upline = users[upline].referrer;
				} else break;
			}
		}

		if (user.depositsLength == 0) {
			user.checkpoint = block.timestamp;
			totalUsers = totalUsers.add(1);
			emit Newbie(msg.sender);
		}

		Deposit memory newDeposit;
		newDeposit.amount = investAmt;
		newDeposit.initAmount = investAmt;
		newDeposit.start = block.timestamp;
		user.deposits[user.depositsLength] = newDeposit;
		user.depositsLength++;

		totalInvested = totalInvested.add(investAmt);
		totalDeposits = totalDeposits.add(1);
		emit NewDeposit(msg.sender, investAmt);
	}

	function withdraw() external whenNotPaused checkUser_ returns(bool) {
		require(isActive(msg.sender), "Dont is User");
		User storage user = users[msg.sender];

		uint256 totalAmount;
		uint256 userPercentRate = getUserholdRate(msg.sender).add(getBonusPoolPercent());

		for(uint256 i = 0; i < user.depositsLength; i++) {
			uint256 dividends;
			Deposit memory deposit = user.deposits[i];

			if(deposit.withdrawn < getMaxprofit(deposit)) {
				dividends = calculateDividents(deposit, userPercentRate, user);

				if(dividends > 0) {
					user.deposits[i].withdrawn = user.deposits[i].withdrawn.add(dividends); /// changing of storage data
					totalAmount = totalAmount.add(dividends);
				}
			}
		}

		uint256 referralBonus = user.bonus;
		if(referralBonus > 0) {
			totalAmount = totalAmount.add(referralBonus);
			delete user.bonus;
		}

		require(totalAmount >= MIN_WITHDRAW, "User has no dividends");

		uint256 contractBalance = getContractBalance();
		if(contractBalance < totalAmount) {
			totalAmount = contractBalance;
		}

		user.checkpoint = block.timestamp;

		uint256 fee = (totalAmount.mul(WITHDRAW_FEE_PERCENT)).div(PERCENTS_DIVIDER);

		uint256 toTransfer = totalAmount.sub(fee);

		totalWithdrawn = totalWithdrawn.add(totalAmount);

		token.transfer(secureAddress,fee);

		token.transfer(msg.sender,toTransfer);


		emit FeePayed(msg.sender, fee);
		emit Withdrawn(msg.sender, totalAmount);
		return true;

	}

	function reinvestment() external whenNotPaused checkUser_ returns(bool) {
		require(isActive(msg.sender), "Dont is User");
		User storage user = users[msg.sender];

		uint256 totalDividends;

		uint256 userPercentRate = getUserholdRate(msg.sender).add(getBonusPoolPercent());

		for(uint256 i = 0; i < user.depositsLength; i++) {
			uint256 dividends;
			Deposit memory deposit = user.deposits[i];

			if(deposit.withdrawn < getMaxprofit(deposit)) {
				dividends = calculateDividents(deposit, userPercentRate, user);

				if(dividends > 0) {
					user.deposits[i].amount = user.deposits[i].amount.add(dividends);
					totalDividends = totalDividends.add(dividends);
				}
			}
		}

		require(totalDividends > 0, "User has no dividends");

		user.reinvested = user.reinvested.add(totalDividends);
		totalReinvested = totalReinvested.add(totalDividends);
		user.lasReinvest = block.timestamp;

		uint256 fee = totalDividends.mul(INVEST_FEE).div(PERCENTS_DIVIDER).div(2);
		token.transfer(devAddress, fee);
		token.transfer(marketingAdress, fee);
		emit FeePayed(msg.sender, fee);
		emit Reinvestment(msg.sender, totalDividends);
		return true;
	}

	function getNextUserAssignment(address userAddress) public view returns (uint256) {
		uint256 checkpoint = getlastActionDate(users[userAddress]);
		if(initDate > checkpoint)
			checkpoint = initDate;
		return checkpoint.add(TIME_STEP);
	}

	function getUserholdRate(address userAddress) public view returns (uint256) {

		if(isActive(userAddress)) {
				uint256 checkpoint = users[userAddress].checkpoint;
				if(initDate > checkpoint)
					checkpoint = initDate;
				uint256 holdProfit = ((block.timestamp.sub(checkpoint)).div(TIME_STEP)).mul(HOLD_PERCENT);
				if(holdProfit > MAX_HOLD_PERCENT)
					holdProfit = MAX_HOLD_PERCENT;
				return holdProfit;
		}
	}

	function getPublicData() external view returns(uint256 totalUsers_,
		uint256 totalInvested_,
		uint256 totalReinvested_,
		uint256 totalWithdrawn_,
		uint256 totalDeposits_,
		uint256 balance_,
		uint256 roidBase,
		uint256 bonusPool,
		uint256 comunityBonus,
		uint256 currentRoi,
		uint256 maxProfit,
		uint256 minDeposit,
		uint256 daysFormdeploy
		) {
		totalUsers_ = totalUsers;
		totalInvested_ = totalInvested;
		totalReinvested_ = totalReinvested;
		totalWithdrawn_ = totalWithdrawn;
		totalDeposits_ = totalDeposits;
		balance_ = getContractBalance();
		roidBase = ROI_BASE;
		bonusPool = getBonusPoolPercent();
		comunityBonus = getComunityBonus();
		currentRoi = ROI_BASE.add(comunityBonus).add(bonusPool);
		maxProfit = MAX_PROFIT;
		minDeposit = INVEST_MIN_AMOUNT;
		daysFormdeploy = (block.timestamp.sub(initDate)).div(TIME_STEP);
	}

	function getUserData(address userAddress) external view returns(uint256 totalWithdrawn_,
		uint256 totalDeposits_,
		uint256 totalBonus_,
		uint256 totalreinvest_,
		uint256 hold_,
		uint256 balance_,
		uint256 nextAssignment_,
		uint256 amountOfDeposits,
		uint256 checkpoint,
		bool isUser_,
		address referrer_,
		uint256[3] memory referrerCount_
	){
		User memory user = users[userAddress];
		totalWithdrawn_ = getUserTotalWithdrawn(userAddress);
		totalDeposits_ = getUserTotalDeposits(userAddress);
		nextAssignment_ = getNextUserAssignment(userAddress);
		balance_ = getUserDividends(userAddress);
		hold_ = getUserholdRate(userAddress);
		totalreinvest_ = user.reinvested;
		totalBonus_ = user.bonus;
		amountOfDeposits = user.depositsLength;
		checkpoint = getlastActionDate(user);
		isUser_ = user.depositsLength > 0;
		referrer_ = user.referrer;
		referrerCount_ = user.referrerCount;

	}

	function getContractBalance() public view returns (uint256) {
		return token.balanceOf(address(this));
	}

	function getUserDividends(address userAddress) internal view returns (uint256) {
		User memory user = users[userAddress];

		uint256 totalDividends;
		uint256 userPercentRate = getUserholdRate(userAddress).add(getBonusPoolPercent());

		for(uint256 i = 0; i < user.depositsLength; i++) {

			Deposit memory deposit = users[userAddress].deposits[i];

			if(deposit.withdrawn < getMaxprofit(deposit)) {
				uint256 dividends = calculateDividents(deposit, userPercentRate, user);
				totalDividends = totalDividends.add(dividends);
			}

		}

		return totalDividends;
	}

	function calculateDividents(Deposit memory deposit, uint256 userPercentRate, User memory user) internal view returns (uint256) {
		uint256 dividends;
		uint256	depositPercentRate = userPercentRate.add(getDepositRoi(deposit));

		uint256 checkDate = getDepsitStartDate(deposit);

		if(checkDate < getlastActionDate(user)) {
			checkDate = getlastActionDate(user);
		}

		dividends = (deposit.amount
		.mul(depositPercentRate.mul(block.timestamp.sub(checkDate))))
		.div((PERCENTS_DIVIDER).mul(TIME_STEP))
		;

		if(deposit.withdrawn.add(dividends) > getMaxprofit(deposit)) {
			dividends = getMaxprofit(deposit).sub(deposit.withdrawn);
		}
		return dividends;

	}

	function isActive(address userAddress) public view returns (bool) {
		User memory user = users[userAddress];

		if (user.depositsLength > 0) {
			if(users[userAddress].deposits[user.depositsLength-1].withdrawn < getMaxprofit(users[userAddress].deposits[user.depositsLength-1])) {
				return true;
			}
		}
	}

	function getUserDepositInfo(address userAddress, uint256 index) external view returns(
		uint256 initAmount_,
		uint256 amount_,
		uint256 withdrawn_,
		uint256 timeStart_,
		uint256 reinvested_,
		uint256 maxProfit
		) {
		User memory user = users[userAddress];
		Deposit memory deposit = users[userAddress].deposits[index];
		initAmount_ = deposit.initAmount;
		amount_ = deposit.amount;
		withdrawn_ = deposit.withdrawn;
		timeStart_= getDepsitStartDate(deposit);
		reinvested_ = user.reinvested;
		maxProfit = getMaxprofit(deposit);
	}


	function getUserTotalDeposits(address userAddress) internal view returns(uint256) {
		User memory user = users[userAddress];
		uint256 amount;
		for(uint256 i = 0; i < user.depositsLength; i++) {
			amount = amount.add(users[userAddress].deposits[i].amount);
		}
		return amount;
	}

	function getUserTotalWithdrawn(address userAddress) internal view returns(uint256) {
		User memory user = users[userAddress];

		uint256 amount;

		for(uint256 i = 0; i < user.depositsLength; i++) {
			amount = amount.add(users[userAddress].deposits[i].withdrawn);
		}
		return amount;
	}

	function getlastActionDate(User memory user) internal view returns(uint256) {
		uint256 checkpoint;
		if(user.checkpoint > user.lasReinvest) {
			checkpoint = user.checkpoint;
		} else {
			checkpoint = user.lasReinvest;
		}

		if(initDate > checkpoint)
			checkpoint = initDate;

		return checkpoint;
	}

	function isContract(address addr) internal view returns (bool) {
		uint256 size;
		assembly { size := extcodesize(addr) }
		return size > 0;
	}

	function getComunityBonus() public view returns(uint256) {
		uint256 delta = (block.timestamp.sub(initDate)).div(TIME_STEP);
		uint256 bonus = delta.mul(COMUNITY_BONUS);
		if(bonus > MAX_COMUNITY_BONUS) {
			bonus = MAX_COMUNITY_BONUS;
		}
		return bonus;
	}

	function getDepositRoi(Deposit memory ndeposit) private view returns(uint256) {
		uint256 delta = (getDepsitStartDate(ndeposit).sub(initDate)).div(TIME_STEP);
		uint256 bonus = delta.mul(COMUNITY_BONUS);
		if(bonus > MAX_COMUNITY_BONUS) {
			bonus = MAX_COMUNITY_BONUS;
		}
		return ROI_BASE.add(bonus);
	}

	function getDepsitStartDate(Deposit memory ndeposit) private view returns(uint256) {
		if(initDate > ndeposit.start) {
			return initDate;
		} else {
			return ndeposit.start;
		}
	}

	function getBonusPoolPercent() public view returns(uint256) {
		uint256 pool;
		pool = (getContractBalance().mul(BONUS_POOL)).div(POOL_DIVIDER);
		if(pool > MAX_BONUS_POOL) {
			pool = MAX_BONUS_POOL;
		}
		return pool;
	}

}
