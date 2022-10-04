import React, { useState } from 'react'
import {Body, Header} from "../com";
import { Link, useNavigate } from 'react-router-dom';
import Main from './Main';

const Login = ({loginId, loginPw, loginOnChange, loginOn, loginResult,setLoginResult}) => {
  // const [textId,setTextId] =useState("");
  // const [textPw,setTextPw] =useState("");

  let nav = useNavigate();
  
  // const loginId = (e) => {
  //   setTextId(e.target.value);
  // }

  // const loginPw = (e) => {
  //   setTextPw(e.target.value);
  // }

  // 회원가입된 유저의 정보를 담은 props를 받아와 로그인 페이지에서 입력된 결과 값이랑 같은지 비교하고 결과 값을 내보냄
  // const login = () => {
  //   if((signin == textId) && (signinPw == textPw)){
  //     setTextId("");
  //     setTextPw("");
  //     setLoginResult(true);
  //     aa();
  //   } else{
  //     alert("아이디와 비밀번호가 틀립니다.");
  //     setTextId("");
  //     setTextPw("");
  //     setLoginResult(false);
  //   }
  // }
  function aa(){
    nav("/");
  }

  return (
    <>
    <Header loginResult={loginResult}></Header>
    <div className='main-login'>
      <div className='login-modal'>
      <div className='login-logo'>Justagram</div>
        <input name='loginId' onChange={loginOnChange} className='login-input-id' value={loginId} type="text" placeholder='아이디 입력'/>
        <input name='loginPw' onChange={loginOnChange} className='login-input-pw' value={loginPw} type="text" placeholder='비밀번호 입력'/>
        <div onClick={loginOn} className="login-btn">로그인</div>
        <Link to={"/signup"} className="login-sign-btn">회원가입</Link>
        {/* <input onChange={loginId} className='login-input-id' value={textId} type="text" placeholder='아이디 입력'/>
        <input onChange={loginPw} className='login-input-pw' value={textPw} type="text" placeholder='비밀번호 입력'/>
        <div onClick={login} className="login-btn">로그인</div>
        <Link to={"/signup"} className="login-sign-btn">회원가입</Link> */}
      </div>
    </div>
    </>
  )
}

export default Login