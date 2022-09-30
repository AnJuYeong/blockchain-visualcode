import './App.css';
import {Routes, Route , Navigate} from 'react-router-dom';
import {Main, Login, Mypage, Notice, Signup} from './page';
import { useState } from 'react';

function App() {
  // 회원가입시 유저 아이디와 유저 이름을 받을 useState
  let [username, setUsername] = useState("");
  let [signin, setSignin] = useState("");
  let [signinPw, setSigninPw] = useState("");
  
  // let userData = {
  //   username : {
  //     id : signin,
  //     pw : signinPw
  //   }
  // }
  // console.log(userData);

  // 회원가입하고 유저가 로그인하면 검증이 완료 됐다고 알려줄 useState
  let [loginResult, setLoginResult] = useState(false);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main username={username} loginResult={loginResult}/>}/>
        <Route path="/login" element={<Login  signin={signin} signinPw={signinPw} setLoginResult={setLoginResult} loginResult={loginResult}/>}/>
        <Route path="/signup" element={<Signup signin={setSignin} usernick={setUsername} signinpw={setSigninPw} loginResult={loginResult}/>}/>
        <Route path="/mypage" element={<Mypage username={username}/>}/>
        <Route path="/notice" element={<Notice username={username}/>}/>
      </Routes>
    </div>
  );
}

export default App;
