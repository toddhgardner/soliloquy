var soliloquy = window.soliloquy || {};
soliloquy.AdModel = Backbone.Model.extend({

  idAttribute: "_id",
  url: "/api/ad/inline"

});
