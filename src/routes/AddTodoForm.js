import React from 'react';
import { Button, Form, InputGroup, ListGroup } from 'react-bootstrap';

const AddTodoForm = props => {
  let input;
  return (
    <div className="row">
      <div className="col-md-6">
        <Form
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            props.addTodo(input.value);
            input.value = '';
          }}
        >
          <Form.Group controlId="formBasicEmail">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Enter an item"
                ref={node => {
                  input = node;
                }}
              />
              <InputGroup.Append>
                <Button type="submit">Add To-Do</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form>

        <ListGroup>
          {props.todoList.map(todo =>
            <ListGroup.Item key={todo._id} onClick={() => props.deleteTodo(todo._id)}>
              {todo.title}
            </ListGroup.Item>)
          }
        </ListGroup>
      </div>
    </div>
  )
}

export default AddTodoForm
