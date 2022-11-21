import React from "react";

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      checked: false,
    }
  }

  handleInputsChanges = (e) => {
    const name = e.target.name
    const type = e.target.type
    const value = e.target.value
    const checked = e.target.checked

    this.setState({
      [name]: type === "checkbox" ? checked : value
    })
  }

  onLogin = () => {
    console.log(this.state)
  }
  
  render() {
    return (
      <>
        <input type="text" name="username" value={this.state.username} onChange={this.handleInputsChanges}/>
        <input type="password" name="password" value={this.state.password} onChange={this.handleInputsChanges}/>
        <input type="checkbox" name="checked" value={this.state.checked} onChange={this.handleInputsChanges}/>
        <button disabled={!this.state.username || !this.state.password} onClick={this.onLogin}>Login</button>
      </>
    )
  }
}