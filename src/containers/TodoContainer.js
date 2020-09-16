import { addTodo, deleteTodo } from 'actions/todoActions';
import { connect } from 'react-redux';
import AddTodoForm from 'routes/AddTodoForm';

const mapStateToProps = state => ({
  todoList: state.todoReducer.todoList
})

const mapDispatchToProps = {
  addTodo,
  deleteTodo
}

const ToDoContainer = connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)

export default ToDoContainer
