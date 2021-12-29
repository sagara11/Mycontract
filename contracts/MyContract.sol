// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MyContract {
  address owner;

  constructor() public{
    owner = msg.sender;
  }

  modifier isOwner() {
    require(msg.sender == owner, "You are not the owner");
    _;
  }

  function testFomula(int256 a, int256 b) view public isOwner() returns(int256){
    return a + b;
  }
}
