import React from "react";
import Welcome from "./Welcome.js"

export default class App extends React.Component {
  render() {
    return <Welcome name={<strong>Dario</strong>} age={17}/>
  }
}