import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import store from './store/store';

import './App.css';
import Signup from './components/Auth/Signup';
import Signin from './components/Auth/Signin';
import Navbar from './components/Nav/Navbar';
import Alert from './components/Alert/Alert';
import { setCurrentUser, signout } from './store/actions/authActions';
import Auth from './components/PrivateRoute/PrivateRoute';
import ContactForm from './components/Contact./ContactForm';
import ResetPassword from './components/Auth/ResetPassword';
import ResetPasswordForm from './components/Auth/ResetPasswordForm';
import AccountActivate from './components/Auth/AccountActivate';
// import Home from './components/Home/Home';
// import Private from './components/PrivateRoute/Private';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import PublicRoute from './components/PrivateRoute/PublicRoute';

if (localStorage.token) {
	store.dispatch(setCurrentUser());
	const decoded = jwt_decode(localStorage.token);
	console.log(decoded);
	// Check for expired token
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		// Logout user
		store.dispatch(signout());
		// Redirect to login
		window.location.href = '/signin';
	}
}

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div>
					<Navbar />
					<Alert componentType='allOverComponent' />
					<Switch>
						<Route exact path='/signup' component={Auth(Signup, false)} />
						<Route exact path='/signin' component={Auth(Signin, false)} />
						<Route exact path='/contact' component={Auth(ContactForm, null)} />
						<Route
							path='/auth/password/reset/:token'
							exact
							component={Auth(ResetPasswordForm, false)}
						/>
						<Route
							path='/auth/account/activate/:token'
							exact
							component={Auth(AccountActivate, false)}
						/>
						<Route
							path='/reset-password'
							exact
							component={Auth(ResetPassword, false)}
						/>
						{/* <PrivateRoute path='/' exact component={Home} />
						<PublicRoute
							// {...props}
							restricted={true}
							path='/signin'
							exact
							component={Signin}
						/>
						<PublicRoute
							// {...props}
							restricted={true}
							path='/signup'
							exact
							component={Signup}
						/> */}
					</Switch>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
