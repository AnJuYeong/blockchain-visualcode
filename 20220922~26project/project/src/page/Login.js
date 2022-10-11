import React, { useState } from 'react'
import {Body, Header} from "../com";
import { Link, useNavigate } from 'react-router-dom';
import Main from './Main';

const Login = ({loginId, loginPw, loginOnChange, loginOn, isLogin}) => {

  return (
    <>
    <div className='main-login'>
      <div className='login-modal'>
      <div className='login-logo'>Justagram</div>
        <input name='loginId' onChange={loginOnChange} className='login-input-id' value={loginId} type="text" placeholder='아이디 입력'/>
        <input name='loginPw' onChange={loginOnChange} className='login-input-pw' value={loginPw} type="text" placeholder='비밀번호 입력'/>
        <div onClick={loginOn} className="login-btn">로그인</div>
        <Link to={"/signup"} className="login-sign-btn">회원가입</Link>
      </div>
    </div>
    </>
  )
}

export default Login