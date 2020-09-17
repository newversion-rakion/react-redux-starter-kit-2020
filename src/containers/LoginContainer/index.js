import { connect } from 'react-redux';
import Login from 'routes/Login';

const mapStateToProps = state => ({
  todoList: state.todoReducer.todoList
})

const mapDispatchToProps = {
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginContainer
