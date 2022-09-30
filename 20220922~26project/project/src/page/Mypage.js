import React from 'react'
import { Header } from '../com'

const Mypage = ({username}) => {

  return (
    <>
    <Header></Header>
    <div>{username}님 페이지에요</div>
    </>
  )
}

export default Mypage