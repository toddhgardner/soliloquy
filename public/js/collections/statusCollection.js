define(['models/statusModel'], function(StatusModel) {
	var StatusCollection = Backbone.Collection.extend({
		url: '/api/status/',
		model: StatusModel
	});
	return StatusCollection;
});