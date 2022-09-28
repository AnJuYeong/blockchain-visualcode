import React from 'react'
import {Body, Header} from "../com";
import { Link } from 'react-router-dom';
import Main from './Main';

const Login = ({loginid, loginpw}) => {
  let userId = "";
  let userPw = "";

  const loginId = (e) => {
    userId = e.target.value;
  }

  const loginPw = (e) => {
    userPw = e.target.value;
  }

  const login = () => {
    loginid(userId);
    loginpw(userPw);
  }

  return (
    <>
    <Header></Header>
    <div className='main-login'>
      <div className='login-modal'>
      <div className='login-logo'>Justagram</div>
        <input onChange={loginId} className='login-input-id' type="text" placeholder='아이디 입력'/>
        <input onChange={loginPw} className='login-input-pw' type="text" placeholder='비밀번호 입력'/>
        <Link onClick={login} to={"/"} className="login-btn">로그인</Link>
        <Link to={"/signup"} className="login-sign-btn">회원가입</Link>
      </div>
    </div>
    </>
  )
}

export default Login