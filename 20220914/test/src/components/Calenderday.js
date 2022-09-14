import React from 'react'

const Calenderday = () => {
    const arrayDate = ["일","월","화","수","목","금","토"];
    return (
        arrayDate.map((el) => (<div className='date'>{el}</div>))
    )
}

export default Calenderday