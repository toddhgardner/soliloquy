define(['js/models/statusModel'], function(StatusModel) {
	var StatusCollection = Backbone.Collection.extend({
		url: '/soliloquy/api/status/',
		model: StatusModel
	});
	return StatusCollection;
});