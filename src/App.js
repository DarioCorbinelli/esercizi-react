import Coutner from "Counter";
import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Welcome from "Welcome";

function App() {
  return (
    <>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <ul>
          <li><NavLink to="/counter">Counter</NavLink></li>
        </ul>
      </ul>
      <Routes>
        <Route path="/">
          <Route index element={<Welcome name="Dario"/>}/>
          <Route path="counter" element={<Coutner initValue={20}/>}/>
        </Route>

      </Routes>
    </>
  );
}

export default App;
