import { FETCH_TODOS } from 'types';

export function fetchTodos() {
  return (dispatch) => {
    fetch('https://jsonplaceholder.cypress.io/todos')
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: FETCH_TODOS,
          payload: data
        })
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}
