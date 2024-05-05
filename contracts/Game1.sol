// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Game1 {
    event Winner(address winner);

    function win() public {
        emit Winner(msg.sender);
    }
}
