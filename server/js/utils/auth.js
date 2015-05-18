var passport      = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;

// This needs some addational logic. Sync with DB or place behind private repository.
var user = {
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

exports.isAuthenticated = passport.authenticate('basic', { session : false });