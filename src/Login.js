import React from 'react';
import { useState } from 'react';

export default function Login({name = "", password = "", checked = false}) {
  const [form, setForm] = useState({
    username: name,
    password: password,
    checked: checked
  })

  function handleInput(e) {
    setForm(form => {
      return {
        ...form,
        [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
      };
    });
  }

  const handleLogin = () => {
    console.log(form)
  }

  return (
    <>
      <input type="text" name='username' value={form.username} onChange={handleInput}/>
      <input type="password" name='password' value={form.password} onChange={handleInput}/>
      <input type="checkbox" name="checked" checked={form.checked} onChange={handleInput}/>
      <button onClick={handleLogin}>Login</button>
    </>
  )
}