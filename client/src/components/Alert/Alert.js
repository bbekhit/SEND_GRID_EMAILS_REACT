import React from 'react';
import { connect } from 'react-redux';

const Alert = props =>
	props.alert !== null &&
	props.alert.componentType === props.componentType && (
		<div
			className={`m-4 alert w-75 mx-auto text-center alert-${props.alert.alertType}`}
		>
			{props.alert.msg}
		</div>
	);

const mapStateToProps = state => ({
	alert: state.alert,
});

export default connect(mapStateToProps)(Alert);
