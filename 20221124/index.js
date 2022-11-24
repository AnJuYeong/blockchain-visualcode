const { Contract } = require("./controll/compile");
const { Client } = require("./controll/client");

const [abi, bytecode] = Contract.compile("test.sol");

const client = new Client("ws://127.0.0.1:9005");


const contract = new client.web3.eth.Contract(abi);

const txObject = {data : bytecode};

const Address = "0x9495263b6abb3b9e9041f6e5f1cae27f1f443e6e"

async function init() {
    // deploy() : 반환값이 promise 객체
    // 트랜잭션이 처리될 때 까지 기다린다.
    const instance = await contract.deploy(txObject).send({from : Address})
    // 배포하고 메소드를 변수들을 가져와야 하는데
    // 필요한게 contract Address
    // instance 객체 안에 options.address에 contract address가 들어있다.
    console.log(instance.options.address);

}

init();

const CA = "0x17a25DF93f1F8Dc8e45594B4E391E28f580345BD";

// 컨트랙트 조회해서 함수와 변수 가져오기
// 필요한게 abi와 contract address
const deployed = new client.web3.eth.Contract(abi, CA);
// getter로 value값 가져옴
deployed.methods.value().call().then((data) => {
    console.log(data)
});

deployed.methods.setValue("aasdasdasd").send({from : Address}).then((data) => {
    console.log(data);
});

// geth --datadir node --http --http.addr "127.0.0.1" --http.port 9000 --http.corsdomain "*" \
//  --http.api "admin,eth,debug,miner,net,txpool,personal,web3" --syncmode full --networkid 7722\
//  --port 30300 --ws --ws.addr "127.0.0.1" --ws.port 9005 --ws.origins "*" \
//  --ws.api "admin,eth,debug,miner,net,txpool,personal,web3" \
//  --allow-insecure-unlock --unlock "0,1" --password "./node/password.txt"