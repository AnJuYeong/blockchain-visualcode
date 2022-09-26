import React from 'react'
import {Body, Header} from "../com";
import {Link,useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Main = () => {
  const location = useLocation();
  let userId = location && location.state ? location.state.id :null;
  let userName = location && location.state ? location.state.name :null;
  console.log(userId);
  console.log(userName);
  return (
    <>
    <Header userId={userId} userName={userName}></Header>
    <Body props="main-body"></Body>
    </>
  )
}

export default Main