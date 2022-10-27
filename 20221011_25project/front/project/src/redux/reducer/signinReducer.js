let init = {
    name : '',
    id : '',
    pw : '',
    point : '',
    picture : '',
    islogin : false
}

function reducer(state = init, action){
    const {type, payload} = action;
    
    switch (type) {
        case "SIGNIN" :
            return {...state, name : payload.data.name, id : payload.data.id, pw : payload.data.pw, point : payload.data.point, picture : payload.data.picture, islogin : true};
        case "SIGNOUT" :
            return {...state, id : "", pw : "", islogin : false};
        default : 

            return state; 
    };
}

export default reducer;