import React from 'react';
import { Button, HeaderWrap, ContentBtn, HeaderContent, LoginWrap, LoginInput } from './styledComponent'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useState } from 'react';
import { loginAction } from '../../redux/middleware/loginAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Header = ({isLogin}) => {
    // 리액트에서 태그를 선택해야 하는데 어떻게 하냐?
    // document.querySelector를 안 쓰기 위해서 리액트를 하는건데 그걸 대체하는게 useRef()
    // useRef 함수는 current 속성을 가지고 있는 객체를 반환한다. 
    // 객체에 원하는 키 값에 값을 넣어줄 수도 있고,
    // 이 값이 바뀌어도 렌더링은 되지 않지만 값은 계속 남아있다.
    // current = 태그가 들어온다.
    // 사용방법은 들고 있고 싶은 컴포넌트에 ref props로 useRef() 반환한 객체를 넣어준다.

    const idInput = useRef();
    const pwInput = useRef();
    const dispatch = useDispatch();

    // 이거 로그인 할 수 있는 상태와 회원가입 할 수 있는 상태S
    const [wrapState,setWrapState] = useState(true);
    const userName = useSelector(state => state.login.id);

    const login = () => {
        // ㅜ 밑에 주석은 Ref 값 가져오려고
        // console.log(idInput.current.value,pwInput.current.value)
        // idInput.current.value = "";
        // pwInput.current.value = "";
        dispatch(loginAction.login(idInput.value,pwInput.value));
    };
    const logOut = () => {
        dispatch(loginAction.logOut());
    }
    const signUp = () => {
        dispatch(loginAction.signUp(idInput.value,pwInput.value, setWrap));
    };
    const setWrap = () => {
        setWrapState(!wrapState);
        idInput.value = '';
        pwInput.value = '';
        idInput.current.value = "";
        pwInput.current.value = "";
    };
    
    const nav = useNavigate();
  return (
    <div>
        <HeaderWrap>
            <HeaderContent>
                <ContentBtn onClick={() =>{nav("/")}}>Main</ContentBtn>
                <ContentBtn onClick={() =>{nav("/shop")}}>Shop</ContentBtn>
                {/* {isLogin ? <ContentBtn onClick={() =>{nav("/shop")}}>Shop</ContentBtn> 
                : 
                <ContentBtn>Shop</ContentBtn>
                } */}
            </HeaderContent>
            <LoginWrap>
                {isLogin ?
                <>
                <div>{userName} 로그인 됨</div>
                <Button onClick={logOut}>로그아웃</Button>
                </> 
                : 
                <>
                    {wrapState ? 
                    <>
                        <label>아이디 : </label>
                        <LoginInput ref={idInput} onChange={(e)=>{idInput.value = e.target.value}}></LoginInput>
                        <label>비밀번호 : </label>
                        <LoginInput ref={pwInput} onChange={(e)=>{pwInput.value = e.target.value}}></LoginInput>
                        <Button onClick={login}>로그인</Button>
                        <Button onClick={setWrap}>회원가입 하기</Button>
                    </> 
                    : 
                    <>
                        <label>아이디 : </label>
                        <LoginInput ref={idInput} onChange={(e)=>{idInput.value = e.target.value}}></LoginInput>
                        <label>비밀번호 : </label>
                        <LoginInput ref={pwInput} onChange={(e)=>{pwInput.value = e.target.value}}></LoginInput>
                        <Button onClick={signUp}>회원 가입</Button>
                        <Button onClick={setWrap}>로그인 하기</Button>
                    </>
                    }
                </>
                }
            </LoginWrap>
        </HeaderWrap>
    </div>
  )
}

export default Header