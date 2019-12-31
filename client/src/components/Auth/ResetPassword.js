import React, { useState } from 'react';
import { forgotPassword } from '../../store/actions/authActions';
import { connect } from 'react-redux';

function ResetPassword({ forgotPassword }) {
	const [email, setEmail] = useState('');
	const handleChange = e => {
		setEmail(e.target.value);
	};
	const handleSubmit = e => {
		e.preventDefault();
		forgotPassword({ email });
	};
	return (
		<div>
			<form onSubmit={handleSubmit} noValidate>
				<div className='form-group pt-5'>
					<input
						type='email'
						name='email'
						onChange={handleChange}
						className='form-control'
						value={email}
						placeholder='Type your email'
						required
					/>
				</div>
				<div>
					<button className='btn btn-primary'>Send password reset link</button>
				</div>
			</form>
		</div>
	);
}

export default connect(null, { forgotPassword })(ResetPassword);
