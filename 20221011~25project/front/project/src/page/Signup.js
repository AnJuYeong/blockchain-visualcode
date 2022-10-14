import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { loginAction } from '../redux/middleware';
import { useRef } from 'react';

const Signup = () => {
    const nav = useNavigate();
    const dispatch = useDispatch();

    const nameInput = useRef();
    const idInput = useRef();
    const pwInput = useRef();

    const login = () => {
        nav("/signin");
    };
    const signup = () => {
        dispatch(loginAction.signUp(nameInput.value, idInput.value, pwInput.value));
        nameInput.current.value ="";
        idInput.current.value = "";
        pwInput.current.value = "";
    };

  return (
    <>
    <div className='main-login'>
        <div className='login-box'>
            <div className='login-input'>
                <div className='login-text'>이름</div>
                <input ref={nameInput} onChange={(e) => nameInput.value = e.target.value} className='login-ip'/>
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

export default Signup