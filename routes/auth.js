const express = require('express');
const router = express.Router();
const {
	signup,
	signin,
	signout,
	getCurrentUser,
	googleLogin,
	forgotPassword,
	resetPassword,
	preSignup,
} = require('../controllers/auth');
const requireAuth = require('../middleware/requireAuth');
const {
	userSignupValidator,
	forgotPasswordValidator,
	resetPasswordValidator,
} = require('../validators/auth');
const { runValidation } = require('../validators');

router.post('/pre-signup', userSignupValidator, runValidation, preSignup);
router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/signin', signin);
router.get('/signout', signout);
router.get('/currentUser', requireAuth, getCurrentUser);
// google login
router.post('/google-login', googleLogin);
router.put(
	'/forgot-password',
	forgotPasswordValidator,
	runValidation,
	forgotPassword
);
router.put(
	'/reset-password',
	resetPasswordValidator,
	runValidation,
	resetPassword
);
//Test Route
router.get('/secret', requireAuth, (req, res) => {
	res.json({
		message: 'You have access',
	});
});

module.exports = router;
