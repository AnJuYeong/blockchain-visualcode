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

// 클라이언트가 접속 했을 때
io.on("connection",(socket) => {
    socket.on("joinRoom",(room, name) =>{
        // 방개념으로 접속 시켜주는 함수 join(방이름)
        socket.join(room);
        // to(room) 현재 그 방에 있는 클라이언트에게 요청
        io.to(room).emit("joinRoom", room, name);
    });
    
    socket.on("leaveRoom", (room, name) => {
        // 방개념으로 떠나게 해주는 함수 leave(방 이름)
        socket.leave(room);
        io.to(room).emit("leaveRoom", room, name);
    });

    socket.on("chat",(room, name, msg) => {
        io.to(room).emit("chat",name,msg)
    });
});
