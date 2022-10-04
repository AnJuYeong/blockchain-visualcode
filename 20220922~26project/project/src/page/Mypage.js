import React from 'react'
import { Header } from '../com'

const Mypage = ({name,loginResult}) => {

  return (
    <>
    <Header loginResult={loginResult}></Header>
    <div>{name}님 페이지에요</div>
    </>
  )
}

export default Mypage