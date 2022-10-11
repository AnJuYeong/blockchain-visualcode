function logIn(id,pw,logUser,mainMove,inputset){
    return (dispatch, getState) => {
        if(logUser !== undefined){
            inputset();
            mainMove();
            dispatch({type : "LOGIN", payload : {id,pw}})
        } else {
            inputset();
            alert("아이디와 비밀번호가 틀립니다.");
        }
    }
}

function logOut(){
    return (dispatch, getState) => {
        dispatch({type : "LOGOUT"})
    }
}

export const loginAction = {logIn,logOut};