const express = require("express");
const fs = require("fs");
const socketio = require("socket.io");

let seats = [];

let temp = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
let temp1 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
let temp2 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let seatsArr = [temp, temp1, temp2];
let index = 0;

// 웹서버를 생성한다.
const app = express();
const PORT = 4000;
const server = app.listen(PORT, () => {
    console.log(PORT,"빈 포트 생성")
});

// socket.io 생성 및 실행
const io = socketio(server);

app.get("/", (req, res) => {
    fs.readFile("teacher.html", (err, data) => {
        res.send(data.toString());
    });
});

app.get("/seats/:id", (req, res) => {
    console.log(req.params.id);
    index = req.params.id;
    seats = seatsArr[index];
    res.send(seats);
});

io.sockets.on("connection",(socket) => {
    socket.on("reserve",(data) => {
        let seatsTemp = seatsArr[data.selectCount]
        seatsTemp[data.y][data.x] = 2;
        io.sockets.emit("reserve", data);
    });
});
