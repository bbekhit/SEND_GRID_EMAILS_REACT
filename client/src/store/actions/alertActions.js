import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alertType, componentType) => dispatch => {
	dispatch({
		type: SET_ALERT,
		payload: { msg, alertType, componentType },
	});
	setTimeout(() => dispatch(removeAlert()), 5000);
};

export const removeAlert = () => dispatch => {
	dispatch({
		type: REMOVE_ALERT,
	});
};
