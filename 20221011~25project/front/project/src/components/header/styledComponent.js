import styled from "styled-components";


// 마켓 플레이스가면 vscode-styled-components를 설치하면 백틱에서도 자동완성 가능

// 스타일을 변수처럼 만들어서 사용할 수 있게 해준다.

const HeaderWrap = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid;
`
const HeaderNav = styled.nav`
    display: flex;
`
const NavContents = styled.div`
    font-weight: 400;
    font-size: 20px;
    height: 55px;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    transition: 0.5s;
    :hover{
        color: gray;
    }
`
const HeaderSignin = styled.div`
`
const SigninBtn = styled.button`
    width: 100px;
    height: 40px;
    cursor: pointer;
    color: #151619;
    background-color: #ffffff;
    border : 1px solid gray;
    border-radius: 24px;
    font-size: 17px;
    transition: 0.7s;
    :hover{
        background-color: gray;
    }
`
const NoticeBtn = styled.button`
    height: 40px;
    width: 40px;
    background-color: #ffffff;
    border : 1px solid gray;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
`
export {HeaderWrap, HeaderNav, NavContents, HeaderSignin, SigninBtn, NoticeBtn};