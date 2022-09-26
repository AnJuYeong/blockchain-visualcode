import React, { useState, useEffect} from 'react'
import { Header,Body } from '../com'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [userId, setid] = useState("");
  const [userName, setUserName] = useState("");
  const username = (e) => {
    setUserName(e.target.value);
  }

  const signinId = (e) => {
    setid(e.target.value);
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
              <input name='aa' onChange={username} className='signin-input' type="text" placeholder='사용자 이름' />
              <input onChange={signinId} className='signin-input' type="text" placeholder='사용하실 ID 입력' />
              <input className='signin-input' type="text" placeholder='사용하실 PW 입력'/>
                <div className='signin-btn-box'>
                <Link to={"/"} className="signin-btn" state={{id: userId, name: userName}}>가입하기</Link>
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