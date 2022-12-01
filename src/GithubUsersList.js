import GithubUser from "GithubUser";
import React from "react";
import { useState } from "react";

function GithubUsersList() {
  const [input, setInput] = useState("")
  const [user, setUser] = useState("")

  function handleSearch(e) {
    e.preventDefault()
    setUser(input)
    setInput("")
  }

  return (
    <>
      <form>
        <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
        <button type="submit" onClick={handleSearch}>Cerca</button>
      </form>
      {user && <GithubUser username={user}/>}
    </>
  );
}

export default GithubUsersList;
