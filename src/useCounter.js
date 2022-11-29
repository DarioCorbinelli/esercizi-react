import { useState } from 'react';

function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue)

  function incrementCounter() {
    setCounter(counter => counter + 1)
  }
  
  function decrementCounter() {
    setCounter(counter => counter - 1)
  }

  function resetCounter() {
    setCounter(initialValue)
  }

  return {counter: counter, increment: incrementCounter, decrement: decrementCounter, reset: resetCounter}
}

export default useCounter;