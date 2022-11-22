import React from "react";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      items: []
    }
  }
  
  handleInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit = () => {
    this.setState(state => ({
      items: [...state.items, <li key={state.items.length + 1}>{state.input}</li>]
    }))
  }

  render() {
    return (
      <>
        <input type="text" value={this.state.input} onChange={this.handleInput}/>
        <button onClick={this.handleSubmit}>Add todo</button>
        <ul>
          {this.state.items}
        </ul>
      </>
    )
  }
}