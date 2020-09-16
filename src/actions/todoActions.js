import { ADD_TODO, DELETE_TODO } from 'types';

export function addTodo(title) {
  return {
    type: ADD_TODO,
    payload: {
      _id: (new Date().getTime()),
      title
    }
  }
}

export function deleteTodo(_id) {
  return {
    type: DELETE_TODO,
    payload: {
      _id
    }
  }
}
