import './App.css';
import {Routes, Route , Navigate, useNavigate} from 'react-router-dom';
import { Header } from './com';
import {Main, Login, Mypage, Notice, Signup} from './page';
import { useEffect, useRef, useState } from 'react';
// import {loginAction, signUp} from "./middleware";
import { loginAction } from './middleware/loginAction';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  // useDispatch사용
  const dispatch = useDispatch();
  // useNavigate사용
  const nav = useNavigate();

  // 로그인 되었을 때 로그인 판별 여부
  const isLogin = useSelector(state => state.login.islogin);

  // 회원가입시 인풋값 useState
  const [input,setInput] = useState({
    userName : '',
    userId : '',
    userPw : '',
  });

  const {userName, userId, userPw} = input;
  // 회원가입시 유저 아이디와 유저 이름을 받을 useState
  const [users,setusers] = useState([
    {
      id : 1,
      userName : "안주영",
      userId : "user1",
      userPw : "asd",
    },
    {
      id : 2,
      userName : "김종찬",
      userId : "user2",
      userPw : "asd",
    }
  ]);
  let next = useRef(3);

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value,
    });
  }
  const onCreate = () =>{
    
    // const addUser = {
    //   id : next.current++,
    //   userName,
    //   userId,
    //   userPw,
    // };

    // setusers([...users, addUser]);
    // setInput({
    //   userName : "",
    //   userId : "",
    //   userPw : "",
    // })
  }

  // 로그인시 인풋값 useState
  const [loginput,setLogInput] = useState({
    loginId : '',
    loginPw : '',
  });
  const {loginId, loginPw} = loginput;

  const loginOnChange = (e) => {
    setLogInput({
      ...loginput,
      [e.target.name] : e.target.value,
    });
  }
  
  function isLogUser(element){
    if((element.userId === loginId) && (element.userPw === loginPw)){
      return true;
    }
  }
  
  const loginOn = () => {
    const logUser = users.find(isLogUser)
    dispatch(loginAction.logIn(loginId,loginPw,logUser,mainMove,inputset));
    setName(logUser.userName);
  }

  // input값 초기화 함수
  function inputset(){
    setLogInput({
      loginId : '',
      loginPw : '',
    });
  }

  const [name,setName] =useState("");
  // 로그인시 메인페이지 이동
  function mainMove(){
    nav("/");
  }

  // 게시판 배열
  const [b,setb] = useState([

  ]);

  return (
    <div className="App">
      <Header isLogin={isLogin}></Header>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login loginId={loginId} loginPw={loginPw} loginOnChange={loginOnChange} loginOn={loginOn}/>}/>
        <Route path="/signup" element={<Signup onChange={onChange} onCreate={onCreate} userName={userName} userId={userId} userPw={userPw}/>}/>
        <Route path="/mypage" element={<Mypage name={name}/>}/>
        <Route path="/notice" element={<Notice name={name} b={b} setb={setb}/>}/>
      </Routes>
    </div>
  );
}

export default App;
