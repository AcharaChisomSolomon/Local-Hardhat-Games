// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.24;

contract Game5 {
    mapping (address => uint) balances;
    mapping (address => uint) allowances;

    function giveMeAllowance(uint allowance) external {
        allowances[msg.sender] += allowance;
    }

    function mint(uint amount) external {
        allowances[msg.sender] -= amount;
        balances[msg.sender] += amount;
    }

    event Winner(address winner);

    function win() public {
        require(balances[msg.sender] >= 10000);
        emit Winner(msg.sender);
    }
}