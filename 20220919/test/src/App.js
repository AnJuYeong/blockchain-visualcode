import './App.css';
// import BlockClass from './BlockClass';
// import BlockFn from './BlockFn';
import {img01, img02, img03} from "./img";
import Block from './Block';
import { useState } from 'react';

function App() {
  // 일단 간단한 가위바위보 만들자
  // 플레이어 영역 하나 컴퓨터 영역 하나
  // 플레이어가 가위나 바위나 보를 선택해서 버튼을 누르면
  // 플레이어가 선택한 이미지가 플레이어 영역에 보이고
  // 컴퓨터는 랜덤한 값을 이용해서 가위 바위 보 이미지가 보이게
  // 이 결과를 이겼는지 졌는지 보여주자

  // 1. 플레이어 컴퓨터 영역 (컴포넌트로 정리)

  const select = {
    scissors : {
      name : "가위",
      img : img01
    },
    rock:{
      name : "바위",
      img : img02
    },
    paper:{
      name: "보",
      img : img03
    }
  }

  // 유저가 선택한 값을 담아놓고 주시해야 한다. 선택하면
  // 데이터가 바뀌어서 다시 그려줘야 하기 때문에.(이미지가 변해야 하죠)
  // 유저의 선택 값을 담을 useState
  const [userSelect, setUserSelect] = useState(null);
  // 컴퓨터의 선택 값을 담을 useState
  const [comSelect, setComSelect] = useState(null);
  // 승패 결과를 담아줄 useState
  const [result, setResult] = useState("");

  //컴퓨터의 버튼 X 유저가 선택하면 얘는 랜덤으로 값이 전달되어야 하는데
  // Math.random() 랜덤 값을 받아올 것이고
  // 받아온 값으로 위에 만들어준 객체에서 값을 가져와야 하는데
  // 객체에서 키 값만 뽑아서 배열로 만들자
  // let arr = Object.keys(select) 함수로 반환해주면
  // arr 변수 안에 키 값만 뽑아서 배열로 받아준다.

  function userClick(temp){
    setUserSelect(select[temp]);
    // Object.keys 함수를 사용해서 객체의 키 값만 뽑아서 
    // 배열을 반환 받는데 arr변수에 바인딩 넣어줬다.
    let arr = Object.keys(select);
    // 랜덤한 인덱스 뽑자 근데 3개 0,1,2중 하나
    // Math.floor 함수로 소수점 제외하고
    let comRandom = Math.floor(Math.random() * 3);
    // arr[comRandom] 얘는 랜덤한 키값이 뽑힌다.
    // select 객체에 값을 불러오는 방법이 select. 점 찍고 키값을 입력해서 가져오거나
    // select["문자열"] 가져오는 방법 두가지인데 우리가 선택한 방법은 문자열로 전달해서
    // 값을 가져오는 방법
    setComSelect(select[arr[comRandom]]);
    // 결과를 가지고 승패를 보여준다.
    let player = select[temp];
    let computer = select[arr[comRandom]];
    // 1. 유저랑 컴퓨터 같으면 무승부
    // 2. 유저가 가위를 내면 이길라면 컴퓨터 보 지면 바위 
    // 3. 유저가 보를 내면 이길라면 컴퓨터 바위 지면 가위
    // 4. 유저가 바위를 내면 이길라면 컴퓨터 가위 지면 보
    if(player.name == computer.name){
      setResult("무승부");
    } else if(player.name == "가위"){
      let temp = computer.name == "보" ? "이겼다" : "졌다";
      setResult(temp);
    } else if(player.name == "바위"){
      let temp = computer.name == "가위" ? "이겼다" : "졌다";
      setResult(temp);
    } else if(player.name == "보"){
      let temp = computer.name == "바위" ? "이겼다" : "졌다";
      setResult(temp);
    }
  }
  // 1. 우리가 만들어놓은 객체의 값이 필요하기 때문에 userClick 함수를 만들었고
  // 그 값을 저장해주는 userSelect변수를 useState함수를 통해서 만들어줬고
  // 2. 버튼을 클릭했을 때 그 함수가 실행이 되고 state값이 변하기 때문에 다시
  // 리렌더링 된다. 부모가 리렌더링 됐으니깐 자식 컴포넌트도 리렌더링 된다.
  // Block에 우리는 userClick를 실행하고 setUserSelect함수로 변경한
  // userSelect 값을 props로 넘겨줬다.
  // Block에서는 props로 넘겨받은 값을 사용해서 img의 경로를 받아서 이미지를
  // 보여줬다. 어떻게? 부모가 리렌더링 됐기 때문에 자식도 변한 값이 리렌더링 된 것.
  return (
    <div>
      <div className="App">
        <Block data={userSelect} name="user" test={result}/>
        <Block data={comSelect} name="com" test={result}/>
      </div>
      <div>
        <button onClick={() => {userClick("scissors")}}>가위</button>
        <button onClick={() => {userClick("rock")}}>바위</button>
        <button onClick={() => {userClick("paper")}}>보</button>
      </div>
    </div>
  );
}

export default App;
