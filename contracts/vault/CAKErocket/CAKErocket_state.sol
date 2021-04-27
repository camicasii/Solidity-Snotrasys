// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;
import "../../utils/math/SafeMath.sol";
import "../../token/IBEP20.sol";

contract BNBrocket_state{
	using SafeMath for uint256;
    IBEP20 public token;
	uint256[3] internal REFERRAL_PERCENTS = [50, 20, 10];
	uint256 constant internal INVEST_MIN_AMOUNT = 200 finney;
	uint256 constant internal ROI_BASE = 80;
	uint256 constant internal COMUNITY_BONUS = 5;
	uint256 constant internal MAX_COMUNITY_BONUS = 80;
	uint256 constant internal DEV_FEE = 100;
	uint256 constant internal SECURE_FEE = 20;
	uint256 constant internal MIN_WITHDRAW = 200 finney;
	uint256 constant internal WITHDRAW_FEE_PERCENT = 100;
	uint256 constant internal HOLD_PERCENT = 5;
	uint256 constant internal MAX_HOLD_PERCENT = 60;
	uint256 constant internal BONUS_POOL = 1;
	uint256 constant internal MAX_BONUS_POOL = 100;
	uint256 constant internal POOL_DIVIDER = 800 ether;
	uint256 constant internal MAX_PROFIT = 2000;
	uint256 constant internal PERCENTS_DIVIDER = 1000;
	uint256 constant internal TIME_STEP = 1 minutes;

	uint256 internal initDate;

	uint256 internal totalUsers;
	uint256 internal totalInvested;
	uint256 internal totalWithdrawn;
	uint256 internal totalDeposits;
	uint256 internal totalReinvested;

	address payable public devAddress;
	address payable public secureAddress;

	struct Deposit {
		uint256 amount;
		uint256 withdrawn;
		uint256 initAmount;
		uint256 start;
	}

	struct User {
		mapping (uint256 => Deposit) deposits;
		uint256 depositsLength;
		uint256 reinvested;
		uint256 bonus;
		uint256 checkpoint;
		uint256 lasReinvest;
		uint256[3] referrerCount;
		address payable referrer;
	}

	mapping (address => User) public users;

	event Paused(address account);
	event Unpaused(address account);

	modifier onlyOwner() {
		require(devAddress == msg.sender, "Ownable: caller is not the owner");
		_;
	}

	modifier whenNotPaused() {
		require(initDate > 0, "Pausable: paused");
		_;
	}

	modifier whenPaused() {
		require(initDate == 0, "Pausable: not paused");
		_;
	}

	function unpause() external whenPaused onlyOwner{
		initDate = block.timestamp;
		emit Unpaused(msg.sender);
	}

	function isPaused() external view returns(bool) {
		return (initDate == 0);
	}

	function getMaxprofit(Deposit memory ndeposit) internal pure returns(uint256) {
		return (ndeposit.initAmount.mul(MAX_PROFIT)).div(PERCENTS_DIVIDER);
	}

}
