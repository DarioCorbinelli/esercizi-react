import React from "react";
import Welcome from "./Welcome";

export default class InteractiveWelcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
  }

  updateName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  
  render() {
    return (
      <>
        <input type="text" onChange={this.updateName}/>
        <Welcome name={this.state.name}/>
      </>
    )
  }
}