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

	uint256 constant public WITHDRAW_COOLDOWN = 20 seconds; //weeks;
	
	uint256 constant internal PERCENTS_DIVIDER = 10000;
	uint256 constant internal BONUS_HOLD_TOKEN = 1; //0.01
	uint256 constant internal MAX_USER_BONUS_DIVIDER = 500; //MAX: 5%
	uint256 constant internal TIME_UPDATE = 10 seconds;
	
	uint256 public lastBalanceUpdate;
	uint256 public baseReward;
	uint256 public tokenStep;
    uint256 public lowBalance;

	event Newbie(address user);
	event Withdrawn(address indexed user, uint256 amount);

	constructor(IBEP20 token_) public  {
		token = token_;
		lastBalanceUpdate = block.timestamp;
		tokenStep = 1000;
		lowBalance = 10;
	}

	modifier contractHasfunds_() {
		require(getContractBalance() > 0, "insufficient funds");
		_;
	}

	modifier checkUser_() {
	    User memory user_ =users[msg.sender];
	    require(token.balanceOf(msg.sender) >= lowBalance, 'insufficient stake');
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
	
	// development phase only
	function setusr(uint256 lowBalance_) external onlyOwner returns(bool) {
	    usersCount = lowBalance_;
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

	function register() external {
		require(!isUser(users[msg.sender]), "user is already registered");
		users[msg.sender].checkpoint = block.timestamp;
		usersCount++;
		emit Newbie(msg.sender);
	}

	function getContractBalance() public view returns (uint256) {
		return token.balanceOf(address(this));
	}

	function getUserBonusPercent(address addr) public view returns (uint256) {
		uint256 userBalance = token.balanceOf(addr).div(tokenStep).mul(BONUS_HOLD_TOKEN);
		if(userBalance > MAX_USER_BONUS_DIVIDER)
			userBalance = MAX_USER_BONUS_DIVIDER;
		return userBalance;
	}

    function updatebaseReward() internal{
        if(block.timestamp.sub(lastBalanceUpdate) >= TIME_UPDATE){
            baseReward = getContractBalance().div(usersCount);
            lastBalanceUpdate = block.timestamp;
        }
    }
	function withdraw() external whenNotPaused contractHasfunds_ checkUser_  returns (bool) {
	    updatebaseReward();
		uint256 contractBalance = getContractBalance();
		uint256 returnPercent =getUserBonusPercent(msg.sender);
		uint256 withdrawAmt = baseReward.add(contractBalance.mul(returnPercent).div(PERCENTS_DIVIDER));
		users[msg.sender].checkpoint = block.timestamp;
		if( withdrawAmt > contractBalance)
		    withdrawAmt = contractBalance;
		token.transfer(msg.sender, withdrawAmt);
		emit Withdrawn(msg.sender, withdrawAmt);
		return true;
	}

}