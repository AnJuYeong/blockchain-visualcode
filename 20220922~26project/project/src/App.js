import './App.css';
import {Routes, Route , Navigate} from 'react-router-dom';
import {Main, Login} from './page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
