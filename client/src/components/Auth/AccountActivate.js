import React, { useEffect } from 'react';
import { signup } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';

function AccountActivate({
	signup,
	match: {
		params: { token },
	},
}) {
	useEffect(() => {
		let decoded = jwt.decode(token);
		const { email, password } = decoded;
		signup({ email, password });
	}, [signup, token]);
	return (
		<div>
			Thank you for confirming your account <Link to='/signin'>Sign in</Link>
		</div>
	);
}

export default connect(null, { signup })(withRouter(AccountActivate));
