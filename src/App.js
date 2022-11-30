import Coutner from "Counter";
import GithubUserList from "GithubUserList";
import NotFound from "NotFound";
import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import ShowGithubUser from "ShowGithubUser";
import Welcome from "Welcome";

function App() {
  return (
    <>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <ul>
          <li><NavLink to="/counter">Counter</NavLink></li>
          <li><NavLink to="/users">User</NavLink></li>
        </ul>
      </ul>
      <Routes>
        <Route path="/">
          <Route index element={<Welcome name="Dario"/>}/>
          <Route path="counter" element={<Coutner initValue={20}/>}/>
          <Route path="users">
            <Route index element={<GithubUserList />}/>
            <Route path=":user" element={<ShowGithubUser />}/>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />}/>

      </Routes>
    </>
  );
}

export default App;
