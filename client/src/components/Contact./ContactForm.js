import React, { useState } from 'react';
import { connect } from 'react-redux';
import { emailContactForm } from '../../store/actions/contactActions';
import Alert from '../Alert/Alert';

const ContactForm = ({ emailContactForm }) => {
	const [values, setValues] = useState({
		message: '',
		name: '',
		email: '',
		buttonText: 'Send Message',
	});

	const { message, name, email, buttonText } = values;

	const clickSubmit = e => {
		e.preventDefault();
		if (!name || !email || !message) {
			return;
		}
		setValues({ ...values, buttonText: 'Sending...' });
		setTimeout(() => {
			emailContactForm({ name, email, message });
			setValues({
				...values,
				name: '',
				email: '',
				message: '',
				buttonText: 'Send Message',
			});
		}, 5000);
	};

	const handleChange = e => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<div className='container'>
			<Alert componentType='ContactComponent' />
			<form onSubmit={clickSubmit} className='pb-5' noValidate>
				<div className='form-group'>
					<label className='lead'>Message</label>
					<textarea
						onChange={handleChange}
						type='text'
						className='form-control'
						value={message}
						required
						rows='10'
						name='message'
					></textarea>
				</div>

				<div className='form-group'>
					<label className='lead'>Name</label>
					<input
						type='text'
						onChange={handleChange}
						className='form-control'
						value={name}
						name='name'
						required
					/>
				</div>

				<div className='form-group'>
					<label className='lead'>Email</label>
					<input
						type='email'
						onChange={handleChange}
						className='form-control'
						value={email}
						required
						name='email'
					/>
				</div>

				<div>
					<button className='btn btn-primary'>{buttonText}</button>
				</div>
			</form>
		</div>
	);
};

export default connect(null, { emailContactForm })(ContactForm);
