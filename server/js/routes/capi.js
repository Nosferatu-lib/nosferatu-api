var controller = require('../controllers/controller');

var routes = {	
	'/item': {
		post: controller.postItem
	},
	'/items': {
		get: controller.getItem
	},
	'/item/:id': {
		get: controller.getItem,
		put: controller.putItem,
		del: controller.deleteItem
	}
};

module.exports = routes;