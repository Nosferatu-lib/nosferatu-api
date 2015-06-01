var _    = require('lodash');
var capi = require('./capi');
var auth = require('../utils/auth');

var server = {}

function Routes() {}

// Get server instance and fetch routes
Routes.prototype.set = function(inst) {
	server = inst;
	this.fetchRoutes();
};

// Go through content API routes
Routes.prototype.fetchRoutes = function() {
	_.forEach(capi, function(obj, route) {
		_.forEach(obj, function(fn, request) {
			server[request](route, auth.isAuthenticated, fn);
		}.bind(this));
	}.bind(this));
};

module.exports = new Routes();