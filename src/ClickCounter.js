import React from "react";
import { useState } from "react";

export default function ClickCounter({ initValue = 0 }) {
  const [count, setCount] = useState(initValue);

  const handleClick = () => {
    setCount((count) => {
      return count + 1;
    });
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}
