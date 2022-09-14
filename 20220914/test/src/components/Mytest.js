import React from 'react'

const Mytest = (num) => {
    const {day, Cname} = num; 
  return (
    <div className= {Cname}>
        {day}
    </div>
  )
}

export default Mytest