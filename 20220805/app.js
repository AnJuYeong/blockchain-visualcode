// 오늘 수업 만들거
// 경매소 만들기 이거 응용해서
// 이후에 로그인 회원가입 붙여서 구현해 볼 것.
// 월요일에 쿠키 세션 JWT

// 사용할 모듈
// express, ejs, socket.io, fs, nodemon

// 1. express 서버 세팅
// 2. 페이지 라우터 분리해서 보여주기 
// 3. nodemon 개발 버전으로 설치

// / 루트경로 페이지 하나
// /shop 페이지 하나  

const express = require("express");
const socketio = require("socket.io");
const fs = require("fs");
const ejs = require("ejs");


const app = express();
// use 함수 사용해서 설정 추가
// 이름도 사용하겠다는 뜻
// express static 함수 사용
// 함수를 전달했고 sercver의 설정에 파일의 경로를 설정해준다.
// __dirname + "/image"
// __dirname 현재 프로젝트의 경로
// "/src" 이부분은 자신이 설정한 경로의 이름을 정해줄 수 있다.
// __dirname + "/image" 까지의 경로가 "/src"이 이름으로 설정된 것
app.use("/src",express.static(__dirname + "/image"));
app.use("/src2",express.static(__dirname + "/image2"));
// console.log(express.static(__dirname + "/image"));
// console.log(__dirname + "/image");

const PORT = 3000;

const server = app.listen(PORT,() => {
    console.log("포트 3000번 열었다.");
});

//상품의 번호를 정해줄 변수
let counter = 0;

// 생성자 함수 (객체를 만들기 위해 함수 만듬)
function Product(name, image, price, count){
    // 번호가 증가할 수 있도록 증감 연산자 사용 count++;
    this.index = counter++;
    this.name = name;
    this.image = image;
    this.price = price;
    this.count = count;
};

// 동적 할당으로 new를 붙여서 생성자 함수 사용
// console.log(new Product("사과","/","1000","20"));

// 상품을 가지고 있을 박스
// 상품들 전부 가지고 있다.
const products = [
    new Product("사과","/","1000","20"),
    new Product("수박","/","5000","20"),
    new Product("초코바","/","100","20"),
    new Product("비타민","/","10000","20"),
    new Product("커피","/","4000","20"),
];
// console.log(products);

app.get("/",(req,res) =>{
    fs.readFile("page.html","utf-8", (err, data) => {
        res.send(data);
    });
});

app.get("/shop",(req,res) =>{
    // 파일 읽어 온 것
    // fs.readFileSync("shop.html", "utf-8") 이렇게 쓰고 반환 값을 받으면
    // html 파일을 읽어서 utf-8 인코딩하고 반환해준다.
    const page = fs.readFileSync("shop.html", "utf-8");
    // console.log(page);
    res.send(
        ejs.render(page,{
            products : products,
        })
    );
    // fs.readFile("shop.html","utf-8", (err, data) => {
    // })
    //     res.send(data);
    // });
});

// 소켓 생성 및 실행
const io = socketio(server);

let cart = [];

// 소켓 이벤트 연결
// connection 클라이언트가 접속했을 때
io.on("connection",(socket) =>{
    // 상품 구매 취소 했을 때 돌리는 함수
    function onReturn(index){
        // 물건의 갯수를 다시 돌린다. 더해준다.
        products[index].count++;
        // 물건을 제거
        // 배열 안의 값 제거 delete 배열[인덱스]
        delete cart[index];
        let count = products[index].count;
        io.emit("count", {
            index,
            count,
        });
    }

    // 이벤트 연결 웹소켓이 가지고 있는 이벤트
    socket.on("cart",(index) => {
        // 물건의 갯수를 감소
        products[index].count--;
        // 빈 객체를 하나 만들어서 해당 배열의 인덱스 자리에 넣고 
        cart[index] = {};
        // 해당 배열의 인덱스 자리에 있는 객체에 index 키를 추가하고 벨류를 넣어준다.
        cart[index].index = index;
        let count = products[index].count;
        io.emit("count",{
            index,
            count,
        });
        //{
        //  index : 1,
        //  count : 2,
        // }
        // 이런식으로 보임 짧은 문법
    });

    // 구매 했을 때 이벤트 연결
    socket.on("buy",(index) => {
        // 카트의 해당 상품 인덱스 제거
        delete cart[index];
        let count = products[index].count;
        io.emit("count",{
            index,
            count,
        });
    });

    //상품 구매를 취소했을 때
    socket.on("return",(index) =>{
        onReturn(index);
    });
});

