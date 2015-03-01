(function () {
  "use strict";

  var soliloquy = window.soliloquy = window.soliloquy || {};
  soliloquy.ProfileModel = Backbone.Model.extend({

    idAttribute: "_id",

    url: "/api/profile"

  });

})();