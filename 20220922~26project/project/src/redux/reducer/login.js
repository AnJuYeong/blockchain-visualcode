let init = {
    id : "",
    pw : "",
    islogin : false
}

function reducer(state = init, action){
    let {type, payload} = action
    switch (type) {
        case "LOGIN" :
            return {...state, id : payload.id, pw : payload.pw, islogin : true};
        case "LOGOUT" :
            return {...state, id : "", pw : "", islogin : false};
        default:

            return state;
    }
}

export default reducer;