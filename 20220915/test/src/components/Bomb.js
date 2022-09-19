import React from 'react'
import { useState } from 'react';


const Bomb = (props) => {
  const {className, check, end} = props;
  const [bomb, bombb] = useState(check);

  function click(e){
    if(e.target.className === "all pass false"){
      bombb(" realpass");
    }else if(e.target.className === "all bomb true"){
      bombb(" realbomb");
      setTimeout(()=>{
        end(e);
      },50)
    }
  };

  return (
    // className.map((el) => (<div className={"all " + el + bomb} onClick={ click }>응가</div>))
    <div className={"all "+className+" "+bomb} onClick={click}>응가</div>
  )
}

export default Bomb