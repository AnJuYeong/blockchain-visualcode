import axios from 'axios';

function profilePicture(formData, config){
    console.log(formData);
    return async(dispatch, getState) =>
    {
        const user =  await axios({
            method: 'post',
            url:'http://localhost:8000/profile',
            data: formData,config
        }).then(()=>{
            alert("변경 완료");
        }).catch((err)=>{
            console.log(err);
        })
        
    }
}

function profileSet(imageSrc,userId){
    return async(dispatch, getState) => {
        const profile = await axios({
            method : 'post',
            url : 'http://localhost:8000/profileSet',
            data : {imageSrc,userId}
        }).then(()=>{
            alert("변경 완료");
        }).catch((err)=>{
            console.log(err);
        })
    }
}




export {profilePicture,profileSet};