// 사용할 모듈 
// express, nodemon, sequelize, mysql2, cors

// cors 에러 해결 방법
// 콘솔창에 CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
// 에러가 나면 cors 설정을 해주어야한다.

// cors란 브라우저 보안정책
// cors는 브라우저가 서로 다른 도메인/포트의 서버로 요청을 했을 때 발생한다.
// 접근을 허용 해줘야한다. 해킹할 수도 있고 

// cors 설치
// npm i cors

// app.use((cors){
//     origin : '*', // 누가오든 요청허용
//     origin : true, // 들어오는 요청 도메인/ 포트가 자동으로 origin에 들어간다.
//     origin : '도메인' // 실제로 서비스 되는 도메인을
//                         입력해줘서 해당 도메인만 접근할 수 있게 허용한다.
//     credential : true, false (사용자 인증이 필요한 리소스를 접근을 허용할지 안할지
//                                 쿠키 같은 거 등등)
// })

const express = require("express");
const cors = require("cors");
const {sequelize, User, Nft, Board} = require("./model");
const app = express();
const multer = require('multer');

const options = {
    origin : "http://localhost:3000"
};

app.use(express.json());
app.use(cors(options));

sequelize.sync({force : false}).then(()=> {
    console.log("연결이 잘 됐다.");
}).catch((err) => {
    console.log(err);
});

// 로그인
app.post("/signIn", async(req,res) => {
    let {id, pw} = req.body;
    const users = await User.findOne({
        where : {user_id : id}
    });
    if(users === null){
        res.send("회원이 아님.ㅋ");
    } else if(users.user_pw != pw){
        res.send("비밀번호가 틀림")
    }
    else{
        res.send({
            name : users.user_name,
            id : users.user_id,
            pw : users.user_pw,
            point : users.user_point,
            picture : users.user_picture
        })
    }
});

// 회원가입
app.post("/signUp", async(req,res) => {
    let {name, id, pw} = req.body;
    const users = await User.findOne({
        where : {user_id : id}
    });
    if(!users){
        User.create({
            user_name : name,
            user_id : id,
            user_pw : pw
        }).then(() => {
            res.send("가입 ㅊㅊㅋ");
        })
    } else{
        res.send("중복 아이디가 있다 ㅋ");
    }
});

// 게시판
app.post("/board", async(req, res) => {
    let {userName,titleInput,contentsInput} = req.body;
    Board.create({
        user : userName,
        title : titleInput,
        contents : contentsInput
    })
})
app.post("/boardStart", async(req,res) => {
    const boards = await Board.findAll({
        order : [["createdAt","DESC"]]
    });
    res.send(boards);
})



// 마이페이지
app.use(express.urlencoded({extended:false}));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploadimg')
      //이미지 업로드시킬 폴더 위치
    },
    filename: function (req, file, cb) {      
      cb(null, file.originalname.replace('.PNG',""))
        // Buffer.from(filename, 'latin1').toString('utf8')
        // 서버에 저장할 파일 명
    }
})
const  upload = multer({ storage: storage })

app.post('/profile', upload.single("file"), async(req,res) =>{
    const formData = req.body;
    console.log(formData);
    User.update({
        user_picture : "http://localhost:8000/uploadimg/" + req.file.originalname.replace("PNG","")
    },
    {
        where : {
            user_id : formData.userId,
        }
    }).then(() => {
        res.send();
    })
})

app.post('/profileSet', async(req,res) => {
    const {setProfile,userId} = req.body;
    User.update({
        user_picture : "https://static.nid.naver.com/images/web/user/default.png?type=s160"
    },
    {
        where : {user_id : userId}
    }).then(() => {
        res.send();
    })
})


app.listen(8000, ()=> {
    console.log("서버 열림ㅋ");
});