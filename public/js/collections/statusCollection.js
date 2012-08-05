window.collections.StatusCollection = Backbone.Collection.extend({
	url: '/soliliquy/api/status/',
	model: window.models.StatusModel
});