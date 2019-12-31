import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = null;

const alertReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_ALERT:
			return {
				msg: payload.msg,
				alertType: payload.alertType,
				componentType: payload.componentType,
			};
		case REMOVE_ALERT:
			return null;
		default:
			return state;
	}
};

export default alertReducer;
