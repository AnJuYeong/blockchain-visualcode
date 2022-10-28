import React, { useEffect, useState } from 'react'
import {FaPeriscope, FaBell} from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../../redux/middleware';
import { HeaderWrap, HeaderNav, NavContents, HeaderSignin, SigninBtn, NoticeBtn } from './styledComponent';
import { boardAction } from '../../redux/middleware';

const Header = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const islogin = useSelector(state => state.signin.islogin);

  const signin = () => {
    nav("signin");
  }
  const signout = () => {
    dispatch({type : "SIGNOUT"});
  }
  const drops = () => {
    {islogin ? nav("drops") :mianMove()}
  }
  const market = () => {
    {islogin ? nav("market") :mianMove()}
  }
  const board = () => {
    {islogin ? nav("board") :mianMove()}
  }
  const mypage = () => {
    {islogin ? nav("mypage") :mianMove()}
  }
  const main = () => {
    nav("/");
  }
  function mianMove(){
    alert("로그인 해주세요");
    return nav("/");
  }


  return (
    <div>
        <HeaderWrap>
            <div onClick={main} className='main-logo'>
            <FaPeriscope size={"35px"}/>주레이스댑
            </div>
            <HeaderNav>
                <NavContents onClick={drops}>Drops</NavContents>
                <NavContents onClick={market}>Market Place</NavContents>
                <NavContents onClick={board}>Free Board</NavContents>
                <NavContents onClick={mypage}>MyPage</NavContents>
            </HeaderNav>
            {islogin ? 
            <>
              <HeaderSignin>
                <NoticeBtn><FaBell size={"20px"}/></NoticeBtn>
                <SigninBtn onClick={signout}>Sign out</SigninBtn>
            </HeaderSignin>
            </>
            : 
            <>
              <HeaderSignin>
                <NoticeBtn><FaBell size={"20px"}/></NoticeBtn>
                <SigninBtn onClick={signin}>Sign in</SigninBtn>
            </HeaderSignin>
            </>
            }
        </HeaderWrap>
    </div>
  )
}

export default Header