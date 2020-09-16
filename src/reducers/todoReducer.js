import { ADD_TODO, DELETE_TODO } from 'types';

const initialState = {
  todoList: []
}

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          action.payload
        ],
      }
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo._id !== action.payload._id),
      }
    default:
      return state
  }
}
