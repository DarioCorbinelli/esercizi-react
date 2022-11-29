import { useState } from 'react';

function useControlledForm() {
  const [input, setInput] = useState({
    username: "",
    password: ""
  })

  function handleInput(e) {
    setInput(input => ({
      ...input,
      [e.target.name]: e.target.value
    }))
  }
  
  return {input, handleInput};
}

export default useControlledForm;