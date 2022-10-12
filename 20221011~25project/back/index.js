// 사용할 모듈 
// express, nodemon, sequelize, mysql2, cors

// cors 에러 해결 방법
// 콘솔창에 CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
// 에러가 나면 cors 설정을 해주어야한다.

// cors란 브라우저 보안정책
// cors는 브라우저가 서로 다른 도메인/포트의 서버로 요청을 했을 때 발생한다.
// 접근을 허용 해줘야한다. 해킹할 수도 있고 

// cors 설치
// npm i cors

// app.use((cors){
//     origin : '*', // 누가오든 요청허용
//     origin : true, // 들어오는 요청 도메인/ 포트가 자동으로 origin에 들어간다.
//     origin : '도메인' // 실제로 서비스 되는 도메인을
//                         입력해줘서 해당 도메인만 접근할 수 있게 허용한다.
//     credential : true, false (사용자 인증이 필요한 리소스를 접근을 허용할지 안할지
//                                 쿠키 같은 거 등등)
// })


const express = require("express");
const cors = require("cors");
const sequelize = require("sequelize");
const mysql = require();
const app =express();

// const options = {
//     origin : ""
// }

// app.use(express.json());
// app.use(cors(options));

app.listen(8000, ()=> {
    console.log("서버 열림ㅋ");
})