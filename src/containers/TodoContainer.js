import { fetchTodos } from 'actions/todoActions';
import { connect } from 'react-redux';
import TodoList from 'routes/TodoList';

const mapStateToProps = state => ({
  todoList: state.todoReducer.todoList
})

const mapDispatchToProps = {
  fetchTodos
}

const ToDoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default ToDoContainer
