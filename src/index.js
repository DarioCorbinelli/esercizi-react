import React from "react";
import ReactDOM from "react-dom/client";

function Hello(props) {
  return <h1>Hello {props.name}</h1>
}

ReactDOM.createRoot(document.querySelector(".app")).render(<Hello name="Dario" />)