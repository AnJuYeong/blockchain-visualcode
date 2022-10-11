import React, { useState } from 'react';
import { FaAngry, FaUserAlt } from "react-icons/fa";
import { Link,  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAction } from '../middleware/loginAction';

const Header = ({isLogin}) => {
  const dispatch = useDispatch();
  let login = "";
  if(isLogin == false){
    login = "/";
  }else{
    login = "/mypage";
  }
  let nav = useNavigate();

  let [list,setList] = useState(false);
  function on() {
    setList(!list)
  }
  const main = () => {
    nav("/");
  }
  const logOut = () => {
    dispatch(loginAction.logOut());
  }
  return (
    <div className='navbar'>
      <div className='logo' onClick={main}><FaAngry/>Justagram</div>
      <div className='menu'>
        <div className='bar'>
        <ul className='menu-bar'>
        {list ?
        <>
          {isLogin ?
            <>
              <li className='menu-list' key={5}><Link to={"/notice"} className='link'>게시판</Link></li>,
              <li className='menu-list' key={6}><Link to={login} className='link'>마이페이지</Link></li>,
              <li className='menu-list' key={7}><Link to={"/maket"} className='link'>마켓플레이스</Link></li>,
              <li className='menu-list' key={8}><Link to={"/login"} onClick={logOut} className='link'>로그아웃</Link></li>
            </>
            :
            <>
              <li className='menu-list' key={1}><Link to={"/notice"} className='link'>게시판</Link></li>,
              <li className='menu-list' key={2}><Link to={login} className='link'>마이페이지</Link></li>,
              <li className='menu-list' key={3}><Link to={"/signup"} className='link'>회원가입</Link></li>,
              <li className='menu-list' key={4}><Link to={"/login"} className='link'>로그인</Link></li>
            </>
          }
        </>
        :
        <></>}
        </ul>
        </div>
        <FaUserAlt className='modal-icon' size={30} onClick={on}/>
      </div>
    </div>
  )
}

export default Header