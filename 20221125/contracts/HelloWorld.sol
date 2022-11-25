// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract HelloWorld{
    string public value;
    
    constructor(){
        value = "Hello World!";
    }

    function setValue(string memory v) public{
        value = v;
    }
}