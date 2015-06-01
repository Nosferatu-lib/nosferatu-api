import passport 	from 'passport';
import passportHttp from 'passport-http';

const {BasicStrategy} = passportHttp;

// This is a very simple strategy. Not recommended for production.
const user = {
	apiKey: '123456',
	apiSecret: 'abcdef'
};

passport.use(new BasicStrategy({
	usernameField: 'apiKey',
	passwordField: 'apiSecret'
	},

	function(username, password, done) {
		if (username !== user.apiKey) {
			return done(null, false, {message: 'Incorrect username.'});
		}

		if (password !== user.apiSecret) {
			return done(null, false, {message: 'Incorrect password.'});
		}

		return done(null, user);
	}
));

export default {
	isAuthenticated: passport.authenticate('basic', { session : false })
}