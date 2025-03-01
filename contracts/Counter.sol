// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 public count;

    // Increment the counter by 1
    function increment() public {
        count += 1;
    }

    // Decrement the counter by 1
    function decrement() public {
        count -= 1;
    }

    // Return the current counter value
    function getCount() public view returns (uint256) {
        return count;
    }
}
