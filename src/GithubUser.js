import React from 'react';
import useGithubUserFetcher from 'useGithubUserFetcher';

function GithubUser({username}) {
  const {data, error} = useGithubUserFetcher(username)

  return ( <>
    {!data && !error && <h1>Loading...</h1> }
    {error && <h1>Qualcosa è andato storto</h1> }
    {data && <h1>{data.login}</h1> }
  </> );
}

export default GithubUser;