import useSWR from "swr";

function fetcher(url) {
  if (url) {return fetch(url).then(response => {
    if (response.status !== 200) throw new Error()
    return response.json()
  })}
}

function useGithubUserFetcher(username) {
  const {data, error} = useSWR(`https://api.github.com/users/${username}`, fetcher )

  return {data, error};
}

export default useGithubUserFetcher;