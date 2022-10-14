import axios from "axios";
import aixos from "axios";

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
        console.log(user.data);
    }

}

function signUp(name,id,pw){
    return async(dispatch, getstate) => {
        const user = await aixos({
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

export const loginAction = {signUp};