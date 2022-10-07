import styled from "styled-components";

// 마켓 플레이스가면 vscode-styled-components를 설치하면 백틱에서도 자동완성 가능

// 스타일을 변수처럼 만들어서 사용할 수 있게 해준다.
const Button = styled.button`
    width: 100px;
    height: 30px;
    margin: 0;
    padding: 0;
    border: 0;
    margin-left: 20px;
    :last-child{
        width: 130px;
    }
`
const HeaderWrap = styled.div`
    width: 100%;
    height: 50px;
    background-color: gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const HeaderContent = styled.ul`
    display: flex;
    list-style: none;
`
const ContentBtn = styled.li`
    color: white;
    cursor: pointer;
    margin-left: 20px;
    padding: 10px;
`
const LoginWrap = styled.div`
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    color: white;
`
const LoginInput = styled.input`
    height: 30px;
    margin: 0;
    padding: 0;
    border: 0;
    margin: 0 10px;
`

export {Button, HeaderWrap, HeaderContent, ContentBtn, LoginWrap, LoginInput};