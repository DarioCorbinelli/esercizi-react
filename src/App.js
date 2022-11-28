// Modify the TodoList component so that, instead of rendering the items array within the ul tag, it calls the function passed to its render prop, passing it the items array as a parameter, as well as the function required to delete the item. Pass a render prop to the TodoList component to correctly render and interact with the items array.

import React from "react";
import TodoList from "TodoList";

export default class App extends React.Component {
  render() {
    return <TodoList render={(array) => {
      return array.map(todo => <li>{todo}</li>)
    }}/>;
  }
}
