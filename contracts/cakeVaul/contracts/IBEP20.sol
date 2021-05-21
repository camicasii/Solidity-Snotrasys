// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.6.12;

interface IBEP20{
    function totalSupply() external view returns (uint);
    function balanceOf(address guy) external view returns (uint);
    function allowance(address src, address guy) external view returns (uint);
    function burn(uint256 amount) external;
    function approve(address guy, uint wad) external returns (bool);
    function transfer(address dst, uint wad) external returns (bool);
    function transferFrom(address src, address dst, uint wad
    ) external returns (bool);
}
