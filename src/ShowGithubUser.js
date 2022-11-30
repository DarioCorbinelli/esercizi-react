import GithubUser from "GithubUser";
import React from "react";
import { useParams } from "react-router-dom";

function ShowGithubUser() {
  const path = useParams();
  return <GithubUser username={path.username} />;
}

export default ShowGithubUser;
