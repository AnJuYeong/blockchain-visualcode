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
  // 다중쿼리문을 사용하려면 설정하는 옵션
  // multipleStatements : 다중 쿼리문을 사용할 수 있도록 하는 옵션 true, false
  multipleStatements: true,
});

// mysql에 테이블 만들기
temp.query("SELECT * FROM products", (err, res) => {
  if (err) {
    const sql =
      "CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), number VARCHAR(20), series VARCHAR(20))";
    temp.query(sql);
  } else {
    // console.log(res);
  }
});

temp.query("SELECT * FROM products2", (err, res) => {
  if (err) {
    const sql =
      "CREATE TABLE products2(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), number VARCHAR(20), series VARCHAR(20))";
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

app.get("/delete/:id", (req, res) => {
  // url요청해서 파라미터를 뽑을 수 있는데
  // req요청의 값을 이용할 수 있다.
  // params 매개변수
  // http://localhost:4000/delete/1 이런 방식이면
  // /delete/:id 이 주소에서 id가 params 키 값이고
  // http://localhost:4000/delete/1 실제로 요청한 url의 /:id 이 자리에 있는 값이 value이다.
  // {params:{id:1}} 그래서 이렇게 값을 받을 수 있다.
  // console.log(req.params); 그래서 이렇게 값을 받을 수 있다.
  // AUTO_INCREMENT도 같이 증가를 하고 값이 남아있는데
  // 컬럼을 추가할 때 마다 id가 생성이 자동으로 되고 AUTO_INCREMENT도 증가를 했고
  // UPDATE와 ALTER의 차이는 둘다 수정하는 명령어이긴 한데
  // UPDATE(데이터 명령어)는 데이터 베이스의 관계에 저장된 데이터를 수정하는것.
  // ALTER(데이터의 정의 명령어)는 데이터 베이스의 관계 구조를 수정하는데 사용된다.
  const sql = "DELETE FROM products WHERE(id = ?)";
  const sql2 = "SET @CNT = 0;";
  const sql3 = "UPDATE products SET products.id = @CNT:=@CNT+1;";
  const sql4 = "ALTER TABLE products AUTO_INCREMENT = 0;";
  temp.query(sql, [req.params.id], () => {
    temp.query(sql2 + sql3 + sql4, () => {
      res.redirect("/");
    });
  });
});

// 수정하는거 불러오는거
app.get("/edit/:id", (req, res) => {
  fs.readFile("src/edit.html", "utf-8", (err, data) => {
    temp.query(
      "SELECT * FROM products WHERE id = ?",
      [req.params.id],
      (err, result) => {
        res.send(
          ejs.render(data, {
            data: result[0],
          })
        );
      }
    );
  });
});

// 수정 클릭시 수정 해당 아이디 수정되도록
// UPDATE `test5`.`products`
// SET `name` = 'asd', `number` = '123', `series` = '6123' WHERE (`id` = '4');
app.post("/edit/:id", (req, res) => {
  const { name, number, series } = req.body;
  const sql =
    "UPDATE products SET name = ?, number= ?, series = ? WHERE id = ?;";
  temp.query(sql, [name, number, series, req.params.id], () => {
    res.redirect("/");
  });
});

// mysql 테이블 두개 불러오기
// app.get("/test", (req, res) => {
//   const sql = "SELECT * FROM products;";
//   const sql2 = "SELECT * FROM products2;";
//   temp.query(sql + sql2, (err, result) => {
//     console.log(result[0]);
//     console.log(result[1]);
//   });
// });

// 아작스 사용(삭제)
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
