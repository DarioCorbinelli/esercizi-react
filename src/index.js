import React from "react";
import ReactDOM from "react-dom/client";

class Welcome extends React.Component {
  render() {
    return <h1>Welcome {this.props.name || "utenteeee"}!!!</h1>
  }
}

class App extends React.Component {
  render() {
    return <Welcome name="Dario" />
  }
}

ReactDOM.createRoot(document.querySelector(".app")).render(<App />)