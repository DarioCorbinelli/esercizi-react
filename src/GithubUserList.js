import GithubUser from "GithubUser";
import React from "react";
import { useState } from "react";

// non saprei per cosa dover usare lo useEffect...

function GithubUserList() {
  const [usernames, setUsernames] = useState([]);
  const [input, setInput] = useState("")

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleClick = () => {
    input && setUsernames(usernames => [...usernames, <GithubUser key={usernames.length + 1} username={input} /> ])
    setInput("")
  }

  return (
    <>
      <input type="text" value={input} onChange={handleInput}/>
      <button onClick={handleClick} disabled={input ? false : true}>Add</button>
      <h1>Gli username sono...</h1>
      <ul>{usernames}</ul>
    </>
  );
}

export default GithubUserList;
