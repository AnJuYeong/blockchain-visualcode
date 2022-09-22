import React from 'react'
import {Header, Body} from '../com'
function Shop() {
  return (
    <div>
        <Header title="상점페이지"/>
        <Body path = "/detail/1/10/s" name="1번 상품으로 이동"/>
        <Body path = "/detail/2/20/바지" name="2번 상품으로 이동"/>
        <Body path = "/detail/3/14/장갑" name="3번 상품으로 이동"/>
        <Body path = "/detail/4/17/모자" name="4번 상품으로 이동"/>
        <Body path = "/detail/5/9/팬티" name="5번 상품으로 이동"/>
    </div>
  )
}

export default Shop

