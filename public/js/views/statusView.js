window.views.StatusView = Backbone.View.extend({

	events: {
		'submit': 'onStatusSubmit'
	},

	initialize: function () {
		this.collection.on('add', this.renderStatus, this);
		this.collection.on('reset', this.renderStatuses, this);
		this.collection.fetch();
	},

	onStatusSubmit: function (e) {
		e.preventDefault();
		this.collection.create({ text: this.$('textarea').val() });
		this.$('textarea').val('');
		return false;
	},

	renderStatus: function (model) {
		this.$('#statuses').append('<li class="status">' + model.get('text') + '</li>');
	},

	renderStatuses: function (collection) {
		collection.each(this.renderStatus, this);
	}

});