// 펀딩 컨트랙트 만들어보기
// 이더 스캔 하면서 마이닝 버튼과 마이닝 스탑 만들기

/*

<순서>
index.html 파일을 만들고 내용 추가
.vscode 폴더를 만들고 안에 setting.json 파일 추가하고 적어주기
geth를 실행 시키고 자바스크립트 콘솔 실행시키기
html에서 라이브서버 실행
페이지에서 스레드 개수 조절하고 마이닝 시작하면 마이닝이 시작되고 블록의 정보가 화면에 띄워진다!
마이닝 중지하면 중지됨 

*/

// CMD 관리자로 실행 후 wsl 환경 실행
// geth를 먼저 실행하고
/*
geth --datadir node --http --http.addr "127.0.0.1" --http.port 9000 --http.corsdomain "*"  --http.api "admin,eth,debug,miner,net,txpool,personal,web3" --syncmode full --networkid 내네트워트 아이디 --port 30300 --ws --ws.addr "127.0.0.1" --ws.port 9005 --ws.origins "*"  --ws.api "admin,eth,debug,miner,net,txpool,personal,web3"  --allow-insecure-unlock --unlock "0,1" --password "./node/password.txt"
*/

// geth attach http://127.0.0.1:9000 접속 후
// 자바스크립트 콘솔창에서 miner.start(1)
// 이렇게 실행을 시켰는데
// miner.stop();
// miner.setEtherbase(eth.coinbase) 설정하고

/* 
    curl -X POST -H "Content-Type: application/json" --data '{ "jsonrpc":"2.0", "id" : 1, "method" : "miner_stop", "params" : []}' localhost:9000
*/
// 서버에 전달 할 때 객체의 속성
/*
    
    요청할 때
    id : 요청 아이디를 지정하고 서버에서 응답 받을 때 구별하려고 사용
    params : 서버에 전달 객체

    응답 받을 때
    id : 요청할 때 전달한 id가 들어온다
    result : 응답 데이터의 배열
    
*/

// 마이닝 사이트 만들어보기

// 지금까지 이더스캔 만든거에서 접속 중인 계정을 가져와서 접속 중인 계정이 블록 마이닝을 해서 채굴하고 실시간으로 잔액 보여주는 UI 만들기
// 계정 주소를 직접 입력해서 해도 괜찮고 아니면 메타 마스크를 이용해서 접속중인 계정으로 세팅해도 괜찮
