// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// 컨트랙트 파일 전체 코드 가져오기 import
import './ERC20.sol';

// 컨트랙트 상속 is로 SOONToken에 ERC20를 상속 
contract SOONToken is ERC20 {
    address public owner;
    uint256 public ethCanBuy = 200; // 1ETH 당 200토큰
    
    constructor(string memory _name, string memory _symbol, uint256 _amount){
        // ERC20 상속 받아서 있는 것
        owner = msg.sender;
        name = _name;
        symbol = _symbol;

        // mint 함수 만들 예정
        mint(_amount * (10 ** uint256(decimals)));
    
    }

    // 익명 함수
    // receive : 특정 계정에서 CA에 이더를 전송했을 때 실행되는 함수
    // external이 있다는건 이 컨트랙트 자체에서 실행하지 않는다는 것
    // 선언 해둠
    receive() external payable{
        // require true면 실행이고 false면 종료였다..
        // require true면 실행
        require(msg.value != 0);
        uint amount = msg.value * ethCanBuy;

        require(balances[owner] >= amount);
        balances[owner] -= amount;
        balances[msg.sender] += amount;

        if(msg.sender == owner){
            mint(amount);
        }

        emit Transfer(owner, msg.sender, amount);
    }
}