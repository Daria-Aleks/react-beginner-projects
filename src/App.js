import React from 'react';
import { useState } from 'react';
import './index.scss';

function App() {
  const [count, setCount] = useState(0); 
  function Plus (){
    setCount(count + 1);
  }
  function Minus (){
    setCount(count - 1);
  }
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={Minus} className="minus">- Минус</button>
        <button onClick={Plus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
