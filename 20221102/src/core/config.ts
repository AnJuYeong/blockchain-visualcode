// 제네시스 블록 여기다.

export const GENESIS : IBlock = {
    version : '1.0.0',
    height : 0,
    timestamp : new Date().getTime(),
    hash : "0".repeat(64),
    previousHash : "0".repeat(64),
    merkleRoot : "0".repeat(64),
    difficulty : 0,
    nonce : 0,
    data : ["The Times 03/jan/2009 Chancellor on brink of second bailout for banks"]
}

// 보통 최초 블록은 하드코딩으로 만들어주는 경우가 많데요
// 