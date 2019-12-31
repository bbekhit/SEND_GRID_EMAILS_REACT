import React from 'react';
import GoogleLogin from 'react-google-login';
import { signinWithGoogle } from '../../store/actions/authActions';
import { removeAlert } from '../../store/actions/alertActions';
import { connect } from 'react-redux';

const GoogleLoginComponent = ({ signinWithGoogle, removeAlert }) => {
	const responseGoogle = response => {
		// console.log(response);
		const tokenId = response.tokenId;
		const user = { tokenId };
		signinWithGoogle(user);
		removeAlert();
	};
	return (
		<div>
			<div className='container'>
				<GoogleLogin
					clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
					// 679380407525-2cvoah9gpsjjffc5k1p6atahhf2vqfl4.apps.googleusercontent.com
					buttonText='Login with Google'
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
				/>
			</div>
		</div>
	);
};

export default connect(null, { signinWithGoogle, removeAlert })(
	GoogleLoginComponent
);
