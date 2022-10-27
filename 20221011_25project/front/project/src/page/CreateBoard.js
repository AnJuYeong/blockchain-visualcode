import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { boardAction } from "../redux/middleware"
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const CreateBoard = ({posts, setAddPost, addPost}) => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const titleInput = useRef();
    const contentsInput = useRef();
    const userName = useSelector(state => state.signin.name);

    const add = () => {
        if(!userName){
            return Swal.fire({
                icon: 'error',  // 여기다가 아이콘 종류를 쓰면 됩니다.                     
                title: '로그인을 해주세요',     
              });
        }
        deleteBoard();
      }
      function deleteBoard(){
		Swal.fire({
		  title: '글을 등록하시겠습니까???',
		  text: "확인을 누르면 게시글이 등록됩니다..",
		  icon: 'success',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: '등록',
		  cancelButtonText: '취소'
		}).then((result) => {
		  if (result.value) {
            setAddPost([{
                user : userName,
                title : titleInput.value,
                contents : contentsInput.value
              }, ...addPost]);
              dispatch(boardAction.boardAdd(userName,titleInput.value,contentsInput.value));
              titleInput.current.value = "";
              contentsInput.current.value = "";
              nav("/board");
		  }
		})
	}

  return (
    <div>
        <div className='board-header'>
        <label className='board-header-title'>제목</label>
        <input ref={titleInput} onChange={(e) => titleInput.value = e.target.value} className='board-input-title'/>
        <label>내용</label>
        <textarea ref={contentsInput} onChange={(e) => contentsInput.value = e.target.value} className='board-input-content'></textarea>
        {/* <input ref={contentsInput} onChange={(e) => contentsInput.value = e.target.value} className='board-input-content'/> */}
        <button onClick={add} className='board-btn'>글쓰기</button>
      </div>
    </div>
  )
}

export default CreateBoard