import axios from "axios";

function nftAdd(item){
    return async (dispatch, getState) => {
        const nft = await axios({
            method : 'post',
            url : "http://localhost:8000/nftCreate",
            data : item
        })
    }
}

export { nftAdd };