// SPDX-License-Identifier: MIT
pragma solidity >=0.4.1 <0.9.0;

contract Migrations {
  address public owner;
  uint public last_completed_migration;

  modifier restricted() {
    if (msg.sender == owner) _;
  }

  function migrations() public {
    owner = msg.sender;
  }

  function setCompleted(uint completed) public restricted {
    last_completed_migration = completed;
  }

  function upgrade(address new_address) public restricted {
    // Migrations upgraded = migrations(new_address);
    // upgrade.setCompleted(last_completed_migration);
  }
}
