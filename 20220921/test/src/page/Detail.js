import React, { useState } from 'react'
import { Header, Body } from '../com'
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'
// 파라미터 값을 가져오기 위한 방법
// 리액트에서 지원해주는 유용한 함수는 리액트 훅임 사용을 해서 작업 할 수 있다.
// useParams 사용
// url에 경로에 있는 파라미터들을 객체의 형태로 불러올 수 있다.
// useParams함수를 실행해주고 반환된 객체를 가지고 동작한다.

// 검색하려면 어쩌지..?
// 검색쿼리문도 가져와보자
// 검색하려면 input 입력창이 있어야하니까..
// 입력했을때 값을 저장해놓자 리액트 값저장해야할때 useState로 들고 있어야겠다.
// input value를 useState값에 넣어놨다. 
// 입력한 값을 언제든 사용할 수 있다. 이제
// 검색 쿼리문을 만들어보자
// useSearchParams 이 함수를 사용해야한다.
// useSearchParams 이 함수를 실행해서 반환받은 객체를 사용
// useSearchParams 가 경로에서 뽑아주는 영역은
// ?뒤에 키값을 기준으로 
// ?q=1 이런 형태는 q라는 키값이 객체형태로 나온다 { q : 1 }
// useSearchParams 함수 실행 후 반환된 객체 사용

// 현재 경로를 가져와서 사용해야하는데.. 또 함수 useLocation
// 함수 실행 후 반환된 객체 사용
const Detail = () => {
    const [serch, setSerch] = useState('');
    const params = useParams();
    const location = useLocation();
    const [query, serQuery] = useSearchParams();
    console.log(location);
    // q키의 값을 가져오겠다는 뜻
    console.log(query.get('q'));
    const KeyInput = (e) => {
        setSerch(e.target.value);
    }
  return (
    <div>
      <Header title="상세 페이지"/>
      <div>{serch}</div>
      <div>너 이거 검색했어 : {query.get('q')}</div>
      <input onChange={KeyInput}/>
      <Link to={location.pathname+"?q="+serch}>검색하기</Link>
    </div>
  )
}

export default Detail