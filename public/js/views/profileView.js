(function () {
  "use strict";

  var soliloquy = window.soliloquy = window.soliloquy || {};
  soliloquy.ProfileView = Backbone.View.extend({

    events: {},

    template: _.template($("#js-tpl-profile").text()),

    initialize: function () {
      this.model.on("change", this.render, this);
      this.model.fetch();
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }

  });

})();