import { combineReducers } from 'redux'
import { authReducer } from './AuthRedux/auth.reducer';
import { todoReducer } from './todoRedux/todo.reducer';

export default combineReducers({
	todo: todoReducer,
	auth: authReducer,
});
