import { useState } from 'react';
import './App.css';
import {Count, CountView} from "./com";

function App() {
  const [count,setCount] = useState(0);

  return (
    <div className="App">
      <CountView count={count}/>
      <Count count={count} setCount={setCount}/>
    </div>
  );
}

export default App;
