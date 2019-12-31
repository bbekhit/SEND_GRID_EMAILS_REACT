import { GET_ERROR, CLEAR_ERROR } from '../actions/types';

const initialState = '';

const errorReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ERROR:
			return action.payload;
		case CLEAR_ERROR:
			return '';
		default:
			return state;
	}
};

export default errorReducer;
