import React, { useState } from 'react'
import { Header, Body } from '../com'
import { useParams, useSearchParams, Link, useLocation } from 'react-router-dom'

// 파라미터 값을 가져오기 위한 방법
// 리액트에서 지원해주는 유용한 함수를 뭐라고 했죠?
// 리액트 훅 함수를 사용을 해서 작업할 수 있다.
// useParams 사용
// url에 있는 경로에 있는 파라미터들을 객체의 형태로 불러올 수 있다.
// useParams함수를 실행해주고 반환된 객체를 가지고 동작한다.

// 검색하려면 어쩌지?
// 검색 쿼리문도 가져와보자
// 검색하려면 input 입력창이 있어야하니깐
// 입력했을 때 값을 저장해놓자 리액트 값 저장해야 할 땐 useState로 들고 있어야 한다.
// input value를 useState값에 넣어놨다.
// 입력한 값을 언제든 사용할 수 있다.
// 이제 검색 쿼리문을 만들어보자.
// useSearchParams이 함수를 사용해야 한다.
// useSearchParams이 함수를 실행해서 반환 받은 객체를 사용.
// useSearchParams가 경로에 뽑아주는 영역은
// ? 뒤에 키 값을 기준으로
// ?q=1  이런 형태는 q라는 키값이 객체형태로 나온다. {q:1} << 이렇게 나옴
// useSearchParams 함수 실행 후 반환된 객체 사용

// 현재 경로를 가져와서 사용해야 하는데.. 또 함수 useLocation
// 함수 실행 후 반환된 객체 사용
const Detail = () => {
    const [serch, setserch] = useState("");
    const params = useParams();
    const location = useLocation();
    const [query, setQuery] = useSearchParams(); 
    console.log(location);
    // q키의 값을 가져오겠다는 뜻
    console.log(query.get('q'));
    const keyInput = (e) => {
        setserch(e.target.value);
    };
  return (
    <div>
        <Header title="상세 페이지"/>
        <div>너 이거 검색했어 {query.get("q")}</div>
        <input onChange={keyInput}/>
        <Link to={location.pathname+"?q="+serch}>검색하기</Link>
        {/* <Body path="/shop" name="상점 페이지" item={params}/> */}
    </div>
  )
}

export default Detail