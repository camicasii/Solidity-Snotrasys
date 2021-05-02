// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;
import "../resources/utils/math/SafeMath.sol";
import "../resources/token/IBEP20.sol";

contract HoldersRoi {
	using SafeMath for uint256;
	IBEP20 public token;

	struct User {
		uint256 checkpoint;
	}

	mapping(address => User) public users;
	uint256 public usersCount;

	uint256 constant public WITHDRAW_COOLDOWN = 1 weeks;

	uint256 constant public BASE_RETURN_PERCENT = 100; //1%
	uint256 constant internal PERCENTS_DIVIDER = 10000;

	uint256 constant internal BONUS_HOLD_TOKEN = 1; //0.01
	uint256 constant internal USER_BONUS_DIVIDER = 100 ether;
	uint256 constant internal MAX_USER_BONUS_DIVIDER = 10; //MAX: 0.1%


	event Newbie(address user);
	event Withdrawn(address indexed user, uint256 amount);

	constructor(IBEP20 token_) public {
		token = token_;
	}

	modifier contractHasfunds_() {
		require(getContractBalance() > 0, "insufficient funds");
		_;
	}

	modifier checkUser_(address addr) {
		require(isUser(users[addr]) && (block.timestamp.sub(users[addr].checkpoint)).div(WITHDRAW_COOLDOWN) >= 1, "try again later");
		_;
	}

	function isUser(User memory user_) internal pure returns(bool) {
		return (user_.checkpoint > 0);
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
		uint256 userBalance = (token.balanceOf(addr).mul(BONUS_HOLD_TOKEN)).div(USER_BONUS_DIVIDER);
		if(userBalance > MAX_USER_BONUS_DIVIDER)
			userBalance = MAX_USER_BONUS_DIVIDER;
		return userBalance;
	}

	function withdraw() public contractHasfunds_ checkUser_(msg.sender) returns (bool) {
		uint256 returnPercent = BASE_RETURN_PERCENT.add(getUserBonusPercent(msg.sender));
		uint256 withdrawAmt = ((getContractBalance()).mul(returnPercent)).div(usersCount.mul(PERCENTS_DIVIDER));
		token.transfer(msg.sender, withdrawAmt);
		users[msg.sender].checkpoint = block.timestamp;
		emit Withdrawn(msg.sender, withdrawAmt);
		return true;
	}

}
