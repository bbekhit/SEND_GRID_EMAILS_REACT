import { combineReducers } from 'redux';
import alert from './alertReducer';
import auth from './authReducer';
import error from './errorReducer';

export default combineReducers({
	alert,
	auth,
	error,
});
