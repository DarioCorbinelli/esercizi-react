import React from "react";

export default class UncontrolledLogin extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()

    const username = e.target.elements.username.value
    const password = e.target.elements.password.value
    const checkbox = e.target.elements.checkbox.checked

    console.log({
      username: username,
      password: password,
      checkbox: checkbox
    })
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username"/>
        <input type="password" name="password"/>
        <input type="checkbox" name="checkbox"/>
        <button type="submit">Login</button>
        <button type="reset">Reset</button>
      </form>
    )
  }
}