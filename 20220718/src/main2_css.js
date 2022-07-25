// express가 뭔가? NodeJS를 사용해서 쉽게
// 서버 구성을 할 수 있게 만들어주는 클래스와 라이브러리
// 집합

// express 설치 명령어
// --------------------------------------------------
// npm i express
// --------------------------------------------------

// express을 가져와서 변수에 담아줌
const express = require("express");

// ejs는 node.js와 express에서 많이 사용하고 있는 템플릿 엔진
// ejs는 우리가 쓰는 기존 html문법을 사용하면서 <%%>이런 문법을
// 사용해서 크게 벗어나지 않게 서버와 데이터를 사용할 수 있는 장점이 있다.
// ejs 설치 명령어
// --------------------------------------------------
// npm i ejs
// --------------------------------------------------

const ejs = require("ejs");

// console.log(ejs);

// 절대경로 설정
const path = require("path");

// fs는 파일 읽기 쓰기를 쉽게 도와주는 모듈
const fs = require("fs");

// mysql 설치 명령어
// --------------------------------------------------
// npm i mysql2
// --------------------------------------------------

// body-parser는
// 요청과 응답사이에서 공통적인 기능을 해주느
// 미들웨어이다. 데이터를 body라는 객체 안에 담아서
// 요청 응답을 받을 수 있게 해준다고 보면 된다.
// 설치 명령어
// --------------------------------------------------
// npm i body-parser
// --------------------------------------------------
const bodyParser = require("body-parser");

const mysql = require("mysql2");

const temp = mysql.createConnection({
  user: "root",
  password: "1234",
  database: "test5",
});

temp.query("SELECT * FROM products", (err, res) => {
  if (err) {
    const sql =
      "CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), number VARCHAR(20), series VARCHAR(20))";
    temp.query(sql);
  } else {
    // console.log(res);
  }
});

// express 함수를 실행해서 반환 값을 app에 담아줌
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
  // extended의 옵션
  // true : express에서 기본 내장된 쿼리 스트링 모듈을 사용한다.
  // fasle : 쿼리 스트링 모듈의 기능이 좀 더 확장된 qs모듈을 사용한다.
);

// 포트를 정해줌
const PORT = 4000;

// app.get();
// app.post();

// app.get("요청 url")
app.get("/", (req, res) => {
  //   console.log(req);
  // http에선 end로 보내고 끝냈지만
  // express에서는 send로 보내고 끝낸다.
  // fs 모듈로 파일을 읽어온다.
  // fs 모듈이 readFile 파일을 읽어오는 함수
  // 매개변수 첫번째 파일의 경로이름
  // 두번째는 인코딩 방식
  // 세번째는 콜백 함수
  fs.readFile("src/list.html", "utf-8", (err, data) => {
    temp.query("SELECT * FROM products", (err, result) => {
      // ejs render 함수로 해당 불러온 파일을 그려준다.
      // ejs 두번째 매개변수로 데이터를 전달할 수 있다.
      res.send(
        ejs.render(data, {
          data: result,
        })
      );
    });
  });
});

// 절대경로의 시작점
app.use(express.static(path.join(__dirname, "/")));
// 경로에대한 약속
app.use("/css", express.static(path.join(__dirname, "/style")));
// 경로까지의 이름 약속 /css
// C:\Users\KGA_019\Desktop\7월\3주차\718\src/style

// a태그 사용한거.
app.get("/delete/:id", (req, res) => {
  const d = req.params;
  // console.log(d);
  const sql = "DELETE FROM products WHERE(id = ?)";
  temp.query(sql, [d.id], () => {
    res.redirect("/");
  });
});

// 아작스 사용한거.
// app.post("/delete", (req, res) => {
//   const sql = "DELETE FROM products WHERE id= ?";
//   console.log(req.body.idx);
//   temp.query(sql, [req.body.idx], () => {
//     res.redirect("/");
//   });
// });

app.get("/insert", (req, res) => {
  fs.readFile("src/insert.html", "utf-8", (err, data) => {
    res.send(data);
  });
});
app.post("/insert", (req, res) => {
  const data = req.body;
  // body객체 안에 form에서 보내준
  // 데이터는 input들의 name이 키값
  // 해당 input의 value값으로 전달된다.
  // 밑에꺼는 워크벤치 꺼 (그냥 가져옴)
  //   INSERT INTO `test5`.`products` (`id`) VALUES ('');
  const sql = "INSERT INTO products (name,number,series)VALUES(?,?,?)";
  temp.query(sql, [data.name, data.number, data.series], () => {
    // url 경로를 redirect함수의 매개변수 내용 경로로 이동한다.
    res.redirect("/");
  });
});
// app.get("/insert", (req, res) => {
//     res.sned("list page");
// });

app.listen(PORT, () => {
  console.log("server start");
});
