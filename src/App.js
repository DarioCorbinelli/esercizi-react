import React from "react";
import Container from "./Container";
export default class App extends React.Component {
  render() {
    return (
      <Container title={ <h1>Questo è il titolo passato tramite prop</h1> }>
        <h3>Secondo child el</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, amet ipsum! Minima, vero odio totam illo aspernatur accusamus saepe cupiditate alias, ipsum asperiores sed repellendus molestias iste soluta! Eligendi, consequatur?</p>
      </Container>
    )
  }
}