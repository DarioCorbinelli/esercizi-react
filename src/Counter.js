import React, { useState } from 'react';

function Coutner({initValue = 0}) {
  const [counter, setCounter] = useState(initValue)
  function handleIncrement() {
    setCounter(c => c + 1)
  }
  function handleDecrement() {
    setCounter(c => c - 1)
  }
  function handleReset() {
    setCounter(initValue)
  }
  return ( 
    <>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleReset}>reset</button>
    </>
   );
}

export default Coutner;