import React from "react";
import Sum from "./Sum";


export default class App extends React.Component {
  render() {
    return <Sum numbers={[1, 2]} />
  }
}