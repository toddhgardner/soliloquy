(function () {
  "use strict";

  var soliloquy = window.soliloquy = window.soliloquy || {};
  soliloquy.AdModel = Backbone.Model.extend({

    idAttribute: "_id",
    url: "/api/ad/inline"

  });

})();
