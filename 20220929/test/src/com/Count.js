import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Count = ({count, setCount}) => {
    // useDispatch 함수를 사용하고
    const dispatch = useDispatch();
    // 반환된 dispatch를 사용해서 Action을 던질 수 있다.
    // dispatch 함수를 사용하는데 매개변수로 객체를 전달해줍니다.
    // 객체의 규칙은 {type:,payload}
    // type : 동작시킬 행동의 이름
    // payload : 선택사항 있어도 되고 없어도 괜찮은데 우리가 데이터 전달이 필요하면 사용


    const Add = () => {
        dispatch({type : 'ADD'});
        // setCount(count + 1);
    };
    const Remove = () => {
        dispatch({type : "REMOVE"});
        // setCount(count - 1);
    };

  return (
    <div>
        <button onClick={Add}>플러스</button>
        <button onClick={Remove}>마이나스</button>
    </div>
  )
}

export default Count