import React from 'react'
import {FaPeriscope, FaBell} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { HeaderWrap, HeaderNav, NavContents, HeaderSignin, SigninBtn, NoticeBtn } from './styledComponent';

const Header = () => {
  const nav = useNavigate();
  const signin = () => {
    nav("signin");
  }
  return (
    <div>
        <HeaderWrap>
            <div className='main-logo'>
            <FaPeriscope size={"35px"}/>JutaKongz
            </div>
            <HeaderNav>
                <NavContents>Drops</NavContents>
                <NavContents>Market Place</NavContents>
                <NavContents>Free Board</NavContents>
                <NavContents>MyPage</NavContents>
            </HeaderNav>
            <HeaderSignin>
                <NoticeBtn><FaBell size={"20px"}/></NoticeBtn>
                <SigninBtn onClick={signin}>Sign in</SigninBtn>
            </HeaderSignin>
        </HeaderWrap>
    </div>
  )
}

export default Header