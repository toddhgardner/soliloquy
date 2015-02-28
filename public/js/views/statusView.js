define(function() {

	var StatusView = Backbone.View.extend({

		events: { 'submit': 'onStatusSubmit' },

		template: _.template($("#status-template").text()),

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
	  		var m = model.toJSON();
	  		m.timestamp = m.timestamp ? moment(m.timstamp).fromNow() : null;
	  		this.$('#statuses').append(this.template(m));
		},

		writeAllStatus: function (collection) {
			collection.each(this.writeStatus, this);
		}

	});

	return StatusView;
});