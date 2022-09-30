import React, { useState } from 'react'
import { Header } from '../com'

const Notice = ({username}) => {

  const [title,setTitle] = useState();
  const [contents,setContents] = useState();

  
  const add = () => {
    setTitle(title);
    setContents(contents);
    console.log(title);
    console.log(contents);
  }

  return (
    <>
    <Header/>
    <div>
      <div>
      제목 <input type="text" value={title}/>
      내용 <input type="text" value={contents}/>
      <button onClick={add}>글 등록</button>
      </div>
    </div>
    </>
  )
}

export default Notice