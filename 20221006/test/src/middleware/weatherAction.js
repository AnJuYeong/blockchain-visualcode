import axios from 'axios';
// axios
// axios는 브라우저
// 자바스크립트에 fetch가 있는데 프레임워크에선 ajax를 구현할 때
// axios를 쓰는 편이다. 속성은 url 필수고 나머지는 전달을 안해도 상관이 없다. 옵션
// method는 지정안하면 기본이 디폴트가 Get방식

// axios 설치 명령어
// npm i axios

function getWeather(name) {
    // thunk가 해주는 일이 Action Createors라는 함수를 만들어주는 것.
    // Action Createors 함수는 함수를 반환한다.
    // thunk는 dispatch를 딜레이 시켜주는 역할

    // action 함수는 함수를 반환한다.
    // dispatch랑 getState 둘 다 함수다.
    return async(dispatch,getState) => {
        const data = await axios({
            url : `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=229b8e984efa1443275abab47b39130e`,
        })
        // console.log(data);
        // getState 이게 뭐냐?
        // console.log(getState());
        dispatch({type : "GET_WEATHER_DATA",payload : data});
        // getState 이게 뭐냐?
        // console.log(getState());
        // getState() 함수는 store 저장소에 있는 state 객체를 반환해준다.
    }
}

function getWeather2() {

}
function getWeather3() {

}
// ㅜ 이렇게 변수로 선언해서 키값으로 잘 알아볼 수 있게 
// 키값으로 가져올 수 있다. 나중에 여러개 사용할 때 사용 가능
export const weather = {getWeather, getWeather2, getWeather3}