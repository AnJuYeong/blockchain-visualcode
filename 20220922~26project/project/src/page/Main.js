import React from 'react'
import {Body, Header} from "../com";

const Main = ({loginResult}) => {

  return (
    <>
    <Header loginResult={loginResult}></Header>
    <Body props="main-body"></Body>
    </>
  )
}

export default Main