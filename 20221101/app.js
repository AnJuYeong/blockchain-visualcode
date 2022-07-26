// typeScript란
// javaScript에서 타입 설정이 추가된 언어라고 보시면 된다.
// javaScript에서 타입이 확장된 언어
// typeScript는 javaScript의 상위 집합 슈퍼셋으로서 대형 프로젝트를 진행할 때
// 어느정도 약점 오류를 잡는데 좋다.
// C++, C# 같이 객체지향 프로그래밍을 지원하는데
// typeScript는 객체지향 프로그래밍에 특화된 프로그래밍 패턴을 지원하는데
// 현재는 함수형 프로그래밍이 좀 대세라서 타입검사나 추론 등의 기능을 사용만 할거다.

// typeScript를 쓰면 javaScript로 작업할 때 보다 개발에서 생기는 에러를 사전에 방지할 수 있고
// javaScript의 코드의 품질과 개발 생산성을 높일 수 있다.

// 코드의 완성 가이드
// javaScript는 타입이 정해져 있지 않아서 자동완성이 미리 뜨지않아 일일이 타이핑 해야함
// typeScript는 타입을 정해놔서 미리 자동완성이 뜨기 때문에 빠르고 정확하게 작업할 수 있다.

// typeScript는 에러를 사전에 방지하는데 javaScript는 코드를 실행 시켜야지 에러를 확인 할 수 있고
// typeScript는 작성한 코드가 문제가 있으면 실행시키기전부터 바로바로 확인해서 문제를 해결할 수 있다.

// typeScript는 프로그래밍 언어이고 typeScript의 컴파일은 그냥 typescript 코드를 javaScript 코드로
// 바꿔주는 것 javaScript로 바꿔주는 이유는 브라우저가 이해할 수 있는게 typeScript가 아니라 javaScript로
// 작성된 코드이기 때문에

// typeScript를 설치해 보자.
// 설치 명령어

// --------------------------------------------
// npm install -g typescript
// --------------------------------------------

// 설치가 잘 됐는지 확인
// --------------------------------------------
// tsc --version
// --------------------------------------------

// tsconfig.json 생성 명령어

// --------------------------------------------
// tsc -- init
// --------------------------------------------

// tsconfig.json은 typeScript의 설정파일 typeScript의 설정값을 조작 할 수 있다.

// typeScript의 변수 타입 지정

// 변수명 : 타입 = 초기값

// 자바스크립트는 변수명 = 초기값 이였는데

// ts-node라는 typeScript 실행기를 사용해서 개발 환경에서 typeScript로 작성된 파일을 실행 시켜볼 수 있다.

// 설치 명령어

// ----------------------------------------------------------
// npm install -g typescript ts-node @types/node
// ----------------------------------------------------------

// https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-tsconfigjson-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0-%EC%B4%9D%EC%A0%95%EB%A6%AC
// ㅗ 속성들이 엄청 많은데 나중에 한번 꼭 보기