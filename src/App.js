import Counter from "Counter";
import React from "react";

export default class App extends React.Component {
  state = {
    toggleCounter: true,
  };

  handleToggle = () => {
    this.setState(state => {
      return {
        toggleCounter: !state.toggleCounter
      }
    })
  }

  render() {
    return (
      <>
        <button onClick={this.handleToggle}>toggle counter</button>
        {this.state.toggleCounter && <Counter />}
      </>
    );
  }
}
