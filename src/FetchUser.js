import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function FetchUser({ username }) {
  const [url, setUrl] = useState("")

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(json => setUrl(json.url))
  }, [])
  
  return (
    <>
      <h1>Dopo di me ci sarà l'user...</h1>
      {url && <p>Mi puoi trovare qua: {url}</p> }
    </>
  );
}

export default FetchUser;
