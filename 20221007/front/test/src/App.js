import { Routes, Route, Navigate } from "react-router-dom";
import {Main, Shop} from "./page";
import {Header} from "./component";
import { useSelector } from "react-redux";

function App() {
  const isLogin = useSelector(state => state.login.islogin);

  const LoginRedirect = () => {
    return isLogin === true ? <Shop/> : loginMessage() ;
  }
  function loginMessage(){
    alert("로그인하자")
    return <Navigate to="/"/>
  }
  return (
    <div className="App">
      <Header isLogin={isLogin}/>
      {/* Routes가 스위치 역할 */}
      <Routes>
        {/* Route는 경로 페이지 띄우기 */}
        <Route path='/' element={<Main></Main>}/>
        {/* <Route path="/shop" element={<Shop></Shop>}/> */}
        <Route path='/shop' element={<LoginRedirect/>}/>
      </Routes>
    </div>
  );
}

export default App;
