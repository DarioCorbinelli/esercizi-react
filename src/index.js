import React from "react";
import ReactDOM from "react-dom/client";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.name || "utenteeee"}!!!</h1>
        { this.props.age && <p>Your age is {this.props.age}</p> }
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return <Welcome name="Dario" age="24"/>
  }
}

ReactDOM.createRoot(document.querySelector(".app")).render(<App />)