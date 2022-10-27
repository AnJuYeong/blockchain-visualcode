import axios from 'axios';

function profilePicture(formData, config){
    console.log(formData);
    return async(dispatch, getState) =>
    {
        const user =  await axios({
            method: 'post',
            url:'http://localhost:8000/profil',
            data: formData,config
        }).then(()=>{
            alert("변경 완료");
        }).catch((err)=>{
            console.log(err);
        })
        
    }
}





export {profilePicture};