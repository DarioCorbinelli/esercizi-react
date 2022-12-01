import { createStore } from "redux"
import counterReducer from "./counterState"

export default createStore(counterReducer)