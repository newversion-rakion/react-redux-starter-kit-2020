import { FETCH_TODOS } from 'types';

const initialState = {
  todoList: []
}

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todoList: action.payload
      }
    default:
      return state
  }
}
