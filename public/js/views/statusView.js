var soliloquy = window.soliloquy || {};
soliloquy.StatusView = Backbone.View.extend({

	events: { 'submit': 'onStatusSubmit' },

	initialize: function () {
		this.template = _.template($("#status-template").text());

		this.adModel = new soliloquy.AdModel();
		this.adModel.on('change', this.interleaveAds, this);

		this.collection.on('add', this.writeStatus, this);
 		this.collection.on('reset', this.writeAllStatus, this);
 		this.collection.fetch({ reset: true })
 			.then(function () {
 				this.adModel.fetch();
 			}.bind(this));
	},

	onStatusSubmit: function (e) {
		e.preventDefault();
		this.collection.create({ text: this.$('textarea').val() });
		return false;
	},

	writeStatus: function (model) {
		this.$('textarea').val('');
		var m = this.formatStatus(model);
		this.$('#statuses').append(this.template(m));
	},

	writeAllStatus: function (collection) {
		collection.each(this.writeStatus, this);
	},

	interleaveAds: function () {
		var currentHeight = 0;
		var adHeightInterval = 500;
		var statusList = this.$("#statuses");

		statusList.find("li").each(function (index, el) {
		  currentHeight = currentHeight + el.offsetHeight;
		  if (currentHeight >= adHeightInterval) {
		  	currentHeight = 0;
		  	var m = this.formatStatus(this.adModel);
		  	$(el).after(this.template(m));
		  }
		}.bind(this));
	},

	formatStatus: function(status) {
		var m = status.toJSON();
  	m.timestamp = m.timestamp ? moment(m.timstamp).fromNow() : null;
  	return m;
	}

});
