import React from "react";
import { useState } from "react";
import useFetchUser from "useFetchUser";

function GithubUser({ user }) {
  const [input, setInput] = useState("")
  const {username, loading, error, fetchUser} = useFetchUser(user)

  function handleInput(e) {
    setInput(e.target.value)
  }

  function searchUser() {
    fetchUser(input)
  }

  return (
    <>
      <input type="text" value={input} onChange={handleInput}/>
      <button onClick={searchUser}>search</button>
      {loading && <h1>loading...</h1>}
      {error && <h1>{error}</h1>}
      {username && <h1>{username}</h1>}
    </>
  );
}

export default GithubUser;
