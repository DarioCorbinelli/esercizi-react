import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => {
      console.log("I'm dismounting");
      clearInterval(interval)}
  }, []);

  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}

export default Counter;
