import { Wallet } from "@core/wallet/wallet";

// txOut 객체를 생성해줄 클래스

export class TxOut implements ITxOut{
    public account : string; // 보낼 주소
    public amount : number; // 보낼 코인
    constructor(account : string, amount : number){
        this.account = account;
        this.amount = amount;
    }
    // 인자값 : 보내는 계정, 받는 계정, 합, 코인갯수
    // txOuts 배열을 추가할 함수
    static createTxOuts(sum : number, receviedTx : any,) : TxOut[] {
        // receivedTx.amount = 보낼 코인
        // receivedTx.sender = 보내는 사람의 공개키
        // receivedTx.received = 받는 사람 계정

        const { amount, sender, recevied } = receviedTx;
        const senderAccount : string = Wallet.getAccount(sender);

        // 받는 사람 txOut
        const receivedTxOut = new TxOut(recevied,amount);
        // 보내는 사람 txOut
        // sum 보내는 사람의 코인 합
        const senderTxOut = new TxOut(senderAccount, sum - amount);
        // 보내는 사람의 코인이 0보다 작거나 같으면
        // 
        if(senderTxOut.amount <= 0) return [receivedTxOut];

        return [receivedTxOut, senderTxOut];
    }
}