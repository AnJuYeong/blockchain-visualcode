import aixos from "axios";

function login(id,pw){
    return async(dispatch,getState) => {
        const user = await aixos({
            method : "post",
            url: "http://localhost:8000/login",
            data : {
                id,
                pw
            }
        })
        console.log(user.data);
        if(user.data){
            dispatch({type : "LOGIN", payload : {id,pw}})
        }
        else{
            alert("없는 아이디임 회원가입해라 ㅋ");
        }
    }
}
function logOut(){
    return (dispatch,getState) => {
        if(getState().login.islogin)
        {
            dispatch({type : "LOGOUT"})
        }
    }
}

function signUp(id,pw, setWrap){
    return async(dispatch,getState) => {
        const user = await aixos({
            method : "post",
            url: "http://localhost:8000/signUp",
            data : {
                id,
                pw
            }
        })
        console.log(user);
        alert(user.data);
        if(user.data === "너 가입 됐다. ㅋ"){
            setWrap();
        } else if(user.data === "동일한 아이디가 있어. ㅋ"){
            setWrap();
        }
    }
}

export const loginAction = {login, signUp, logOut};