// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "../resources/utils/math/SafeMath.sol";
import "../resources/utils/Ownable.sol";
import "../resources/utils/Pausable.sol";
import "../resources/token/IBEP20.sol";

contract HoldersRoi is Pausable, Ownable {
	using SafeMath for uint256;
	IBEP20 public token;

	struct User {
		uint256 checkpoint;
	}

	mapping(address => User) public users;
	uint256 public usersCount;

	uint256 constant public WITHDRAW_COOLDOWN = 20 seconds; //replace for: 1 weeks;

	uint256 constant internal PERCENTS_DIVIDER = 10000;
	uint256 constant internal BONUS_HOLD_TOKEN = 1; //0.01%
	//warning: MAX_USER_BONUS must be less than PERCENTS_DIVIDER
	uint256 constant internal MAX_USER_BONUS = 5000; //MAX: 50%
	uint256 constant internal TIME_UPDATE = 10 seconds; //replace for: 1 days

	uint256 public lastBalanceUpdate;
	uint256 public rewardPerUser;
	uint256 public tokenStep;
	uint256 public lowBalance;

	event Newbie(address user);
	event Withdrawn(address indexed user, uint256 amount);

	constructor(IBEP20 token_)  {
		token = token_;
		lastBalanceUpdate = block.timestamp;
		tokenStep = 1000;
		lowBalance = 10;
	}

	modifier contractHasfunds_() {
		require(getContractBalance() > 0, "insufficient funds");
		_;
	}

	modifier isHolder_() {
		require(isHolder(), "insufficient stake");
		_;
	}

	function isHolder() internal view returns(bool) {
		return (token.balanceOf(msg.sender) >= lowBalance);
	}

	modifier checkUser_() {
		User memory user_ = users[msg.sender];
		require(isHolder(), "insufficient stake");
		require(isUser(user_) && (block.timestamp.sub(user_.checkpoint)).div(WITHDRAW_COOLDOWN) >= 1, "try again later");
		_;
	}

	function unpause() external onlyOwner returns(bool){
		_unpause();
		return true;
	}

	function pause() external onlyOwner returns(bool){
		_pause();
		return true;
	}

	function isUser(User memory user_) internal pure returns(bool) {
		return (user_.checkpoint > 0);
	}

	// development phase only //only debug fuction
	function setusr(uint256 newUsers) external onlyOwner returns(bool) {
		usersCount = newUsers;
		return true;
	}

	function setLowBalance(uint256 lowBalance_) external onlyOwner returns(bool) {
		lowBalance = lowBalance_;
		return true;
	}

	function setTokenStep(uint256 tokenStep_) external onlyOwner returns(bool) {
		tokenStep = tokenStep_;
		return true;
	}

	function register() external isHolder_ {
		require(!isUser(users[msg.sender]), "user is already registered");
		users[msg.sender].checkpoint = block.timestamp;
		usersCount++;
		emit Newbie(msg.sender);
	}

	function getContractBalance() public view returns (uint256) {
		return token.balanceOf(address(this));
	}

	function getUserBonusPercent(address addr) public view returns (uint256) {
		require(isUser(users[msg.sender]), "address not registered");
		uint256 userBalance = token.balanceOf(addr).div(tokenStep).mul(BONUS_HOLD_TOKEN);
		if(userBalance > MAX_USER_BONUS)
			userBalance = MAX_USER_BONUS;
		return userBalance;
	}

	function updatebaseReward() internal {
		if(block.timestamp.sub(lastBalanceUpdate) >= TIME_UPDATE){
			rewardPerUser = getContractBalance().div(usersCount);
			lastBalanceUpdate = block.timestamp;
		}
	}

	function tryUpdatebaseReward() external onlyOwner {
		require(block.timestamp.sub(lastBalanceUpdate) >= TIME_UPDATE, "try again later");
		updatebaseReward();
	}

	function withdraw() external whenNotPaused contractHasfunds_ checkUser_ returns (bool) {
		updatebaseReward();
		uint256 contractBalance = getContractBalance();
		uint256 returnPercent = getUserBonusPercent(msg.sender);
		uint256 withdrawAmt = rewardPerUser.mul(PERCENTS_DIVIDER.sub(MAX_USER_BONUS).add(returnPercent)).div(PERCENTS_DIVIDER);
		users[msg.sender].checkpoint = block.timestamp;
		if(withdrawAmt > contractBalance)
			withdrawAmt = contractBalance;
		token.transfer(msg.sender, withdrawAmt);
		emit Withdrawn(msg.sender, withdrawAmt);
		return true;
	}

}
