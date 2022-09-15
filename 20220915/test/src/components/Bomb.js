import {React, useState} from 'react'

const Bomb = (num) => {
  const arr = [];
  let randomArr = [];
  return (
    <>
    <div className='game'>
        {bombb(num)}
    </div>
    <button onClick={random}>게임 시작</button>
    </>
  )
  function random(){
    randomArr = [];
    for(let i = 0; i < 5; i++){
      let randomNum = Math.floor(Math.random() * 25);
      while(!(randomArr.indexOf(randomNum) === -1)){
        randomNum = Math.floor(Math.random() * 25);
      }
      randomArr.push(randomNum);
    }
  }
  function bombb(num){
    for(let i = 0; i < num; i++){
      
      arr.push(<div className = "bomb" onClick={click}>{i}</div>);
    }
    return arr;
  }
  
  function click(){

  }
}

export default Bomb