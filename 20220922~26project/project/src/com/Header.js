import React, { useState } from 'react'
import { FaAngry, FaUserAlt } from "react-icons/fa"

const Header = ({title}) => {
  let [list,setList] = useState("");

  let menuList = [<li className='menu-list'>게시판</li>,
            <li className='menu-list'>마이페이지</li>,
            <li className='menu-list'>회원가입</li>,
            <li className='menu-list'>로그인</li>]

  function on() {
    if(list === ""){
      setList(menuList);
    } else{
      setList("");
    }
  }

  return (
    <div className='navbar'>
      <div className='logo'><FaAngry/>JoSS</div>
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