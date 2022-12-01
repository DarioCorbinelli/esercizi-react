const defaultValue = []

const ADD = "TODOS@ADD"
const REMOVE = "TODOS@REMOVE"
const EDIT = "TODOS@EDIT"
const RESET = "TODOS@RESET"

export function add(id, title, completed) {
  return {
    type: ADD,
    payload: {
      id: id,
      title: title,
      completed: completed
    }
  }
}

export function remove(id) {
  return {
    type: REMOVE,
    payload: id
  }
}

export function edit(id, title, completed) {
  return {
    type: EDIT,
    payload: {
      id: id,
      title: title,
      completed: completed
    }
  }
}

export function resetTodos() {
  return {
    type: RESET
  }
}

export default function todosReducer(state = defaultValue, action) {
  switch (action.type) {
    case ADD: {
      return [...state, action.payload]
    }
    case REMOVE: {
      return state.filter(obj => obj.id !== action.payload)
    }
    case EDIT: {
      return state.map(obj => {
        if (obj.id === action.payload.id) return {id: action.payload.id, title: action.payload.title, completed: action.payload.completed}

        return obj
      })
    }
    case RESET: {
      return defaultValue
    }
    default: {
      return state
    }
  }
}