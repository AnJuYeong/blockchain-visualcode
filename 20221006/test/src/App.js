import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import axios from 'axios';
import {weather,logins} from "./middleware";
import { useEffect, useState } from 'react';

// Get 요청방식
// axios({
//  url : '',
//})

// Post 요청방식
// axios({
//   // method 기본이 GET
//   method : "post",
//   url : "",
//   data : {
//     // 넘겨줄 값을 넣어주면 된다.
//   }
// })

function App() {
  const dispatch = useDispatch();
  // ㅜ 확인용 aixos가 되는지 ㅋ
  // async function getWeather(){
  //   const data = await axios({url : "https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=229b8e984efa1443275abab47b39130e",})
  //   console.log(data);
  // }
  // getWeather();
  const [name,setName] = useState();

  const getWeather = (name) =>{
    dispatch(weather.getWeather(name));
  }
  const weatherData = useSelector(state => state.weather.weatherData);
  const isLogin = useSelector(state => state.login.isLogin);
  const userName = useSelector(state => state.login.id);

  useEffect(() => {
    // getWeather("Seoul");
    // console.log(weatherData);
    console.log(isLogin);
  },[isLogin])
  console.log(isLogin);
  
  // 로그인 함수
  const [id,setId] = useState("");
  const [pw,setPw] = useState("");
  const login = () => {
    dispatch(logins.login(id,pw));
  }
  const logOut = () => {
    dispatch(logins.logout())
  }
  return (
    <div className="App">
      <label>도시 이름</label>
      <input onChange={(e) => {setName(e.target.value)}}/>
      <button onClick={() => {getWeather(name)}}>날씨 검색</button>
      <div>지금{weatherData && weatherData.data?.name} 날씨는 : {weatherData && weatherData.data?.weather[0]?.main}</div>
      <label>아이디</label><br/>
      <input onChange={(e) => {setId(e.target.value)}}/><br/>
      <label>비밀번호</label><br/>
      <input onChange={(e) => {setPw(e.target.value)}}/><br/>
      <button onClick={login}>로그인</button>
      <div>로그인 됨?</div>{isLogin ? <div> {userName} 유저 로그인 됨 <botton onClick = {logOut}> 로그아웃 </botton> </div>  : <div>로그인 안됨</div>}
    </div>
  );
}

export default App;
