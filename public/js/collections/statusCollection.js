var soliloquy = window.soliloquy || {};
soliloquy.StatusCollection = Backbone.Collection.extend({
	url: '/api/status/',
	model: soliloquy.StatusModel
});
