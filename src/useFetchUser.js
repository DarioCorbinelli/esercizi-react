import { useState } from "react";

function useFetchUser(user) {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchUser(username) {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.status !== 200) {
        throw new Error("Qualcosa è andato storto");
      }

      const json = await response.json();
      setLoading(false);
      setUsername(json.login);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }
  
  return {username, loading, error, fetchUser};
}

export default useFetchUser;