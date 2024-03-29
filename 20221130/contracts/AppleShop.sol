// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract AppleShop {
    // address 속성명, uint 속성값, myApple 변수명의 객체
    mapping(address => uint) myApple;
    mapping(address => uint) myBanana;
    mapping(address => uint) myMelon;

    // // payable 속성이 있을때 CA는 ETH를 받을수 있다.
    // // 트랜잭션 객체에 value값을 ETH로 전달할수 있다.
    // // 사과 구매 함수
    // function buyApple() public payable {
    //     myApple[msg.sender] += 1;
    // }

    // 과일 전체 구매 함수
    function buyFruit(uint appleNum, uint bananaNum, uint melonNum) public payable {
        myApple[msg.sender] += appleNum;
        myBanana[msg.sender] += bananaNum;
        myMelon[msg.sender] += melonNum;
    }
    // 과일 전체 판매 함수
    function sellFruit(uint appleNum, uint bananaNum, uint melonNum, uint sell) public payable {
        myApple[msg.sender] -= appleNum;
        myBanana[msg.sender] -= bananaNum;
        myMelon[msg.sender] -= melonNum;
        payable(msg.sender).transfer(sell);
    }


    // // 사과 전체 판매 함수
    // function sellApple(uint applePrice) public payable {
    //     uint256 refund = myApple[msg.sender] * applePrice;
    //     myApple[msg.sender] = 0;
    //     // payable 함수의 매개변수로 주소를 전달해준다.
    //     // 전달한 주소의 계정에 돈을 보내줌
    //     // 보내주는 돈은 사과의 갯수
    //     payable(msg.sender).transfer(refund);
    // }


    // 가지고있는 사과 확인 함수
    function getApple() view public returns (uint){
        return myApple[msg.sender];
    }
    // 가지고있는 바나나 확인 함수
    function getBanana() view public returns (uint){
        return myBanana[msg.sender];
    }
    // 가지고있는 멜론 확인 함수
    function getMelon() view public returns (uint){
        return myMelon[msg.sender];
    }
}