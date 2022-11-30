import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function GithubUser({ username }) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    setError(null)
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Non sono riuscito a trovare nessun account");
        }
        return response.json();
      })
      .then((json) => {
        setLoading(false);
        setName(json.login);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [username]);

  return (
    <>
      {loading && <h1>Loading...</h1> }
      {error && <h1>{error.message}</h1> }
      {name && <h1>{name}</h1> }
    </>
  )
}

export default GithubUser;
