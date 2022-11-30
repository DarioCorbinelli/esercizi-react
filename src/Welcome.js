import React from "react";
import Age from "./Age.js"

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.name || "utenteeee"}!!!</h1>
        <Age age={this.props.age} />
      </div>
    )
  }
}