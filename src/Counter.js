import React from "react";
import CounterDisplay from "./CounterDisplay.js"

export default class Counter extends React.Component {
  state = {
    count: this.props.initialValue
  }

  constructor(props) {
    super(props)
    
    setInterval(() => {
      this.setState(state => {
        return {
          count: state.count + this.props.incrementAmount
        }
      })
    }, this.props.interval)
  }

  render() {
    return <CounterDisplay count={this.state.count}/>
  }
}

Counter.defaultProps = {
  initialValue: 0,
  incrementAmount: 1,
  interval: 1000
}