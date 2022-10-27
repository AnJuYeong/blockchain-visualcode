let init = {
    post : [

    ]
}


function reducer(state = init, action){
    const {type, payload} = action;
    
    switch (type) {
        case "BOARDSTART":
            return {...init, post : payload};
        default:
            return state;
    }
}

export default reducer;