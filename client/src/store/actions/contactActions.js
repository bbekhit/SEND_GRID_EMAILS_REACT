import axios from 'axios';
import { setAlert } from './alertActions';

export const emailContactForm = data => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const body = JSON.stringify(data);
	try {
		const res = await axios.post('/api/v1/contact/contact', body, config);
		dispatch(setAlert(res.data.message, 'success', 'ContactComponent'));
	} catch (err) {
		let error = err.response.data.error;
		if (error) {
			dispatch(setAlert(error, 'danger', 'ContactComponent'));
		}
	}
};
