import './App.css';
import {Routes, Route , Navigate, useNavigate} from 'react-router-dom';
import {Main, Login, Mypage, Notice, Signup} from './page';
import { useRef, useState } from 'react';

function App() {
  // useNavigate사용
  let nav = useNavigate();

  // 회원가입하고 유저가 로그인하면 검증이 완료 됐다고 알려줄 useState
  let [loginResult, setLoginResult] = useState(false);

  // 회원가입시 인풋값 useState
  const [input,setInput] = useState({
    userName : '',
    userId : '',
    userPw : '',
  });
  const {userName, userId, userPw} = input;
  // 회원가입시 유저 아이디와 유저 이름을 받을 useState
  const [users,setusers] = useState([
    {
      id : 1,
      userName : "안주영",
      userId : "user1",
      userPw : "asd",
    },
    {
      id : 2,
      userName : "김종찬",
      userId : "user2",
      userPw : "asd",
    }
  ]);

  let next = useRef(3);

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value,
    });
  }
  const onCreate = () =>{

    const addUser = {
      id : next.current++,
      userName,
      userId,
      userPw,
    };

    setusers([...users, addUser]);
    setInput({
      userName : "",
      userId : "",
      userPw : "",
    })
  }

  // 로그인시 인풋값 useState
  const [loginput,setLogInput] = useState({
    loginId : '',
    loginPw : '',
  });
  const {loginId, loginPw} = loginput;

  console.log(loginput);
  const loginOnChange = (e) => {
    setLogInput({
      ...loginput,
      [e.target.name] : e.target.value,
    });
  }
  
  function isLogUser(element){
    if((element.userId === loginId) && (element.userPw === loginPw)){
      return true;
    }
  }
  
  const loginOn = () => {
    console.log(loginput);
    const logUser = users.find(isLogUser)
    if(logUser !== undefined){
      setName(logUser.userName);
      setLoginResult(true);
      aa();
      setLogInput({
        loginId : '',
        loginPw : '',
      });
    } else{
      alert("아이디와 비밀번호가 틀립니다.");
      setLogInput({
        loginId : '',
        loginPw : '',
      });

    }
  }
const [name,setName] =useState("");
  // 로그인시 메인페이지 이동
  function aa(){
    nav("/");
  }

  const [b,setb] = useState([

  ]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main loginResult={loginResult}/>}/>
        <Route path="/login" element={<Login loginId={loginId} loginPw={loginPw} loginOnChange={loginOnChange} loginOn={loginOn} loginResult={loginResult}/>}/>
        <Route path="/signup" element={<Signup onChange={onChange} onCreate={onCreate} userName={userName} userId={userId} userPw={userPw} loginResult={loginResult}/>}/>
        <Route path="/mypage" element={<Mypage name={name} loginResult={loginResult}/>}/>
        <Route path="/notice" element={<Notice name={name} b={b} setb={setb} loginResult={loginResult}/>}/>
        {/* <Route path="/" element={<Main username={username} loginResult={loginResult}/>}/>
        <Route path="/login" element={<Login  signin={signin} signinPw={signinPw} setLoginResult={setLoginResult} loginResult={loginResult}/>}/>
        <Route path="/signup" element={<Signup signin={setSignin} usernick={setUsername} signinpw={setSigninPw} loginResult={loginResult}/>}/>
        <Route path="/mypage" element={<Mypage username={username}/>}/>
        <Route path="/notice" element={<Notice username={username} onChange={onChange} onCreate={onCreate} username1={username1} email={email} users={users}/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
