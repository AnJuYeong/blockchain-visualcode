import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { reinfoAction } from '../redux/middleware';

const Mypage = ({loginPicture}) => {
  const userName = useSelector(state => state.signin.name);
  const userPoint = useSelector(state => state.signin.point);
  const userId = useSelector(state => state.signin.id);
  // ㅜ 서버로 보낼 때 인코딩 못하게 하는거
  const config = {header: {"content-type" : "multipart/form-data"}}

  const dispatch = useDispatch();
  const [img,setImg] = useState(loginPicture);
  const [imageSrc,setImageSrc] = useState(loginPicture);
  const [aa,setaa] = useState(false);
  const submitProfilePicture = () => {
    if(aa == false){
      dispatch(reinfoAction.profilePicture(img,config));
    }else{
      dispatch(reinfoAction.profileSet(imageSrc,userId));
    }
    
  }
  
  const imgset = () => {
    setImageSrc("https://static.nid.naver.com/images/web/user/default.png?type=s160");
    setaa(true);
  }

    // 미리보기 로직
    const encodeFileToBase64 = (e) => {
      setaa(false);
      let formdata = new FormData();
      formdata.append('file', e.target.files[0]);   
      formdata.append('userId', userId);
      setImg(formdata)
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      return new Promise((resolve) => {
        reader.onload = () => {
          setImageSrc(reader.result);
          resolve();
        };
      });
    };
  return (
    <div>
      <div className='mypage-header'>
        <label className='mypage-header-contents'>이름 : {userName}</label>
        <label className='mypage-header-contents'>포인트 : {userPoint}</label>
        <label className='mypage-header-contents'>보유 NFT : </label>
      </div>
      <div className='mypage'>
        <div className='mypage-profile'>
          <div className='mypage-picture'>
          {imageSrc && <img src={imageSrc} alt="preview-img" className='mypage-picture'/>}
          </div>
          <input type="file" accept='image/*' className='file-input' id='change-input' onChange={encodeFileToBase64}/>
          <div className='picture-btn'>
            <label htmlFor='change-input' className='picture-change'>사진 변경</label>
            <label onClick={imgset} className='picture-none'>기본 설정</label>
            <label onClick={submitProfilePicture} className='picture-set'>저장</label>
          </div>
        </div>
        <div className='mypage-contents'>

        </div>
      </div>
    </div>
  )
}

export default Mypage