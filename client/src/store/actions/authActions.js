import { LOGOUT_USER, SET_CURRENT_USER, GET_ERROR } from './types';
import axios from 'axios';
import { setAlert } from './alertActions';

export const preSignup = (data, history) => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const body = JSON.stringify(data);
	try {
		const res = await axios.post('/api/v1/auth//pre-signup', body, config);
		return dispatch(setAlert(res.data.message, 'success', 'allOverComponent'));
	} catch (err) {
		console.log(err);
	}
};

export const signup = (data, history) => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const body = JSON.stringify(data);
	try {
		const res = await axios.post('/api/v1/auth/signup', body, config);
		dispatch(setAlert(res.data.message, 'success', 'allOverComponent'));
		// return history.push('/signin');
	} catch (err) {
		let error = err.response.data.error;
		if (error) {
			dispatch(setAlert(error, 'danger', 'signupComponent'));
		}
		dispatch({
			type: GET_ERROR,
			payload: error,
		});
	}
};

export const signin = data => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const body = JSON.stringify(data);
	try {
		const res = await axios.post('/api/v1/auth/signin', body, config);
		const { token } = res.data;
		localStorage.setItem('token', token);
		dispatch(setCurrentUser());
	} catch (err) {
		const error = err.response.data.error;
		if (error) {
			dispatch(setAlert(error, 'danger'));
		}
		dispatch({
			type: GET_ERROR,
			payload: error,
		});
	}
};

export const signout = history => dispatch => {
	localStorage.removeItem('token');
	dispatch({
		type: LOGOUT_USER,
	});
	window.location.href = '/signin';
};

export const setCurrentUser = () => async dispatch => {
	let token = localStorage.getItem('token');
	const config = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: token,
		},
	};
	try {
		const res = await axios.get('/api/v1/auth/currentUser', config);
		const { user } = res.data;
		dispatch({
			type: SET_CURRENT_USER,
			payload: user,
		});
	} catch (err) {
		const error = err.response.data.error;
		if (error) {
			dispatch(setAlert(error, 'danger'));
		}
		dispatch({
			type: GET_ERROR,
			payload: error,
		});
	}
};

export const signinWithGoogle = data => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const body = JSON.stringify(data);
	try {
		const res = await axios.post('/api/v1/auth/google-login', body, config);
		const { token } = res.data;
		localStorage.setItem('token', token);
		if (localStorage.setItem) {
			dispatch(setCurrentUser());
		}
	} catch (err) {
		const error = err.response.data.error;
		if (error) {
			dispatch(setAlert(error, 'danger'));
		}
		dispatch({
			type: GET_ERROR,
			payload: error,
		});
	}
};

export const forgotPassword = email => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const body = JSON.stringify(email);
	try {
		const res = await axios.put('/api/v1/auth/forgot-password', body, config);
		return dispatch(setAlert(res.data.message, 'success', 'allOverComponent'));
	} catch (err) {
		const error = err.response.data.error;
		if (error) {
			dispatch(setAlert(error, 'danger', 'allOverComponent'));
		}
	}
};

export const resetPassword = resetInfo => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const body = JSON.stringify(resetInfo);
	try {
		const res = await axios.put('/api/v1/auth/reset-password', body, config);
		return dispatch(setAlert(res.data.message, 'success', 'allOverComponent'));
	} catch (err) {
		const error = err.response.data.error;
		if (error) {
			dispatch(setAlert(error, 'danger', 'allOverComponent'));
		}
	}
};
// export const loginWithGoogle = user => {
// 	return fetch(`${API}/google-login`, {
// 		method: 'POST',
// 		headers: {
// 			Accept: 'application/json',
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify(user),
// 	})
// 		.then(response => {
// 			return response.json();
// 		})
// 		.catch(err => console.log(err));
// };
