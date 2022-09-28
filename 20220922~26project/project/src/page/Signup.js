import React, { useState, useEffect} from 'react'
import { Header,Body } from '../com'
import { Link } from 'react-router-dom'

const Signup = ({signin,usernick,signinpw}) => {
  let userId = "";
  let userNickName = "";
  let userPw = "";

  const signinId = (e) => {
    userId = e.target.value;
  }
  const username = (e) => {
    userNickName = e.target.value;
  }
  const signinPw = (e) => {
    userPw = e.target.value;
  }

  const signinBtn = () => {
    signin(userId);
    usernick(userNickName);
    signinpw(userPw);
  }
  return (
    <div>
      <Header></Header>
      <div className='signin-main'>
        <div className='aa'>
          <div className='signin-photo'></div>
          <div className='signin-main-box'>
            <div className='signin-box'>
              <div className='signin-input-box'>
              <div className='signin-logo'>Justagram</div>
              <input onChange={username} className='signin-input' type="text" placeholder='사용자 이름' />
              <input onChange={signinId} className='signin-input' type="text" placeholder='사용하실 ID 입력' />
              <input onChange={signinPw} className='signin-input' type="text" placeholder='사용하실 PW 입력'/>
                <div className='signin-btn-box'>
                <Link onClick={signinBtn} to={"/"} className="signin-btn">가입하기</Link>
                </div>
              </div>
            </div>
            <div className='signin-login-box'>
              <div>계정이있으신가요?</div>
              <Link to={"/login"} className="sigin-login">로그인</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup