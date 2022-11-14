import React from "react";

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.name || "utenteeee"}!!!</h1>
        { this.props.age && <p>Your age is {this.props.age}</p> }
      </div>
    )
  }
}