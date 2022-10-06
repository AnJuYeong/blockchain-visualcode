// reudx에서 지원해주는 함수
// 리듀서 함수를 하나로 합쳐준다.

// combineReducers() 함수에 객체로 전달하면 끝
// 객체로 전달하면 몇개가 있던 합쳐준다 리듀서 함수들을
// 저장소에 합ㅊ펴진 리듀서 함수가 반영 된다.
import { combineReducers } from "redux";
import login from "./login";
import weather from "./weather"

const rootReducer = combineReducers({login,weather});

export default rootReducer;