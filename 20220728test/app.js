// 귓속말 채팅

// 사용할 것들
// express, socket.io, fs, nodemon

const express =require("express");
const socketio = require("socket.io");
const fs = require("fs");

const app = express();

const PORT = 3000;
const server = app.listen(PORT,() => {
    console.log(PORT,"번에 열렸어요");
});

const io = socketio(server);

app.get("/", (req, res) => {
    fs.readFile("page.html","utf-8", (err, data) => {
        res.send(data);
    });
});

io.on("connection",(socket) => {
    socket.on("joinRoom",(room, name) =>{
        socket.join(room);
        io,to(room).emit("joinRoom", room, name);
    });
    
    socket.on("leaveRoom", (room, name) => {
        socket.leave(room);
        io.to(room).emit("leaveRoom", room, name);
    });
});
