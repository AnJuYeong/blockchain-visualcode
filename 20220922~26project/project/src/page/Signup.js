import React, { useState, useEffect} from 'react'
import { Header,Body } from '../com'
import { Link } from 'react-router-dom'
// signin, usernick, signinpw, loginResult
const Signup = ({onChange,onCreate,userName,userId,userPw,isLogin}) => {
  return (
    <div>
      <div className='signin-main'>
        <div className='aa'>
          <div className='signin-photo'></div>
          <div className='signin-main-box'>
            <div className='signin-box'>
              <div className='signin-input-box'>
              <div className='signin-logo'>Justagram</div>
              <input  name='userName' onChange={onChange} className='signin-input' type="text" placeholder='사용자 이름' value={userName} />
              <input name='userId' onChange={onChange} className='signin-input' type="text" placeholder='사용하실 ID 입력' value={userId}/>
              <input name='userPw' onChange={onChange} className='signin-input' type="text" placeholder='사용하실 PW 입력'value={userPw}/>
                <div className='signin-btn-box'>
                <Link onClick={onCreate} to={"/"} className="signin-btn">가입하기</Link>
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