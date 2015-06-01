import _    from 'lodash';
import capi from './capi';
import auth from '../utils/auth';

var server = {};

class Routes {
	set(inst) {
		server = inst;
		this.fetchRoutes();
	}

	fetchRoutes() {
		_.forEach(capi, function(obj, route) {
			_.forEach(obj, function(fn, request) {
				server[request](route, auth.isAuthenticated, fn);
			}.bind(this));
		}.bind(this));
	}
}

export default new Routes();