function signUp(name,id,pw){
    return (dispatch, getState) => {
        dispatch({type : "SIGNUP"})
    }
}

export default signUp;