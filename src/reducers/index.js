import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import todoReducer from './todoReducer';

export default combineReducers({
  todoReducer,
  loginReducer
})
