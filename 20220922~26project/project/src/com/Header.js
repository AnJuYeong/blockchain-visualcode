import React, { useState } from 'react'
import { FaAngry, FaUserAlt } from "react-icons/fa"
import { Link,  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let nav = useNavigate();
  let [list,setList] = useState("");

  let menuList = [<li className='menu-list'><Link to={"/notice"} className='link'>게시판</Link></li>,
            <li className='menu-list'><Link to={"/mypage"} className='link'>마이페이지</Link></li>,
            <li className='menu-list'><Link to={"/signup"} className='link'>회원가입</Link></li>,
            <li className='menu-list'><Link to={"/login"} className='link'>로그인</Link></li>];

  function on() {
    if(list === ""){
      setList(menuList);
    } else{
      setList("");
    }
  }
  const main = () => {
    nav("/");
  }

  return (
    <div className='navbar'>
      <div className='logo' onClick={main}><FaAngry/>Justagram</div>
      <div className='menu'>
        <div className='bar'>
        <ul className='menu-bar'>
        {list}
        </ul>
        </div>
        <FaUserAlt className='modal-icon' size={30} onClick={on}/>
      </div>
    </div>
  )
}

export default Header