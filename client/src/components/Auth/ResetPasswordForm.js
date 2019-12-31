import React, { useState } from 'react';
import { resetPassword } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// props.match.params.id
function ResetPassword({
	resetPassword,
	match: {
		params: { token },
	},
}) {
	const [password, setPassword] = useState('');
	const handleChange = e => {
		setPassword(e.target.value);
	};
	const handleSubmit = e => {
		e.preventDefault();
		const data = {
			resetPasswordLink: token,
			newPassword: password,
		};
		resetPassword(data);
	};
	return (
		<div>
			<form onSubmit={handleSubmit} noValidate>
				<div className='form-group pt-5'>
					<input
						type='password'
						name='password'
						onChange={handleChange}
						className='form-control'
						value={password}
						placeholder='Type your password'
						required
					/>
				</div>
				<div>
					<button className='btn btn-primary'>Submit</button>
				</div>
			</form>
		</div>
	);
}

export default connect(null, { resetPassword })(withRouter(ResetPassword));
