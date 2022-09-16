import './App.css';
import Block from './components/Block';
import Bomb from './components/Bomb';
import {img1} from "./img"
function App() {
  
    const arr = [];
    for(let i = 0; i < 5; i++){
      let count = Math.floor(Math.random() * 25);
      while(!(arr.indexOf(count) === -1)){
        count = Math.floor(Math.random() * 25)
      }
      arr.push(count);
    }
  
    let option = "";
    //
    // ㅜ 폭탄의 조건을 담고
    const isBomb = true;
    if (isBomb) {
      option = "bomp";
    }
    
    for(let i = 0; i < 25; i++){
      <Bomb option={option} index = {i}/>
    }
  
  return (
    <div className="App">
      {/* 배열의 갯수만큼 반복하면서 컴포넌트 생성 및 props 전달 */}
      {/* {arr.map((el) => (<Block num={el}/>))} */}
      {/* <img src={img1}></img> */}
      {/* <Block num = {0}/> */}
        <bommb/>
    </div>
  );
}


export default App;
