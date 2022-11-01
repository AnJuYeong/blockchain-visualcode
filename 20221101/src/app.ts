// 기본타입은 boolean, number, string, undefiend, null 등이 있고

// 숫자 타입
const num : number = 100;

// 문자 타입
const str : string = "asdasd";

// boolean 타입
const bool : boolean = true;

// 배열은 타입[] 붙여주면 된다.
const array : number[] = [1,2];
const array1 : string[] = ['안녕','하세요'];

// undefined 타입
const undefiendType : undefined = undefined;

// null 타입
const nullType : null = null;

// 객체 타입
const obj : { str : string, num? : number } = { str : "안녕" };
// 객체 타입은 속성명? : 타입 형태로 지정하면 속성은 있어도 되고 없어도 되는 옵션값이
// 된다. 없어도 오류가 없음

// typeScript는 별칭 타입 사용이 가능한데
type blockHeader = {
    version : string,
    height : number
};

// blockHeader라는 사용자 지정 타입을 만들었고
// 필요할 때마다 재활용이 가능하다.

const block : blockHeader = {
    version : "1.0.0",
    height : 0
};

// tuple(튜플) : tuple은 배열을 생성할 수 있게 하는데 특정 위치에 특정 타입이 있어야 한다.

const tuple : [string, number, boolean?] = ['안녕', 100, true];

// any : 타입 제한 없다. typeScript의 검사를 비활성화 시킨다고 보면 됨
// any는 말 그대로 아무타입이나 될 수 있는 뜻 너무 막쓰면 안좋다..

// undefined : 얘는 undefined의 값만 가질 수 있다.

const any : any = 100

// unknown : 어떤 타입인지 모를 때 아직 변수를 사용하는 경우 데이터를 받아 올건데
// 미리 타입을 알지 못 할 때 사용 하지만 그냥 사용하면 안되고 unknown 타입으로 변수를
// 정의하면 컴파일러에게 '변수의 타입이' unknown이라 어떤 값이든 올 수 있다.
// 엄격하게 검사해라 라고 경고를 준다.
// 이게 any와의 차이점

// 오류 코드
// const numUnknown : unknown = 100;
// console.log(numUnknown.length);

// 정상 코드
// const numUnknown : unknown = "100";

// if(typeof numUnknown === "string")
// {
//     console.log(numUnknown.length);
// };

// 함수 타입
// void : 비어 있다는걸 의미 typeScript에서 함수를 정의할 때 매개변수의 타입과
// return값의 타입을 지정해주는 return 값이 없는 함수는 vodi타입을 사용하고 있다.

// function 함수명() : return타입 {}
// vodi는 안쓰면 typeScript는 그냥 자동으로 void타입을 준다.
// 그래서 굳이 안써도 된다.

// 매개변수도 타입을 지정해 줘야 한다.
function fun(str : string) : string {
    return "ㅎㅇㅎㅇ"
}

myName.name = "안녕"