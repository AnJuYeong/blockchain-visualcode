import { Block } from "@core/blockChain/block";
import { DIFFICULTY_ADJUSTMENT_INTERVAL } from "@core/config";

// 블록의 체인 
export class Chain{
    // blockchain : Block배열의 타입을 가진 변수
    private blockchain : Block[];
    // 처음에 생성될 때 constructor로 클래스를 동적할당으로 생성 했을 때
    constructor(){
        // 최초의 블록은 거의 하드코딩으로 넣어준다.
        // 생성될 때 최초 블록 하나 추가 배열에 블록 체인에 최초 블록 추가
        this.blockchain = [Block.getGENESIS()];
    }

    // 현재 연결된 블록들 리스트를 확인하기 위해 getChain함수로
    // 연결된 노드들을 확인할 수 있는 함수.
    public getChain() : Block[]{
        return this.blockchain;
    }

    // 현재 연결된 블록들의 갯수 길이
    // 연결된 노드의 갯수
    public getLength() : number {
        return this.blockchain.length;
    }

    // 맨 마지막 블록을 확인하는 함수
    // 맨 마지막 노드 확인
    public getLatestBlock() : Block {
        return this.blockchain[this.blockchain.length - 1];
    }

    // 블록 체인에 블록을 추가하는 함수 매개변수로는 블록의 내용을 받는다
    // 반환 값으로는 Failable<Block,string> Block 타입이랑 string 타입을 반환 할 수 있는 함수
    // 반환 값은 객체이고 {isError : true, value : 여기 우리가 설정한 타입}
    // value라는 키 값이 Block 타입이나 stirng 타입을 허용한다.
    public addBlock( data : string[] ) : Failable<Block,string>{
        // getLatestBlock 함수로 마지막 블록을 가져오고
        const previousBlock = this.getLatestBlock();
        // getAdjustmentBlock 함수로 10번째 전 블록을 가져오고
        const adjustmentBlock : Block = this.getAdjustmentBlock();
        // generateBlock함수로 마이닝이 끝난 추가할 블록을 가져오고
        const newBlock = Block.generateBlock(previousBlock,data,adjustmentBlock);
        // 그 새로운 블록을 검증을 하는데 isValidNewBlock 이전 블록(마지막 블록)과 새로운 블록을
        // 매개변수로 전달해서 블록의 높이 검사와 새로운 블록의 이전 블록 해시 검사 새로운 블록의 해시 검사
        const isValid = Block.isValidNewBlock(newBlock, previousBlock);

        // 블록의 검증이 끝나고 에러가 있으면 반환
        if(isValid.isError) return {isError : true, value : "에러남"};

        // 다 통과했으면 새로운 블록을 블록체인에
        this.blockchain.push(newBlock);

        // 에러가 없다고 알려주고 value로 Block 타입의 newBlock 반환
        return {isError : false, value : newBlock};
    }
    // 체인 검증 코드
    // 매개변수로 Block 타입의 chain 배열을 매개변수로 받고
    // 블록 체인을 받고 
    public isValidChain(chain : Block[]) : Failable<undefined,string>{
        // 최초 블록 검사 하는 코드
        // const genesis = chain[0]
        
        // 체인의 유효성 검사
        for(let i = 0; i < chain.length; i++){
            // 현재 인덱스의 블록
            const newBlock = chain[i];
            // 그 인덱스의 이전 블록
            const previousBlock = chain[i-1];
            // 블록 검증 시도
            const isValid = Block.isValidNewBlock(newBlock, previousBlock);
            // 검사 오류시
            if(isValid.isError) return {isError : true, value : isValid.value}
        }
        // 다 통과하면 패스
        return {isError : false, value : undefined};
    }
    // repalceChain 본인과 상대방의 체인을 검사하는 함수
    public replaceChain(receivedChain : Block[]) : Failable<undefined,string>{
        // 본인 체인과 상대방 체인을 검사하는
        //상대방
        const latestReceivedBlock : Block = receivedChain[receivedChain.length - 1]
        // 본인
        const latestBlock : Block = this.getLatestBlock();
        // 높이가 0 받은 블록이 최초라서 검사할 필요가 없고
        if(latestReceivedBlock.height == 0){
            return {isError : true, value : "받은 블록이 최초 블록"}
        }
        // 본인의 블록이 더 길거나 같은 블록이면 검사 필요가 없다.
        if(latestReceivedBlock.height <= latestBlock.height){
            return { isError : true, value : "본인의 블록보다 길거나 같은 블록" }
        }
        // 여러명이 빠르게 추가하다보면 검증단계에서 블록의 길이 차이가 있는데 
        // 해시 비교를 해서 이전 블록의 해시가 같다면 블록의 갯수 차이가 있는 것으로 
        // 검사 에러 이 문제는 사람들이 빠르게 블록을 추가하다가 여러명이 비슷하게 블록
        // 생성이 됐을 때 일어남
        if(latestReceivedBlock.previousHash === latestBlock.hash){
            return { isError : true, value : "블록이 하나만큼 모자라다." }
        }
        // 본인의 체인이 더 짧다하면 체인 갱신 해줌
        // 체인을 갱신해줌
        this.blockchain = receivedChain;

        // 다 통과 했으니까 반환
        return {isError : false, value : undefined}
    }

    // 생성 시점 기준으로 블록 높이 -10인 블록 구하기

    // 현재 높이 값 < DIFFICULTY_ADJUSTMENT_INTERVAL :  최초 블록 반환하고
    // 현재 높이 값 > DIFFICULTY_ADJUSTMENT_INTERVAL : -10번째 블록 반환
    public getAdjustmentBlock(){
        // 자신의 길이를 getLength 함수로 가져오고
        // 자신의 길이가 10보다 작으면 최초의 블록을 반환한다.
        // 길이가 10보다 크면 -10번째 블록을 반환해준다.
        const currentLength = this.getLength();
        const adjustmentBlock : Block = 
        this.getLength() < DIFFICULTY_ADJUSTMENT_INTERVAL ? Block.getGENESIS() : 
        this.blockchain[currentLength - DIFFICULTY_ADJUSTMENT_INTERVAL];

        return adjustmentBlock; //  최초 블록 or -10번째 블록 반환
    }

}