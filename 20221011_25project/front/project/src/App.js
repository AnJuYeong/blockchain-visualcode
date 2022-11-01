import './App.css';
import Header from './components/header/Header';
import {Routes, Route, Navigate } from "react-router-dom";
import {Main, Boad, Drops, Maket, Mypage, Signin, Signup, CreateBoard} from "./page";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import {boardAction} from "./redux/middleware";
import { nftAction } from './redux/middleware';
import {nft} from "./json";

function App() {
  const dispatch = useDispatch();
  const islogin = useSelector(state => state.signin.islogin);
  const loginPicture = useSelector(state => state.signin.picture);
  const totalPosts = useSelector(state => state.boardReducer.post);

  const [addPost,setAddPost] = useState(null);
  const [posts,setposts] = useState(null);
  const [pageNation, setPageNation] = useState(null);
  const [pageCount,setPageCount] = useState(0);

  let isUpdate = useRef(false);
  let isUpdate2 = useRef(false);
  let isUpdate3 = useRef(false);

  const LoginRedirect = () => {
    return islogin === true ? <Mypage loginPicture={loginPicture}/> : mainMove();
  }

  function mainMove(){
    alert("다시 로그인 해주세요.");
    return <Navigate to="/"/>
  }

  // ㅜ 맨 처음 게시판 목록 가져오기
  useEffect(() => {
    dispatch(nftAction.nftAdd(nft.data));
    dispatch(boardAction.boardStart());
  },[]);
  
  useEffect(() => {
    if(!isUpdate3.current)
    {   
        isUpdate3.current = true;
        return;
    }
    setAddPost(totalPosts);
  },[totalPosts]);

  useEffect(() => {
    if(!isUpdate2.current)
    {   
        isUpdate2.current = true;
        return;
    }
    setPageCount(addPost?.length / 10);
    // setPageCount(Math.ceil(addPost?.length / 10));
    console.log("안녕ㅋ");
    console.log(addPost);
  },[addPost]);

  useEffect(() => {
    if(!isUpdate.current)
    {
        isUpdate.current = true;
        return;
    }
    pageNations();
    postsArray();
  },[pageCount]);
  
  // const pageCountChange = () => {
  //   console.log("gdgdgdgdgd"+addPost.length);
  //   setPageCount(Math.ceil(addPost?.length / 10));
  // }

  const pageNations = () => {
    const postArray1 = [];
    const postArray2 = [];
    const aa = Math.ceil(pageCount);
    for(let k = 1; k <= aa; k++){
      postArray1.push(k);
    }
    for(let i = 0; i < postArray1?.length; i+=5){
      postArray2.push(postArray1.slice(i,i + 5));
    }
    setPageNation(postArray2);
  };
  const postsArray = () => {
    const postArray = [];
    for(let i = 0; i < addPost?.length; i += 10){
      postArray.push(addPost.slice(i, i + 10));
    }
    setposts(postArray);
    // console.log("ㅎㅇㅎㅇ"+postArray);
  };

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main></Main>}/>
        <Route path='/drops' element={<Drops></Drops>}/>
        <Route path='/market' element={<Maket></Maket>}/>
        <Route path='/board' element={<Boad pageNation={pageNation} posts={posts}></Boad>}/>
        <Route path='/createBoard' element={<CreateBoard posts={posts} setAddPost={setAddPost} addPost={addPost}></CreateBoard>}/>
        <Route path='/mypage' element={<LoginRedirect/>}/>
        <Route path='/signin' element={<Signin></Signin>}/>
        <Route path='/signup' element={<Signup></Signup>}/>
      </Routes>
    </div>
  );
}

export default App;
