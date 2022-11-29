import React from "react";
import useCounter from "useCounter";

function Counter({initialValue}) {
  const {counter, increment, decrement, reset} = useCounter(initialValue)
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Counter;
