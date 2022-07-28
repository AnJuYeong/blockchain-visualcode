const express = require("express");
const fs = require("fs");
const socketio = require("socket.io");


let seats1 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
let seats2 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
let seats3 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

// 웹서버를 생성한다.
const app = express();
const PORT = 4000;
const server = app.listen(PORT, () => {
    console.log(PORT,"빈 포트 생성")
});

// socket.io 생성 및 실행
const io = socketio(server);

app.get("/", (req, res) => {
    fs.readFile("test1.html", (err, data) => {
        res.send(data.toString());
    });
});
app.get("/seats1", (req, res) => {
    fs.readFile("test1.html", (err, data) => {
        res.send(data.toString());
    });
});
app.get("/seats2", (req, res) => {
    fs.readFile("test2.html", (err, data) => {
        res.send(data.toString());
    });
});
app.get("/seats3", (req, res) => {
    fs.readFile("test3.html", (err, data) => {
        res.send(data.toString());
    });
});

app.get("/seats1/1", (req, res) => {
    res.send(seats1);
});
app.get("/seats2/1", (req, res) => {
    res.send(seats2);
});
app.get("/seats3/1", (req, res) => {
    res.send(seats3);
});

io.sockets.on("connection",(socket) => {
    socket.on("re1",(data) => {
        seats1[data.y][data.x] = 2;
        io.sockets.emit("re1", data);
    });
});
io.sockets.on("connection",(socket) => {
    socket.on("re2",(data) => {
        seats2[data.y][data.x] = 2;
        io.sockets.emit("re2", data);
    });
});
io.sockets.on("connection",(socket) => {
    socket.on("re3",(data) => {
        seats3[data.y][data.x] = 2;
        io.sockets.emit("re3", data);
    });
});