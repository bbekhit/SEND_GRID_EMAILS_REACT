import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

export default function(Component, reload) {
	const Private = ({ history, auth: { isAuthenticated } }) => {
		const [loading, setLoading] = useState(true);
		useEffect(() => {
			let unmounted = false;
			if (!isAuthenticated) {
				if (reload) {
					history.push('/signin');
				}
			} else {
				if (reload === false) {
					history.push('/');
				}
			}
			setTimeout(() => {
				if (!unmounted) {
					setLoading(false);
				}
			}, 500);

			return () => {
				unmounted = true;
			};
		}, [history, isAuthenticated]);
		if (loading) {
			return null;
		}
		return <Component />;
	};

	const mapStateToProps = state => ({
		auth: state.auth,
	});

	return connect(mapStateToProps)(Private);
}

// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// const PrivateRoute = ({
// 	component: Component,
// 	auth: { isAuthenticated, loading },
// 	...rest
// }) => (
// 	<Route
// 		{...rest}
// 		render={props =>
// 			!isAuthenticated && !loading ? (
// 				<Redirect to='/signin' />
// 			) : (
// 				<Component {...props} />
// 			)
// 		}
// 	/>
// );

// PrivateRoute.propTypes = {
// 	auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = state => ({
// 	auth: state.auth,
// });

// export default connect(mapStateToProps)(PrivateRoute);
