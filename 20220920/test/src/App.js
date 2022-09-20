import './App.css';
import { Routes, Route } from 'react-router-dom';
import {Main, Login, Shop, Detail} from './page/index';

function App() {
  return (
    // Routes : 페이지를 스위치 해주는 일을 해준다.
    // 버전업이 되면서 이름이 바뀌었다. 과거에는  Switch였다.

    // Route : 페이지들을 정의해준다. Route에는 props 값이 두개 필요한데
    // path랑 element
    // path는 경로 (보여줄 컴포넌트들을 보여줄 경로)
    // elemnet는 보여줄 경로의 컴포넌트(path에 해당되는 경로에서 보여줄 컴포넌트)

<div className="App">
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/detail/:id/:num/:name' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
