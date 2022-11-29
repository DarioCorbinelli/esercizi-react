import React from "react";
import useControlledForm from "useControlledForm";

function Form() {
  const {input, handleInput} = useControlledForm()

  console.log(input)
  return (
    <>
      <input type="text" name="username" placeholder="username" value={input.username} onChange={handleInput}/>
      <input type="password" name="password" placeholder="password" value={input.password} onChange={handleInput}/>
    </>
  );
}

export default Form;
