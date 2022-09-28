import './App.css';
import {Routes, Route , Navigate} from 'react-router-dom';
import {Main, Login, Mypage, Notice, Signup} from './page';
import { useState } from 'react';

function App() {
  // 회원가입시 유저 아이디와 유저 이름을 받는다.
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
  // 로그인시 유저 아이디를 받아온다.
  let [loginId, setLoginId] = useState(false);
  let [loginPw, setLoginPw] = useState(false);
  // 회원가입하고 유저가 로그인하면 검증이 완료 됐다고 알려줄 useState
  let [popo, setPopo] = useState(false);

  // if((signin == loginId) && (signinPw == loginPw)){
  //   setPopo(true);
  // } else{
  //   setPopo(false);
  // }

  // const myPageOpen = () => {
  //   return popo == true ? <Mypage isusername={username}/> : <Navigate to = "/"/>
  // }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main isusername={username} />}/>
        <Route path="/login" element={<Login loginid={setLoginId} loginpw={setLoginPw} />}/>
        <Route path="/signup" element={<Signup signin={setSignin} usernick={setUsername} signinpw={setSigninPw}/>}/>
        {/* <Route path="/mypage" element={myPageOpen}/> */}
        <Route path="/notice" element={<Notice isusername={username}/>}/>
      </Routes>
    </div>
  );
}

export default App;
