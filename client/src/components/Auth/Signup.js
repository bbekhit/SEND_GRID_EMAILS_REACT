import React, { useState } from 'react';
import { signup, preSignup } from '../../store/actions/authActions';
import { removeAlert } from '../../store/actions/alertActions';
import { connect } from 'react-redux';
import Alert from '../Alert/Alert';
import { withRouter } from 'react-router-dom';

const Signup = ({ signup, preSignup, history, error }) => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		error: {},
	});
	const { email, password } = formData;
	const onChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const onSubmit = async e => {
		e.preventDefault();
		let userData = { email, password };
		await preSignup(userData, history);

		setFormData({
			email: '',
			password: '',
		});

		history.push('/signin');
	};
	return (
		<div className='container'>
			<div className='m-3'>
				<h2 className='mt-5 mb-5'>Signup</h2>
				<Alert componentType='signupComponent' />
				<form onSubmit={onSubmit} noValidate>
					<div className='form-group'>
						<label className='text-muted'>Email</label>
						<input
							onChange={onChange}
							type='email'
							className='form-control'
							value={email || ''}
							name='email'
						/>
					</div>
					<div className='form-group'>
						<label className='text-muted'>Password</label>
						<input
							onChange={onChange}
							type='password'
							className='form-control'
							value={password || ''}
							name='password'
						/>
					</div>
					<button type='submit' className='btn btn-raised btn-primary'>
						Submit
					</button>
				</form>
			</div>
			<div
				className='d-flex justify-content-between w-50'
				style={{ border: '2px solid black', margin: '20px auto' }}
			>
				<div
					style={{
						width: '200px',
						height: '200px',
						margin: ' 200px auto',
						border: '2px solid red',
					}}
					data-aos='fade-right'
					data-aos-duration='1000'
				>
					Test
				</div>
				<div
					style={{
						width: '200px',
						height: '200px',
						margin: ' 200px auto',
						border: '2px solid red',
					}}
					data-aos='fade-left'
					data-aos-duration='1000'
				>
					Test
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	auth: state.auth,
	error: state.error,
});

export default connect(mapStateToProps, { signup, preSignup, removeAlert })(
	withRouter(Signup)
);
