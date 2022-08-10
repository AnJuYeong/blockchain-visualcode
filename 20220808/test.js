
const express = require("express");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const dots = require("dotenv");
const bodyParser = require("body-parser");
const session = require("express-session");
const FileStore = require("session-file-store")(session);

const app = express();
// config()함수 사용
dots.config();

app.use(
    bodyParser.urlencoded({
      extended: false,
    })
);

app.use(
    session({
      // 세션을 발급할 때 사용되는 키 소스코드 노출 안되게 하자.
      secret: process.env.SECRETKEY,
      // 세션을 저장하고 불러올 때 다시 저장할지 여부
      resave: false,
      // 세션에 저장할 때 초기화 여부
      saveUninitialized: true,
      // 저장소를 만들지 여부
      store : new FileStore(),
    })
);

app.post("/userlogin", (req,res) => {
    const id = req.body.userId;
    const pw = req.body.userPw;

    const key = process.env.KEY;

    let token = jwt.sign(
        {
            // 토큰 설정 타입 JWT
            type : "JWT",
            // 토큰의 내용물
            userId : id,
            userPw : pw,
        },
        key,
        {
            // 토큰의 유효시간
            expiresIn : "2m",
            // 토큰을 발급한 사람
            issuer : "안주영",
        }
    );
    req.session.key = token
    let data = {
        msg : "유저 정보",
        token,
    };
    res.send(JSON.stringify(data));
});



app.get("/", (req,res) => {
    fs.readFile("test.html", "utf-8", (err, data) => {
        res.send(data);
    });
});

app.listen(3000, () => {
    console.log("서버가 열렸습니다.");
});