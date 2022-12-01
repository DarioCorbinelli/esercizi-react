import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { decrement, increment, reset } from 'state/counterState';
import store from 'state/store';
import { add, edit, resetTodos } from 'state/todosState';

// ReactDOM
//   .createRoot(document.querySelector(".app"))
//   .render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   )

store.subscribe(() => {
  console.log(store.getState().counter, store.getState().todos);
})

store.dispatch(increment(5))
store.dispatch(add(1, "il primo titolo", false))
store.dispatch(edit(1, "il titolo modificato", true))
store.dispatch(resetTodos())