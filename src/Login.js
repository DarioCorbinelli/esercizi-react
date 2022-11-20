import React from "react";

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      checkbox: false
    }
  }

  handleInputs = (e) => {
    const name = e.target.name
    const value = e.target.value
    const checked = e.target.checked

    this.setState({
      [name]: name === "checkbox" ? checked : value
    })
  }
  
  render() {
    return(
      <>
        <h3>Login:</h3>
        <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleInputs}/>
        <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleInputs}/>
        <input type="checkbox" name="checkbox" onChange={this.handleInputs}/>
      </>
    )
  }
}