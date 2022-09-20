import React from 'react'
import { Header,Body } from '../com'

const Shop = () => {
  return (
    <div>
        <Header title="상점페이지"/>
        <Body path="/detail/1/10/a" name="1번 상품으로 이동"/>
        <Body path="/detail/2/100/b" name="2번 상품으로 이동"/>
        <Body path="/detail/3/1000/c" name="3번 상품으로 이동"/>
        <Body path="/detail/4/10000/d" name="4번 상품으로 이동"/>
        <Body path="/detail/5/100000/e" name="5번 상품으로 이동"/>
    </div>
  )
}

export default Shop