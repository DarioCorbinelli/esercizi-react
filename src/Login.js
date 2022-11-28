import React from 'react';

export default function Login(props) {
  return (
    <>
      <input type="text" name='username' />
      <input type="password" name='password' />
      <input type="checkbox" name="checkbox" />
      <button>Login</button>
    </>
  )
}