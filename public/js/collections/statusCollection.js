window.collections.StatusCollection = Backbone.Collection.extend({
	url: '/soliloquy/api/status/',
	model: window.models.StatusModel
});