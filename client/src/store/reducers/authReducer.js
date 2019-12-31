import { SIGN_IN_USER, LOGOUT_USER, SET_CURRENT_USER } from '../actions/types';

const initialState = {
	isAuthenticated: false,
	user: {},
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGN_IN_USER:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload,
			};
		case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload,
			};
		case LOGOUT_USER:
			return {
				...state,
				isAuthenticated: false,
				user: {},
			};
		default:
			return state;
	}
};

export default authReducer;
