import React from "react";
import ReactDOM from "react-dom/client";

class Age extends React.Component {
  render() {
    return this.props.age >= 18 && <p>Your age is {this.props.age}</p>
  }
}
class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.name || "utenteeee"}!!!</h1>
        <Age age="19" />
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return <Welcome name={<strong>Dario</strong>}/>
  }
}

ReactDOM.createRoot(document.querySelector(".app")).render(<App />)