import controller from '../controllers/controller';

const routes = {	
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

export default controller;