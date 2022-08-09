// 사용할 모듈
// express ,nodemon, express-session, session-file-store

// 설치할 모듈
// ---------------------------------
// npm i express-session
// 저장된 세션의 정보를 파일로 보기 위해
// npm i session-file-store
// ---------------------------------

// const express = require("express");
// 아래처럼 이렇게 사용할 수도 있음
const app = require("express")();
// express-session 모듈 가져오고
const session = require("express-session");
// session-file-store 모듈을 가져오면서 함수 실행
const FileStore = require("session-file-store")(session);

// express session
app.listen(3000, () => {
    console.log("열림");
});

// const app = express();
// app.listen(3000,() => {
//     console.log("서버열림 ㅎ");
// });

app.use(
    session({
        // 세션을 발급할 때 사용되는 키 소스코드 노출 안되게 하자.
        secret:"ajy",
        // 세션을 저장하고 불러올 때 다시 저장할지 여부
        resave : false,
        // 세션에 저장할 때 초기화 여부
        saveUninitialized : true,
        // 저장소를 만들지 여부
        store : new FileStore(),
    })
);

app.get("/",(req,res) => {
    if(!req.session.key){
        req.session.key = "asdasd";
    };
    res.send(`key:${req.session.key}`);
});

app.get("/shop",(req,res)=>{
    res.send(`난 숍${req.session.key}`);
});