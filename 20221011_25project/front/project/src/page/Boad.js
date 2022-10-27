import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaRegHeart,FaEllipsisH } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const Boad = ({pageNation, posts}) => {
  const nav = useNavigate();
  const userName = useSelector(state => state.signin.name);

  const [pageNationCss,setPageNationCss] = useState("");  
  const [pageNationCss1,setPageNationCss1] = useState("");
  const [pageNationCss2,setPageNationCss2] = useState("");
  const [pageNationCss3,setPageNationCss3] = useState("");
  const [pageNationCss4,setPageNationCss4] = useState("");

  // ㅜ 페이지 현재 인덱스
  const [limit, setLimit] = useState(0);
  const [limitPage, setLimitPage] = useState(0);
  // ㅜ 게시판 메뉴
  const [menu, setmenu] = useState(null);
  const aa = [
    <div className='posts-menu'>
    <ul>
      <li>삭제</li>
      <li>수정</li>
      <li>신고</li>
    </ul>
  </div>
  ];

  const add = () => {
    if(!userName){
      return Swal.fire({
        icon: 'error',  // 여기다가 아이콘 종류를 쓰면 됩니다.                     
        title: '로그인을 해주세요',     
      });
    }
    nav("/createBoard");
  }
  const postsMenu = () => {
    // if(!menu){
    //   setmenu(aa);
    // }
    // else{
    //   setmenu(null);
    // }
  };

  const prev = () => {
    if(limit == 0){
      setLimit(0);
      alert("첫 페이지 입니다.")
    }
    else{
      setLimit(limit - 1);
    }
  }
  const next = () => {
    if(limit == (pageNation.length-1)){
      setLimit(pageNation.length-1); 
      alert("마지막 페이지 입니다.")
    }
    else{
      setLimit(limit + 1);
    }
  }
  const nation1= () => {
    scroll();
    setLimitPage(pageNation[limit][0]-1);
  }
  const nation2= () => {
    scroll();
    setLimitPage(pageNation[limit][1]-1);
  }
  const nation3= () => {
    scroll();
    setLimitPage(pageNation[limit][2]-1);
  }
  const nation4= () => {
    scroll();
    setLimitPage(pageNation[limit][3]-1);
  }
  const nation5= () => {
    scroll();
    setLimitPage(pageNation[limit][4]-1);
  }
  function scroll(){
    window.scrollTo({
      top : 0,
      behavior : "auto"
    })
  }
  // function deleteBoard(){
	// 	Swal.fire({
	// 	  title: '글을 삭제하시겠습니까???',
	// 	  text: "삭제하시면 다시 복구시킬 수 없습니다.",
	// 	  icon: 'warning',
	// 	  showCancelButton: true,
	// 	  confirmButtonColor: '#3085d6',
	// 	  cancelButtonColor: '#d33',
	// 	  confirmButtonText: '삭제',
	// 	  cancelButtonText: '취소'
	// 	}).then((result) => {
	// 	  if (result.value) {
  //             //"삭제" 버튼을 눌렀을 때 작업할 내용을 이곳에 넣어주면 된다. 
	// 	  }
	// 	})
	// }
    
  return (
    <div className='board-all'>
      <div className='board-profile'>
        <button id='alertStart' onClick={add} className='create-btn'>게시글 올리기</button>
      </div>
      <div className='board-main'>
        <ul className='board-ul'>
          {posts != undefined ?
          <>
          {posts[limitPage][0] ?
          <li className='board-li'>
            <div className='posts-header'>{posts[limitPage][0]?.title} <FaEllipsisH className='posts-menu-icon' onClick={postsMenu}/>
              {menu}
            </div>
            <div className='posts-content'>{posts[limitPage][0]?.contents}</div>
            <div className='posts-user'>{posts[limitPage][0]?.user} <FaRegHeart/></div>
          </li>
          :
          <></>}
          {posts[limitPage][1] ?
          <li className='board-li'>
            <div className='posts-header'>{posts[limitPage][1]?.title} <FaEllipsisH className='posts-menu-icon' onClick={postsMenu}/>
            {menu}
            </div>
            <div className='posts-content'>{posts[limitPage][1]?.contents}</div>
            <div className='posts-user'>{posts[limitPage][1]?.user} <FaRegHeart/></div>
          </li>
          :
          <></>}
          {posts[limitPage][2] ?
          <li className='board-li'>
            <div className='posts-header'>{posts[limitPage][2]?.title} <FaEllipsisH className='posts-menu-icon' onClick={postsMenu}/>
            {menu}
            </div>
            <div className='posts-content'>{posts[limitPage][2]?.contents}</div>
            <div className='posts-user'>{posts[limitPage][2]?.user} <FaRegHeart/></div>
          </li>
          :
          <></>}
          {posts[limitPage][3] ?
          <li className='board-li'>
            <div className='posts-header'>{posts[limitPage][3]?.title} <FaEllipsisH className='posts-menu-icon' onClick={postsMenu}/>
            {menu}
            </div>
            <div className='posts-content'>{posts[limitPage][3]?.contents}</div>
            <div className='posts-user'>{posts[limitPage][3]?.user} <FaRegHeart/></div>
          </li>
          :
          <></>}
          {posts[limitPage][4] ?
          <li className='board-li'>
            <div className='posts-header'>{posts[limitPage][4]?.title} <FaEllipsisH className='posts-menu-icon' onClick={postsMenu}/>
            {menu}
            </div>
            <div className='posts-content'>{posts[limitPage][4]?.contents}</div>
            <div className='posts-user'>{posts[limitPage][4]?.user} <FaRegHeart/></div>
          </li>
          :
          <></>}
          {posts[limitPage][5] ?
          <li className='board-li'>
            <div className='posts-header'>{posts[limitPage][5]?.title} <FaEllipsisH className='posts-menu-icon' onClick={postsMenu}/>
            {menu}
            </div>
            <div className='posts-content'>{posts[limitPage][5]?.contents}</div>
            <div className='posts-user'>{posts[limitPage][5]?.user} <FaRegHeart/></div>
          </li>
          :
          <></>}
          {posts[limitPage][6] ?
          <li className='board-li'>
            <div className='posts-header'>{posts[limitPage][6]?.title} <FaEllipsisH className='posts-menu-icon' onClick={postsMenu}/>
            {menu}
            </div>
            <div className='posts-content'>{posts[limitPage][6]?.contents}</div>
            <div className='posts-user'>{posts[limitPage][6]?.user} <FaRegHeart/></div>
          </li>
          :
          <></>}
          {posts[limitPage][7] ?
          <li className='board-li'>
            <div className='posts-header'>{posts[limitPage][7]?.title} <FaEllipsisH className='posts-menu-icon' onClick={postsMenu}/>
            {menu}
            </div>
            <div className='posts-content'>{posts[limitPage][7]?.contents}</div>
            <div className='posts-user'>{posts[limitPage][7]?.user} <FaRegHeart/></div>
          </li>
          :
          <></>}
          {posts[limitPage][8] ?
          <li className='board-li'>
            <div className='posts-header'>{posts[limitPage][8]?.title} <FaEllipsisH className='posts-menu-icon' onClick={postsMenu}/>
            {menu}
            </div>
            <div className='posts-content'>{posts[limitPage][8]?.contents}</div>
            <div className='posts-user'>{posts[limitPage][8]?.user} <FaRegHeart/></div>
          </li>
          :
          <></>}
          {posts[limitPage][9] ?
          <li className='board-li'>
            <div className='posts-header'>{posts[limitPage][9]?.title} <FaEllipsisH className='posts-menu-icon' onClick={postsMenu}/>
            {menu}
            </div>
            <div className='posts-content'>{posts[limitPage][9]?.contents}</div>
            <div className='posts-user'>{posts[limitPage][9]?.user} <FaRegHeart/></div>
          </li>
          :
          <></>}
          </> : null}

        </ul>
      </div>
      <div className='board-page-btn'>
        <div onClick={prev} className='previous'> 이전 </div>
        <div className='board-count'>
            <div className="pageNationCount" onClick={nation1}>{pageNation && pageNation[limit][0]}</div>
            <div className="pageNationCount" onClick={nation2}>{pageNation && pageNation[limit][1]}</div>
            <div className="pageNationCount" onClick={nation3}>{pageNation && pageNation[limit][2]}</div>
            <div className="pageNationCount" onClick={nation4}>{pageNation && pageNation[limit][3]}</div>
            <div className="pageNationCount" onClick={nation5}>{pageNation && pageNation[limit][4]}</div>
        </div>
        <div onClick={next} className='next'> 다음 </div>
      </div>
    </div>
  )
}

export default Boad