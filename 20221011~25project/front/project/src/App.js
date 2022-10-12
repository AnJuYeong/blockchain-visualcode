import './App.css';
import Header from './components/header/Header';
import {Routes, Route, Navigate } from "react-router-dom";
import {Main, Boad, Drops, Maket, Mypage} from "./page";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main></Main>}/>
        <Route path='/drops' element={<Drops></Drops>}/>
        <Route path='/maket' element={<Maket></Maket>}/>
        <Route path='/Boad' element={<Boad></Boad>}/>
        <Route path='/mypage' element={<Mypage></Mypage>}/>
      </Routes>
    </div>
  );
}

export default App;
