(function () {
  "use strict";

  jQuery(function($) {

    var soliloquy = window.soliloquy = window.soliloquy || {};
    var profile = new soliloquy.ProfileModel();
    var statements = new soliloquy.StatementCollection();

    new soliloquy.ProfileView({
      el: $(".js-main-profile-view"),
      model: profile
    });

    new soliloquy.AddStatementView({
      el: $(".js-add-statement-view"),
      collection: statements
    });

    new soliloquy.StatementListView({
      el: $(".js-statement-view"),
      collection: statements
    });

    statements.fetch({ reset: true });

  });

})();