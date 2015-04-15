(function () {
  "use strict";

  var soliloquy = window.soliloquy = window.soliloquy || {};
  soliloquy.AddStatementView = Backbone.View.extend({

    events: {
      "submit": "onStatementSubmit",
      "click .js-random": "onRandom"
    },

    initialize: function () {
      this.$textArea = this.$("textarea");
    },

    onStatementSubmit: function (e) {
      var text = this.$textArea.val();
      console.info("adding statement '" + text + "'");
      this.collection.createFromText(text);
      this.$textArea.val("");

      e.preventDefault();
      return false;
    },

    onRandom: function () {
      console.info("adding random statement");
      this.collection.createRandom();
    }

  });

})();