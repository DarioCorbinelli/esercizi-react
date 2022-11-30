import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function GithubUserList() {
  const [user, setUser] = useState("");
  const [users, setUsers] = useState([]);
  
  function handleInput(e) {
    setUser(e.target.value);
  }
  
  function handleSearch() {
    setUsers((users) => [...users, user]);
    setUser("");
  }

  return (
    <>
      <h1>Add a user and select it</h1>
      <input type="text" name="user" value={user} onChange={handleInput} />
      <button onClick={handleSearch}>search</button>
      <ul>
        {users.map((user, key) => <li key={key}><NavLink to={`/users/${user}`}>{user}</NavLink></li> )}
      </ul>
    </>
  );
}

export default GithubUserList;
