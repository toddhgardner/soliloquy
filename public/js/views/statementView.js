(function () {
  "use strict";

	var soliloquy = window.soliloquy = window.soliloquy || {};
	soliloquy.StatementItemView = Backbone.View.extend({

		events: {
			"click .js-delete": "onDelete"
		},

		template: _.template($("#js-tpl-statement").text()),

		initialize: function () {
			this.model.on("change", this.render, this);
		},

		render: function () {
			this.$el.html(this.template(this.format(this.model)));
			return this;
		},

		format: function (model) {
			var formatted = model.toJSON();
	  	formatted.timestamp = moment(formatted.timestamp).fromNow();
	  	return formatted;
		},

		onDelete: function (e) {
			this.model.destroy();
			this.remove();
		}

	});

	soliloquy.StatementListView = Backbone.View.extend({

		events: {},

		initialize: function () {
			this.statementItemViews = [];
			this.$statementList = this.$("ul.statement-list");
			this.collection.on("reset", this.render, this);
			this.collection.on("add", this.renderStatement, this);
		},

		render: function () {
			this.$statementList.html("");
			this.collection.each(this.renderStatement, this);
			return this;
		},

		renderStatement: function (model) {
			var view = new soliloquy.StatementItemView({
				model: model
			});
			this.$statementList.prepend(view.render().$el);
		}

	});

})();