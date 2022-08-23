const { log } = console;

const express = require("express");
const socketio = require("socket.io");
const fs = require("fs");
const ejs = require("ejs");
const mysql = require("mysql2");
const path = require("path");

const app = express();
const PORT = 8282;
const server = app.listen(PORT, () => {
  log("localhost:", PORT);
});

const io = socketio(server);

// ㅜ body-parser
app.use(express.urlencoded({ extended: false }));

// ㅜ html 렌더링에 뷰 엔진 설정
app.set("view engine", "html");

// ㅜ html의 뷰 엔진을 ejs 렌더링 방식으로 변경
app.engine("html", ejs.renderFile);

// ㅜ views 키 값에 렌더링할 파일들을 모아둔 폴더의 주소 저장
app.set("views", path.join(__dirname, "../view"));

// ㅜ 절대 경로 설정

app.use(express.static(path.join(__dirname,'..')));

app.use("/img", express.static(path.join(__dirname, "/img_Jang")));
app.use("/img", express.static(path.join(__dirname, "/img_Ahn_Ju")));

app.get("/", (req, res) => {
    res.render("main_AJJ");
});



io.sockets.on("connection",  (socket) => {
    socket.on("message", (data) => {
        socket.emit("to-message", data);
    });
});
