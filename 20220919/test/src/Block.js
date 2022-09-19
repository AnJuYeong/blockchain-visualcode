import React from 'react'

const Block = (props) => {
  let {data,name,test} = props;
  let temp = "";
  if(name == "user"){
    temp = test;
  } else{
    if(test == "이겼다"){
      temp = "졌다";
    } else if(test == "졌다"){
      temp = "이겼다";
    } else if (test == "무승부"){
      temp = "무승부";
    }
    // temp = test == "무승부" ? "무승부" : test == "이겼다" ? "졌다" : "이겼다";
  }
  return (
    <div className='block'>
        {/* 선택한 이미지를 props값으로 받아온다
            부모 컴포넌트에서 */}
        {/* 리액트에서 제일 많이 쓸거다. 값이 있으면 그려라라는 구문 
            값이 없으면 오류를 뱉어내기 때문에*/}
        <div>{name}</div>
        <img src={data && data.img}/>
        <div>{temp}</div>
    </div>
  )
}

export default Block