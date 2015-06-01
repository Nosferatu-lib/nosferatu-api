var controllers = {
	// POST endpoint /item
	postItem: function(req, res, next) {
		console.log('POST: ', req.query);
		res.json({
            type: true,
            data: 'Ok'
        });
	},

	// GET endpoint /item:id
	getItem: function(req, res) {
		console.log('GET');
		res.json({'title': 'Test', 'value': req.params.id});
	},

	// PUT endpoint /item:id
	putItem: function(req, res) {
		console.log('PUT', req.params);
		res.json({'title': 'Test', 'value': req.params.id});
	},

	// DELETE endpoint /item:id
	deleteItem: function(req, res) {
		console.log('DELETE', req.params);
		res.json({'title': 'DELETE', 'value': req.params.id});
	},
};

module.exports = controllers;