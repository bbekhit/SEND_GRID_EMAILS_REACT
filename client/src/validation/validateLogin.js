const validateLogin = (email, password) => {
	let errors = {};

	//  validate email
	if (typeof email !== 'undefined') {
		//regular expression for email validation
		if (
			!email.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
		) {
			errors.email = '*Please enter valid email';
		}
	}
	if (!email) {
		errors.email = '*This field is required';
	}

	// Validate Password
	if (typeof password !== 'undefined') {
		if (!password.match(/^[a-zA-Z0-9]{6,}$/)) {
			errors.password = '*Password at least 6 characters';
		}
	}
	if (!password) {
		errors.password = '*Please enter your password.';
	}

	return errors;
};

export default validateLogin;
