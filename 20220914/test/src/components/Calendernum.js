import React from 'react'

const Calendernum = (num) => {
    const {day} = num;
  return (
    <div className='total-number'>
        {count(day)}
    </div>
  )
}

function count(day){
    let array = [
        <div className='number sic'></div>,
        <div className='number sic'></div>,
        <div className='number sic'></div>,
        <div className='number sic'></div>
    ];
    for(let i=1; i <= day; i++){
        if(i == 4 || i == 11 || i == 18 || i == 25){
            array.push(<div className='number sun'>{i}</div>);
        }else{
            array.push(<div className='number'>{i}</div>);
        }
    }
    return array;
}

export default Calendernum