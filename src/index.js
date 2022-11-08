import React from "react";
import ReactDOM from "react-dom/client";

function Sum(props) {
  return <h2>{props.first + props.second}</h2>
}

ReactDOM.createRoot(document.querySelector(".app")).render(<Sum first={5} second={4}/>)