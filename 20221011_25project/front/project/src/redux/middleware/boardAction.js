import axios from "axios";

function boardAdd(userName,titleInput,contentsInput){
    return async(dispatch, getstate) => {
        const board = await axios({
            method : "post",
            url : "http://localhost:8000/board",
            data : {
                userName,
                titleInput,
                contentsInput
            }
        })
    }
}

function boardStart(){
    return async(dispatch, getstate) => {
        const board = await axios({
            method : "post",
            url : "http://localhost:8000/boardStart",
            data : {

            }
        })
        // console.log(board);
        dispatch({type : "BOARDSTART", payload : board.data});
    }
}

export {boardAdd,boardStart};