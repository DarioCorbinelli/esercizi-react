import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { decrement, increment, reset } from 'state/counterState';
import store from 'state/store';

// ReactDOM
//   .createRoot(document.querySelector(".app"))
//   .render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   )

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(increment(5))
store.dispatch(decrement(2))
store.dispatch(decrement(1))
store.dispatch(reset())