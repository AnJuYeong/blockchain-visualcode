import './App.css';
import {Routes, Route , Navigate} from 'react-router-dom';
import {Main, Login, Mypage, Notice, Signup} from './page';

function App() {
  


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/mypage" element={<Mypage/>}/>
        <Route path="/notice" element={<Notice/>}/>
      </Routes>
    </div>
  );
}

export default App;
