// 입장 토큰만 사용해서 로그인 검증을 했는데

// Access Token만 쓴 방식은

// 1. 이용자가 로그인 시도를 하고.
// 2. 서버에서 이용자를 확인하고 입장권을 발급하는데
// JWT토큰 인증 정보를 payload에 할당하고 생성
// 3. 생성한 토큰을 클라이언트에 반환해주고 클라이언트가 이 토큰을 가지고 있는다.
// 4. 클라이언트에서 권한을 인증 요청할 때 이 토큰을 같이 보낸다.
// 5. 서버는 토큰을 확인하고 payload의 값 인코딩되어 있는 값을 디코딩해서
// 사용자의 권환을 확인하고 (입장권이 맞는지) 데이터를 반환한다.
// 6. 만약에 토큰이 정상적인지 확인하고(토큰이 썩었는지 입장권 시간이 지났는지)
// 7. 날짜가 지난 토큰이면 새로 로그인 시킨다. 토큰 재발급(입장권 새로 산다.)

// Refresh Token과 같이 사용하면
// Access Token만 쓰면 인증보안에 취약 할 수 있고 다른 사람이 악의적으로 토큰을 
// 취득하면 토큰의 유효기간이 끝나기 전까지는 막을 수 없다.(이미 입장권 보여주고 입장함)
// Access token의 유효기간을 짧게하고 유효기간이 짧으니까 로그인을 자주 해야하는 문제가 생기는데
// (사용자가 이용하기 힘들다.) Refresh token으로 해결 할 수 있다.
// Refresh token과 Access token은 둘다 JWT 토큰이고
// Refresh token은 유효기간을 길게 주고 Access token이 유효기간이 끝났을 때
// 발급해주는 역할만 한다.

// 보통 Access token을 30분만 주면
// Refresh token의 유효기간을 하루 주고
// Access token의 유효기간이 끝나면 Refresh token의 유효기간을 확인하고
// Access token을 재발급 해준다.

// Access token Refresh둘다 이용한 인증 방식
// 1. 이용자 로그인
// 2. 서버에서 사용자를 확인하고 입장권 권한 인증 정보를 payload에 할당해서 생성하고
// Refresh token도 생성해서 서버에 저장하고 두 토큰 모두 클라이언트에 반환한다.
// 3. 클라이언트도 두 토큰을 저장한다.
// 4. 클라이언트가 권한 인증이 필요해서 요청하면 Access token을 전달해서 요청한다.
// 5. 서버는 전달받은 토큰을 확인하고 payload의 인코딩된 값을 디코딩해서 사용자의 권한을 확인한다.
// 6. 만약에 토큰이 정상적인지 확인을 하고(썩은 토큰인지)
// 7. 날짜가 지난 토큰이면 새로 로그인 시켜서 토큰을 발급 받게 한다.
// (만료된 Access token과 Refresh token을 해더에 실어서 서버에게 보낸다.)
// 8. 서버는 Access toekn과 Refresh tokoen을 확인하고 Refresh token이
// 만료 되지 않았으면 새로운 Access token을 발급해서 클라이언트에 전달한다.

// dotenv, express, cookie-parsr, jsonwebtoken, fs

// 모듈 설치
// ----------------------------------------------
// npm i dotenv express cookie-parser jsonwebtoken
// npm i --save-dev nodemon
// ----------------------------------------------
// 모듈 가져오기
const express = require("express");
const dot = require("dotenv");
const cookie = require("cookie-parser");
const jwt = require("jsonwebtoken");
const fs = require("fs");

// .env파일 사용하기 위해 설정
dot.config();

// 서버 객체 생성
const app = express();

// body 객체를 사용하기 위해 설정
app.use(express.urlencoded({ extended: false }));

// 해더에 쿠키를 추가하기 위해서 사용
app.use(cookie());

// /view의 이름으로 view 폴더의 경로를 설정
app.use("/v", express.static("view"));

// 사용자 정보 객체 하나 더미
const user = {
    id : "ajy",
    password : "1234",
};

app.get("/", (req, res) => {
    fs.readFile("view/login.html", "utf-8", (err, data) => {
        res.send(data);
    });
});

app.post("/login", (req, res) => {
    // 아이디 비밀번호
    // 키값으로 아이디 비밀번호 값 받아 놓기
    const {userId, userPw} = req.body;
    // 아이디 비밀번호 검증 맞는지
    if(userId === user.id && userPw === user.password)
    {
        // access token 발급
        const accessToken = jwt.sign({
            id : user.id,
        },
        process.env.ACCESS_TOKEN_KEY,
        {
            expiresIn: "5m",
        }
        );
        // refresh token 발급
        const refreshToken = jwt.sign({
            id : user.id,
        },
        process.env.REFRESH_TOKEN_KEY,
        {
            expiresIn : "1d",
        }
        );
        // 쿠키의 이름은 refresh 유효 시간은 하루
        res.cookie("refresh", refreshToken, { maxAge : 24 * 60 * 60 * 1000 });
        return res.send(accessToken);
    }
    else{
        return res.send("아이디 비밀번호 오류");
    }
});

app.post("/refresh", (req, res) => {
    // ?. 뒤에 오는 키값이 있으면 먼저 확인하고 값 반환
    // req.cookie?.refresh refresh 키값이 없어도 크래쉬 방지
    if(req.cookies?.refresh){
        const refreshToken  = req.cookies.refresh;
    } else{

    }
});

app.listen(3000, () => {
    console.log("서버열림");
});