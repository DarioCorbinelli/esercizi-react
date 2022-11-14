import React from "react";

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome {this.props.name || "utenteeee"}!!!</p>
        { this.props.age && <p>Your age is {this.props.age}</p> }
      </div>
    )
  }
}