// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "./NftToken.sol";

contract SaleToken{
    // 상태 변수인데 NftToken과 상호작용을 하기 위해서 만든 상태 변수
    NftToken public Token;

    // 배포 단계에 상호작용을 하기 위해 배포한 NftToken의 CA를 매개변수로 받아서 전달해준다.
    constructor(address _tokenAddress){
        Token = NftToken(_tokenAddress);
    }

    // Token.getTokenRank(1) 이런식으로 상호작용할 수 있다.

    // Token info 구조체
    struct TokenInfo{
        uint tokenId;
        uint Rank;
        uint Type;
        uint price;
    }
    
    // token의 아이디 => price(토큰의 가격)
    mapping(uint => uint) public tokenPrices;
    // tokenPrices =  {
    //     id : price,
    // }

    // 판매중인 NFT의 토큰 아이디 값을 담아놓은 상태변수
    uint[] public SaleTokenList;

    // 판매 등록 함수
    function SalesToken(uint _tokenId, uint _price) public {
        address tokenOwner = Token.ownerOf(_tokenId); // 토큰의 소유자 계정

        // 토큰의 소유자를 가져왔을때 소유자가 맞으면 판매 가능
        require(tokenOwner == msg.sender);

        // 판매 가격이 0보다 큰값인지 확인
        require(_price > 0);

        // this는 이 컨트랙트
        require(Token.isApprovedForAll(msg.sender, address(this)));
        // isApprovedForAll : 첫번째 매개변수 판매자, 두번째 매개변수 현재 컨트랙트
        // SalesToken() 함수를 실행한 사람이 모든 토큰의 권한을 위임 했는지 컨트랙트 CA에 체크해주는 함수 

        // opensea 에서는 nft 마켓에 메타마스크를 연결할떄 setApprovedForAll() 함수를 실행해서 자신이 소유한 모든 NFT 권한을 opensea에 위임 하게 한다. 

        // 토큰의 가격을 토큰아이디 인덱스에 가격 추가 
        tokenPrices[_tokenId] = _price;

        // 판매 리스트에 토큰 아이디 추가 
        SaleTokenList.push(_tokenId);

    }


    // 토큰 구매 함수
    function PurchaseToken(uint _tokenId) public payable{
        address tokenOwner = Token.ownerOf(_tokenId); // 토큰 소유자 계정

        // 판매자가 자신의 토큰을 구매 못하게 
        require(tokenOwner != msg.sender);

        // 판매중인 토큰만 구매할 수 있게 채크
        // 여기서 tokenPrices의 값이 0 이상인 경우 판매중으로 인식
        require(tokenPrices[_tokenId] > 0);

        // 구매자가 지불한 이더가 판매 가격 이상인지 체크
        require(tokenPrices[_tokenId] < msg.value);

        // CA가 토큰 판매자에게 이더 전송
        payable(tokenOwner).transfer(msg.value);

        // 토큰 전달을 하고
        Token.transferFrom(tokenOwner, msg.sender, _tokenId);

        // 토큰 아이디 : 계정 주소
        // {
        //     1 : "0xasdqweacxzc"
        // }
        // {
        //     0xasdqweacxzc : 20
        // }

        // 판매가격을 0으로 만들면 상품 판매중이지 않게 된다.
        tokenPrices[_tokenId] = 0;
        popSaleToken(_tokenId);
    }

    // 판매 리스트 제거 함수
    function popSaleToken(uint _tokenId) private returns (bool){
        for (uint i = 0; i < SaleTokenList.length; i++){
            if(SaleTokenList[i] == _tokenId){
                SaleTokenList[i] = SaleTokenList[SaleTokenList.length - 1];
                SaleTokenList.pop();
                return true;
            }
        }
        return false;
    }

    // 전체 판매 리스트 확인 전체 확인은 view를 사용
    function getSaleTokenList() public view returns (TokenInfo[] memory){
        // 리스트에 길이가 있을 때
        require(SaleTokenList.length > 0);

        // SaleTokenList 리스트의 길이 만큼 빈값을 가지게 배열을 만듬
        TokenInfo[] memory list = new TokenInfo[](SaleTokenList.length);
        // const arr = new Array(SaleTokenList.length);
        // 이렇게 추가하던 배열

        for(uint i = 0; i < SaleTokenList.length; i++){
            uint tokenId = SaleTokenList[i];
            uint Rank = Token.getTokenRank(tokenId);
            uint Type = Token.getTokenType(tokenId);
            uint price = tokenPrices[tokenId];

            // list 배열에 만들어진 구조체 담기
            list[i] = TokenInfo(tokenId, Rank, Type, price);
        }
        // [
        // {tokenId : 20, Type : 1, Rank : 2, price : 100},
        // {tokenId : 20, Type : 1, Rank : 2, price : 100}
        // ] << 이렇게 만들어준 것
        return list;
    }
    
    // 소유하고 있는 NFT 리스트 view 함수
    function getOwnerToken(address _tokenOwner) public view returns (TokenInfo[] memory){
        uint balance = Token.balanceOf(_tokenOwner);
        require(balance != 0);
        // balance크기의 빈 배열 만들기 list
        TokenInfo[] memory list = new TokenInfo[](balance);

        for (uint i = 0; i < balance; i++) {
            // 토큰 소유자의 토큰을 순서대로 가져올 아이디
            uint tokenId = Token.tokenOfOwnerByIndex(_tokenOwner, i);
            uint Rank = Token.getTokenRank(tokenId);
            uint Type = Token.getTokenType(tokenId);
            uint price = tokenPrices[tokenId];

            list[i] = TokenInfo(tokenId, Rank, Type, price);
        }
        return list;
    }
    // 소유하고 있는 제일 최신 NFT 보여주는 view 함수 민팅했을 때 바로 보여주기 위한 용도로 사용
    function getLateToken(address _tokenOwner) public view returns (TokenInfo memory){
        uint balance = Token.balanceOf(_tokenOwner);
        uint tokenId = Token.tokenOfOwnerByIndex(_tokenOwner, balance - 1);
        uint Rank = Token.getTokenRank(tokenId);
        uint Type = Token.getTokenType(tokenId);
        uint price = tokenPrices[tokenId];

        return TokenInfo(tokenId, Rank, Type, price);
    }

}