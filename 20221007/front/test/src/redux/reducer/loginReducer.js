let init = {
    id : '',
    pw : '',
    islogin : false
}

function reducer(state = init, action){
    const {type, payload} = action;
    
    switch (type) {
        case "LOGIN" :
            console.log("여긴 로그인");
            return {...state, id : payload.id, pw : payload.pw, islogin : true};
        case "LOGOUT" :
            console.log("여긴 로그아웃");
            return {...state, id : "", pw : "", islogin : false};
        default : 

            return state; 
    };
}

export default reducer;