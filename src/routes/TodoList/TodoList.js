import Header from 'components/Header';
import React, { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
const TodoList = props => {
  useEffect(() => {
    props.fetchTodos();
  }, [])
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Todo List</h2>
            <ListGroup>
              {props.todoList.map(todo =>
                <ListGroup.Item key={todo.id}>
                  {todo.title}
                </ListGroup.Item>)
              }
            </ListGroup>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoList
