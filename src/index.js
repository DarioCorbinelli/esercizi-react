import React from "react";
import ReactDOM from "react-dom/client";

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <p>What a beautiful day!</p>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
      </div>
    )
  }
}

ReactDOM.createRoot(document.querySelector(".app")).render(<App />)