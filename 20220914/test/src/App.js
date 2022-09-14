// App.css 파일 가져온 구문
import './App.css';
import Mycom from "./components/Mycom";
import Mytest from './components/Mytest';
import Mytube from './components/Mytube';
import Calenderday from './components/Calenderday';
import Calendernum from './components/Calendernum';

function App() {
  return (
    <div className="App">
      {/* <Mycom name="주영" age="25" Cname="one"/>
      <Mycom name="종찬" age="25" Cname="two"/>
      <Mycom name="하진" age="30" Cname="three"/> */}

      {/* <Mytest day="9월달력표" Cname="title"/>
      <Mytest day="일" Cname="d days"/>
      <Mytest day="월" Cname="d days"/>
      <Mytest day="화" Cname="d days"/>
      <Mytest day="수" Cname="d days"/>
      <Mytest day="목" Cname="d days"/>
      <Mytest day="금" Cname="d days"/>
      <Mytest day="토" Cname="d days"/>
      <Mytest day="" Cname="none days"/>
      <Mytest day="" Cname="none days"/>
      <Mytest day="" Cname="none days"/>
      <Mytest day="" Cname="none days"/>
      <Mytest day="1" Cname="days"/>
      <Mytest day="2" Cname="days"/>
      <Mytest day="3" Cname="days"/>
      <Mytest day="4" Cname="days sun"/>
      <Mytest day="5" Cname="days"/>
      <Mytest day="6" Cname="days"/>
      <Mytest day="7" Cname="days"/>
      <Mytest day="8" Cname="days"/>
      <Mytest day="9" Cname="days"/>
      <Mytest day="10" Cname="days"/>
      <Mytest day="11" Cname="days sun"/>
      <Mytest day="12" Cname="days"/>
      <Mytest day="13" Cname="days"/>
      <Mytest day="14" Cname="days"/>
      <Mytest day="15" Cname="days"/>
      <Mytest day="16" Cname="days"/>
      <Mytest day="17" Cname="days"/>
      <Mytest day="18" Cname="days sun"/>
      <Mytest day="19" Cname="days"/>
      <Mytest day="20" Cname="days"/>
      <Mytest day="21" Cname="days"/>
      <Mytest day="22" Cname="days"/>
      <Mytest day="23" Cname="days"/>
      <Mytest day="24" Cname="days"/>
      <Mytest day="25" Cname="days sun"/>
      <Mytest day="26" Cname="days"/>
      <Mytest day="27" Cname="days"/>
      <Mytest day="28" Cname="days"/>
      <Mytest day="29" Cname="days"/>
      <Mytest day="30" Cname="days"/> */}
      <div className='title'>9월달 달력표</div>
      <Calenderday/>
      <Calendernum day="30"/>
    </div>
  );
}

export default App;
