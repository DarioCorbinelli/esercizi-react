import React from "react";

export default class ClickCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  
  incrementCounter = () => {
    this.setState(state => {
      return {
        counter: state.counter + 1
      }
    })
  }
  
  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={this.incrementCounter}>Increment</button>
      </>
    )
  }
}