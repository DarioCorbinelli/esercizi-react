import React from "react";

export default class ClickTracker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  trackBtnClicked = (e) => {
    this.setState({
      lastBtnClicked: e.currentTarget.innerHTML
    })
  }
  
  render() {
    return (
      <>
        <button onClick={this.trackBtnClicked}>Button 1</button>
        <button onClick={this.trackBtnClicked}>Button 2</button>
        <button onClick={this.trackBtnClicked}>Button 3</button>
        <h1>{this.state.lastBtnClicked}</h1>
      </>
    )
  }
}