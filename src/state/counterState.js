const defaultValue = 0

const INCREMENT = "COUNTER@INCREMENT"
const DECREMENT = "COUNTER@DECREMENT"
const RESET = "COUNTER@RESET"

export function increment(payload) {
  return {
    type: INCREMENT,
    payload: payload
  }
}

export function decrement(payload) {
  return {
    type: DECREMENT,
    payload: payload
  }
}

export function reset() {
  return {
    type: RESET,
  }
}

export default function counterReducer(state = defaultValue, action) {
  switch (action.type) {
    case INCREMENT: {
      return state + action.payload
    }
    case DECREMENT: {
      return state - action.payload
    }
    case RESET: {
      return defaultValue
    }
    default: {
      return state
    }
  }
}