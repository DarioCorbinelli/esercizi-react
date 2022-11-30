import { useCallback, useState } from 'react';

function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue)

  const incrementCounter = useCallback(function() {
    setCounter(counter => counter + 1)
  }, [])
  
  const decrementCounter = useCallback(function() {
    setCounter(counter => counter - 1)
  }, [])
  
  const resetCounter = useCallback(function() {
    setCounter(initialValue)
  }, [initialValue])

  return {counter: counter, increment: incrementCounter, decrement: decrementCounter, reset: resetCounter}
}

export default useCounter;