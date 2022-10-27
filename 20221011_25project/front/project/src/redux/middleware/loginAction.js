import axios from "axios";

function signIn(id,pw){
    return async(dispatch, getstate) => {
        const user = await axios({
            method : "post",
            url : "http://localhost:8000/signIn",
            data : {
                id,
                pw
            }
        })
        if(user.data == "회원이 아님.ㅋ"){
            alert("회원이 아님.ㅋ");
        } else if(user.data == "비밀번호가 틀림"){
            alert("비밀번호가 틀림")
        } else{
            dispatch({type : "SIGNIN", payload : user})
        }
    }
}

function signUp(name,id,pw){
    return async(dispatch, getstate) => {
        const user = await axios({
            method : "post",
            url : "http://localhost:8000/signUp",
            data : {
                name,
                id,
                pw
            }
        })
        alert(user.data);
    }    
}

export {signUp,signIn};