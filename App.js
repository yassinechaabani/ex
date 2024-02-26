import React, { useState } from 'react';
import './App.css';
function App(){

  const [count, setCount] = useState(0);

  
  function handleButtonClickIncre(){
    setCount(count + 1);
  };

 
  function handleButtonClickDecre(){
    setCount(count - 1);
  };

  return (
    <div>
      <h1 className='count-content'> {count}</h1>
      <button onClick={handleButtonClickIncre}>+</button>
      <button onClick={handleButtonClickDecre}>-</button>
    </div>
  );
};

export default Counter;
