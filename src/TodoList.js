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
      items: [...state.items, <li key={state.items.length + 1} id={state.items.length + 1}>{state.input} <button onClick={this.handleDeleteTodo}>delete</button></li>],
      input: ""
    }))
  }

  handleReset = () => {
    this.setState({
      input: "",
      items: []
    })
  }

  handleDeleteTodo = (e) => {
    this.setState(prevState => {
      const [liToRemove] = prevState.items.filter(item => item.key === e.target.closest("li").id)
      const updatedItems = prevState.items.filter(item => item !== liToRemove)
      
      return {
        items: updatedItems
      }
    })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.input} onChange={this.handleInput}/>
          <button type="submit" disabled={!this.state.input}>Add todo</button>
          <button type="reset" onClick={this.handleReset}>Clear</button>
        </form>
        <ul>
          {this.props.render(this.state.items)}
        </ul>
      </>
    )
  }
}