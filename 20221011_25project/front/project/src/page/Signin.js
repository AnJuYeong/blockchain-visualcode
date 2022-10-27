import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../redux/middleware';

const Signin = () => {
    const nav = useNavigate();
    const dispatch = useDispatch();

    const idInput = useRef();
    const pwInput = useRef();

    const login = () => {
        nav("/");
        dispatch(loginAction.signIn(idInput.value, pwInput.value))
        idInput.current.value = "";
        pwInput.current.value = "";
    }
    const signup = () => {
        nav("/signup");
    }

  return (
    <>
    <div className='main-login'>
        <div className='login-box'>
            <div className='login-input'>
                <div className='login-text'>아이디</div>
                <input ref={idInput} onChange={(e) => idInput.value = e.target.value} className='login-ip'/>
                <div className='login-text'>비밀번호</div>
                <input ref={pwInput} onChange={(e) => pwInput.value = e.target.value} className='login-ip'/>
            </div>
            <div className='login-btn-box'>
                <button onClick={login} className='login-btn'>로그인</button>
                <button onClick={signup} className='login-btn'>회원가입</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signin