import React, { useState } from 'react'
import { Header } from '../com'

const Notice = ({name, isLogin, b}) => {

  const [title,setTitle] = useState("");
  const [contents,setContents] = useState("");
  
  const userTitle = (e) => {
    setTitle(e.target.value);
  }
  
  const userContents = (e) => {
    setContents(e.target.value);
  }
  
  console.log(b);
  const add = () => {
    b.push(<li className='cc'>작성자: {name} 제목 :{title} 내용 :{contents}</li>);
    setTitle("");
    setContents("");
  }




  return (
    <>
    <div>
      <div>
      제목 <input type="text" onChange={userTitle} value={title}/>
      내용 <input type="text" onChange={userContents}value={contents}/>
      <button type="submit" onClick={add}>글 등록</button>
      </div>
    </div>
    <div className='bb'>
      <ul className='cc'>
      {b}
      </ul>
    </div>
    </>
  )
}

export default Notice