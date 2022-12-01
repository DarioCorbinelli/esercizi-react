import { combineReducers, createStore } from "redux"
import counterReducer from "./counterState"
import todosReducer from "./todosState"

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer
}) 

export default createStore(rootReducer)