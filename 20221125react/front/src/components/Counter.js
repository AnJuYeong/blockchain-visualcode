import React, { useEffect, useState } from 'react'
import CounterContract from "../contracts/Counter.json"

const Counter = ({web3, account}) => {
    const [count, setCount] =  useState(0);
    const [deployed, setDeployed] = useState(null);

    const incremoent = async () => {
        // 매개변수로 트랜잭션 계정이 필요
        // 트랜잭션을 발생 시킬거.
        // 상태변수를 변경 send() 함수로
        const result = await deployed.methods.incremoent().send({from : account})
        if(!result) return;
        // 상태변수를 가져와서 state값을 변경
        const current = await deployed.methods.current().call();
        setCount(current);
    }
    const decremoent = async () => {
        const result = await deployed.methods.decremoent().send({from : account})
        if(!result) return;
        // 상태변수를 가져와서 state값을 변경
        const current = await deployed.methods.current().call();
        setCount(current);
    }

    useEffect(() => {
      (async() => {
        if(deployed) return;
        // abi와 CA가 필요한데
        // CounterContract.json 안에 abi가 있고
        // it.address
        // CA : "0x4B1fc3979e1662eF817b77743f6C15429720BbD6"
        const Deployed = new web3.eth.Contract(CounterContract.abi, '0x4B1fc3979e1662eF817b77743f6C15429720BbD6');
        const count = await Deployed.methods.current().call();
        setCount(count);
        setDeployed(Deployed);
      })();
    }, [])

  return (
    <>
    <h1>개수 : {count}</h1>
      <button onClick={incremoent}>+</button>
      <button onClick={decremoent}>-</button>
    </>
  )
}

export default Counter