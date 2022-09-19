import './App.css';
import Bomb from './components/Bomb';


function App() {
  const arr = [];
  const classArray = [];  
    for(let i = 0; i < 5; i++){
      let count = Math.floor(Math.random() * 25);
      while(!(arr.indexOf(count) === -1)){
        count = Math.floor(Math.random() * 25)
      }
      arr.push(count);
    }

    for(let i=0; i<25; i++){
      let className = null;
      let check = null;

      const isBomb = arr.some((el) => el === i);
      if(isBomb){
        className = "bomb";
        check = true;
      } else{
        className = "pass";
        check = false;
      }
      classArray.push(<Bomb className={className} check={check} end={end} />);
    }    
    function end(){
      if(window.confirm("패배하셨습니다. 다시 시작을 원하면 예를 눌러주세요.")){
        window.location.href = "/";
      }
    }
  return (
    <>
    {/* 배열의 갯수만큼 반복하면서 컴포넌트 생성 및 props 전달 */}
    {/* {arr.map((el) => (<Block num={el}/>))} */}
    {/* <img src={img1}></img> */}
    {/* <Block num = {0}/> */}
    <div className='game'>
    <h1>응가를 찾지마!</h1>
    <p>* 찾으면 무슨 일이 벌어질 수도?? *</p>
  </div>
    <div className="App">
      {classArray}
    </div>
    </>
  );
}

export default App;
