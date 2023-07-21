// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Counter {
  
 uint public counter = 0;

 function inr() public{
  counter ++;

 }

 function dec() public{
  counter --;
 }

function count()public view returns(uint){
  return counter;
}

}
 