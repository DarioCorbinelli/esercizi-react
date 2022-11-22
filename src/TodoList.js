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

  handleSubmit = (e) => {
    e.preventDefault()
    
    this.setState(state => ({
      items: [...state.items, <li key={state.items.length + 1}>{state.input}</li>],
      input: ""
    }))
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.input} onChange={this.handleInput}/>
          <button type="submit">Add todo</button>
        </form>
        <ul>
          {this.state.items}
        </ul>
      </>
    )
  }
}