(function () {
  "use strict";

  var soliloquy = window.soliloquy = window.soliloquy || {};
  soliloquy.AddStatementView = Backbone.View.extend({

    events: {
      "submit": "onStatementSubmit",
      "click .js-start-monkeys": "onStartMonkeys",
      "click .js-stop-monkeys": "onStopMonkeys"
    },

    initialize: function () {
      this.$textArea = this.$("textarea");
    },

    onStatementSubmit: function (e) {
      this.collection.create({
        text: this.$textArea.val()
      });
      this.$textArea.val("");

      console.log("statement added");

      e.preventDefault();
      return false;
    },

    onStartMonkeys: function () {
      this.collection.startMonkeys();
    },

    onStopMonkeys: function () {
      this.collection.stopMonkeys();
    }

  });

})();