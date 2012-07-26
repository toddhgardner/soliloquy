define(function() {

	var StatusView = Backbone.View.extend({

		events: { 'submit': 'onStatusSubmit' },

		initialize: function () {
			this.collection.on('add', this.writeStatus, this);
	 		this.collection.on('reset', this.writeAllStatus, this);
	 		this.collection.fetch();
		},

		onStatusSubmit: function (e) {
			e.preventDefault();
			this.collection.create({ text: this.$('textarea').val() });
			return false;
		},

		writeStatus: function (model) {
	  		this.$('textarea').val('');
	  		this.$('#statuses').append('<li class="status">' + model.get('text') + '</li>');
		},

		writeAllStatus: function (collection) {
			collection.each(this.writeStatus, this);
		}

	});

	return StatusView;
});