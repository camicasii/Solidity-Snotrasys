/**
 *Submitted for verification at BscScan.com on 2021-03-22
*/

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import '../../resources/utils/math/SafeMath.sol';
import '../../resources/utils/math/Math.sol';

contract FomoStake2 {
    using SafeMath for uint256;

    uint256 public LAUNCH_TIME;
    uint256[3] public REFERRAL_PERCENTS = [50, 25, 5];
    uint256 public constant INVEST_MIN_AMOUNT = 0.05 ether;
    uint256 public constant PERCENT_STEP = 5;
    uint256 public constant WITHDRAW_FEE_PERCENT = 100;
    uint256 public constant PERCENTS_DIVIDER = 1000;
    uint256 public constant TIME_STEP = 10 seconds;//1 days;descomentar esto
    uint256 public constant DECREASE_DAY_STEP = 5 seconds;//0.5 days;descomentar esto
    uint256 public constant PENALTY_STEP = 700;
    uint256 public constant MARKETING_FEE = 50;
    uint256 public constant PROJECT_FEE = 50;

    uint256 public totalStaked;

    struct Plan {
        uint256 time;
        uint256 percent;
        bool locked;
    }

    mapping(uint256 => Plan) plans;
    uint256 public plansLength;

    struct Deposit {
        uint8 plan;
        uint256 percent;
        uint256 amount;
        uint256 profit;
        uint256 start;
        uint256 finish;
        bool force;
    }

    struct User {
		mapping(uint256 => Deposit) deposits;
		uint256 depositsLength;
        uint256 checkpoint;
        address payable referrer;
        uint256[3] levels;
        uint256 bonus;
        uint256 totalBonus;
		uint256 withdraw;
    }

    mapping(address => User) public users;
    mapping(address => Deposit[]) internal penaltyDeposits;

    address payable public marketingAddress;
    address payable public projectAddress;
	address payable public devAddress;

    event Newbie(address user);
    event NewDeposit(
        address indexed user,
        uint8 plan,
        uint256 percent,
        uint256 amount,
        uint256 profit,
        uint256 start,
        uint256 finish
    );
    event Withdrawn(address indexed user, uint256 amount);
    event ForceWithdrawn(
        address indexed user,
        uint256 amount,
        uint256 penaltyAmount,
        uint256 penaltyID
    );
    event RefBonus(
        address indexed referrer,
        address indexed referral,
        uint256 indexed level,
        uint256 amount
    );
    event FeePayed(address indexed user, uint256 totalAmount);

	event Unpaused(address account);

	modifier onlyOwner() {
		require(devAddress == msg.sender, "Ownable: caller is not the owner");
		_;
	}

	modifier whenNotPaused() {
		require(!isPaused(), "Pausable: paused");
		_;
	}

	modifier whenPaused() {
		require(isPaused(), "Pausable: not paused");
		_;
	}

	function unpause() external whenPaused onlyOwner{
		LAUNCH_TIME = block.timestamp;
		emit Unpaused(msg.sender);
	}

	function isPaused() public view returns(bool) {
		return (LAUNCH_TIME == 0);
	}

    constructor(address payable marketingAddr, address payable projectAddr, address payable devAddr) {
        require(!isContract(marketingAddr), "!marketingAddr");
        require(!isContract(projectAddr), "!projectAddr");
		require(!isContract(devAddr), "!devAddr");

        marketingAddress = marketingAddr;
        projectAddress = projectAddr;
		devAddress = devAddr;


        plans[0].time = 14;
        plans[0].percent = 80;


        plans[1].time = 21;
        plans[1].percent = 65;


        plans[2].time = 28;
        plans[2].percent = 50;


        plans[3].time = 14;
        plans[3].percent = 80;
        plans[3].locked = true;


        plans[4].time = 21;
        plans[4].percent = 65;
        plans[4].locked = true;


        plans[5].time = 28;
        plans[5].percent = 50;
        plans[5].locked = true;

        plansLength = 6;

    }

    function invest(address payable referrer, uint8 plan) external payable whenNotPaused {
        require(msg.value >= INVEST_MIN_AMOUNT, "insufficient deposit");
        require(plan < plansLength, "Invalid plan");

        marketingAddress.transfer(msg.value.mul(MARKETING_FEE).div(PERCENTS_DIVIDER));

        projectAddress.transfer(msg.value.mul(PROJECT_FEE).div(PERCENTS_DIVIDER));

        emit FeePayed(msg.sender, msg.value.mul(MARKETING_FEE.add(PROJECT_FEE)).div(PERCENTS_DIVIDER));

        User storage user = users[msg.sender];
		uint256 referalLength = REFERRAL_PERCENTS.length;
        if (user.referrer == address(0)) {
            if (referrer != msg.sender) {
                user.referrer = referrer;
            }

            address upline = user.referrer;
            for (uint256 i; i < referalLength; i++) {
                if (upline != address(0)) {
					uint256 amount = msg.value.mul(REFERRAL_PERCENTS[i]).div(PERCENTS_DIVIDER);
					users[upline].bonus = users[upline].bonus.add(amount);
					users[upline].totalBonus = users[upline].totalBonus.add(amount);
					users[upline].levels[i] = users[upline].levels[i].add(1);
					emit RefBonus(upline, msg.sender, i, amount);
					upline = users[upline].referrer;
                } else break;
            }
        }

        if (user.depositsLength == 0) {
            user.checkpoint = block.timestamp;
            emit Newbie(msg.sender);
        }

        (uint256 percent, uint256 profit, , uint256 finish) = getResult(plan, msg.value);
        Deposit memory deposit;
        deposit.plan = plan;
        deposit.percent = percent;
        deposit.amount = msg.value;
        deposit.profit = profit;
        deposit.start = block.timestamp;
        deposit.finish = finish;
        deposit.force = true;
		user.deposits[user.depositsLength] = deposit;
		user.depositsLength++;

        totalStaked = totalStaked.add(msg.value);
        emit NewDeposit(
            msg.sender,
            plan,
            percent,
            msg.value,
            profit,
            block.timestamp,
            finish
        );
    }

    function withdraw() external whenNotPaused {
        User storage user = users[msg.sender];

        uint256 totalAmount = getUserDividends(msg.sender);
        user.withdraw = user.withdraw.add(totalAmount);

        require(totalAmount > 0, "User has no dividends");

        uint256 contractBalance = getContractBalance();
        if (contractBalance < totalAmount) {
            totalAmount = contractBalance;
        }

        user.checkpoint = block.timestamp;

        for (uint256 i; i < user.depositsLength; i++) {
            if (user.checkpoint < user.deposits[i].finish) {
                Plan memory tempPlan = plans[user.deposits[i].plan];
                if (!tempPlan.locked) {
                    user.deposits[i].force = false;
                } else if (block.timestamp > user.deposits[i].finish) {
                    user.deposits[i].force = false;
                }
            }
        }

		uint256 fee = totalAmount.mul(WITHDRAW_FEE_PERCENT).div(PERCENTS_DIVIDER);

		uint256 toTransfer = totalAmount.sub(fee);

        payable(msg.sender).transfer(toTransfer);

        emit Withdrawn(msg.sender, totalAmount);
		emit FeePayed(msg.sender, fee);

    }

    function forceWithdraw(uint256 index) external whenNotPaused {
        User storage user = users[msg.sender];

        require(index < user.depositsLength, "Invalid index");
        require(user.deposits[index].force == true, "Force is false");

        uint256 depositAmount = user.deposits[index].amount;
    	uint256 penaltyAmount = depositAmount.mul(PENALTY_STEP).div(PERCENTS_DIVIDER);

    	payable(msg.sender).transfer(depositAmount.sub(penaltyAmount));

        penaltyDeposits[msg.sender].push(user.deposits[index]);

        user.deposits[index] = user.deposits[user.depositsLength - 1];

		delete user.deposits[user.depositsLength - 1];
        user.depositsLength--;

        // the reason length will not change that can't used
        // delete user.deposits[index];

        emit ForceWithdrawn(
            msg.sender,
            depositAmount,
            penaltyAmount,
            penaltyDeposits[msg.sender].length
        );
    }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function getPlanInfo(uint8 plan) external view returns (uint256 time, uint256 percent, bool locked) {
        require(plan < plansLength, "Invalid plan");
        Plan memory tempPlan = plans[plan];
        time = tempPlan.time;
        percent = tempPlan.percent;
        locked = tempPlan.locked;
    }

    function getPlans() external view returns (Plan[] memory _plans) {
        _plans = new Plan[] (plansLength);
        for(uint256 i; i < plansLength; i++) {
            _plans[i] = plans[i];
        }
    }

    function getPercent(uint8 plan) public view returns (uint256) {
        require(plan < plansLength, "Invalid plan");
        if (!isPaused()) {
            return Math.min(plans[plan].percent.add(PERCENT_STEP.mul(block.timestamp.sub(LAUNCH_TIME)).div(TIME_STEP)), plans[plan].percent.mul(3));
        } else {
            return plans[plan].percent;
        }
    }

    function getResult(uint8 plan, uint256 deposit) public view
        returns (
            uint256 percent,
            uint256 profit,
            uint256 current,
            uint256 finish
        ) {

		require(plan < plansLength, "Invalid plan");

        Plan memory tempPlan = plans[plan];
        percent = getPercent(plan);

        if (!tempPlan.locked) {
            profit = deposit.mul(percent).div(PERCENTS_DIVIDER).mul(plans[plan].time);
        } else {
            for (uint256 i; i < plans[plan].time; i++) {
                profit = profit.add(deposit.add(profit).mul(percent).div(PERCENTS_DIVIDER));
            }
        }

        current = block.timestamp;
        finish = current.add(getDecreaseDays(plans[plan].time));
    }

    function getUserDividends(address userAddress) public view returns (uint256) {
        User storage user = users[userAddress];

        uint256 totalAmount;

        for (uint256 i; i < user.depositsLength; i++) {
			Deposit memory deposit = user.deposits[i];
            if (user.checkpoint < deposit.finish) {
                Plan memory tempPlan = plans[deposit.plan];
                if (!tempPlan.locked) {
                    uint256 share =
                        deposit
                            .amount
                            .mul(deposit.percent)
                            .div(PERCENTS_DIVIDER);
                    uint256 from =
                        deposit.start > user.checkpoint
                            ? deposit.start
                            : user.checkpoint;
                    uint256 to =
                        deposit.finish < block.timestamp
                            ? deposit.finish
                            : block.timestamp;
                    if (from < to) {
                        uint256 planTime = plans[deposit.plan].time.mul(TIME_STEP);
                        uint256 redress = planTime.div(deposit.finish.sub(deposit.start));

                        totalAmount = totalAmount.add(share.mul(to.sub(from)).mul(redress).div(TIME_STEP));
                    }
                } else if (block.timestamp >= deposit.finish) {
                    totalAmount = totalAmount.add(deposit.profit);
                }
            }
        }

        return totalAmount;
    }

    function getDecreaseDays(uint256 planTime) public view returns (uint256) {
        uint256 limitDays = PERCENT_STEP.mul(TIME_STEP);
        uint256 pastDays = block.timestamp.sub(LAUNCH_TIME).div(TIME_STEP);
        uint256 decreaseDays = pastDays.mul(DECREASE_DAY_STEP);
        uint256 minimumDays = planTime.mul(TIME_STEP).sub(decreaseDays);

        if (minimumDays < limitDays) {
            return limitDays;
        }

        return minimumDays;
    }

    function getUserCheckpoint(address userAddress) external view returns (uint256) {
        return users[userAddress].checkpoint;
    }

    function getUserReferrer(address userAddress) external view returns (address) {
        return users[userAddress].referrer;
    }

    function getUserDownlineCount(address userAddress) external view returns (uint256, uint256, uint256) {
        return (users[userAddress].levels[0], users[userAddress].levels[1], users[userAddress].levels[2]);
    }

    function getUserReferralBonus(address userAddress) public view returns (uint256) {
        return users[userAddress].bonus;
    }

    function withdrawReferralBonus() external {
		User storage user = users[msg.sender];
		uint256 referralBonus = getUserReferralBonus(msg.sender);
		require(referralBonus > 0, "User has no dividends");
        delete user.bonus;
        payable(msg.sender).transfer(referralBonus);
    }

    function getUserReferralTotalBonus(address userAddress) external view returns (uint256) {
        return users[userAddress].totalBonus;
    }

    function getUserReferralWithdrawn(address userAddress) external view returns (uint256) {
        return users[userAddress].totalBonus.sub(users[userAddress].bonus);
    }

    function getUserAvailable(address userAddress) external view returns (uint256) {
        return getUserReferralBonus(userAddress).add(getUserDividends(userAddress));
    }

    function getUserAmountOfDeposits(address userAddress) external view returns (uint256) {
        return users[userAddress].depositsLength;
    }

    function getUserAmountOfPenaltyDeposits(address userAddress) external view returns (uint256) {
        return penaltyDeposits[userAddress].length;
    }

    function getUserTotalDeposits(address userAddress) external view returns (uint256 amount) {
        for (uint256 i; i < users[userAddress].depositsLength; i++) {
            amount = amount.add(users[userAddress].deposits[i].amount);
        }
    }

    function getUserDepositInfo(address userAddress, uint256 index) external view returns (uint8 plan, uint256 percent,
            uint256 amount,
            uint256 profit,
            uint256 start,
            uint256 finish,
            bool force
        ) {
        User storage user = users[userAddress];

        require(index < user.depositsLength, "Invalid index");
		Deposit memory deposit = user.deposits[index];

        plan = deposit.plan;
        percent = deposit.percent;
        amount = deposit.amount;
        profit = deposit.profit;
        start = deposit.start;
        finish = deposit.finish;
        force = deposit.force;
    }

    function getUserPenaltyDepositInfo(address userAddress, uint256 index) external view returns (
            uint8 plan,
            uint256 percent,
            uint256 amount,
            uint256 profit,
            uint256 start,
            uint256 finish
        ) {
		Deposit[] memory userPenaltyDeposit = penaltyDeposits[userAddress];
        require(index < userPenaltyDeposit.length, "Invalid index");
		Deposit memory deposit = userPenaltyDeposit[index];

        plan = deposit.plan;
        percent = deposit.percent;
        amount = deposit.amount;
        profit = deposit.profit;
        start = deposit.start;
        finish = deposit.finish;
    }

    function isContract(address addr) internal view returns (bool) {
        uint256 size;
        assembly {
            size := extcodesize(addr)
        }
        return size > 0;
    }
}
