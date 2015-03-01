(function () {
  "use strict";

  var soliloquy = window.soliloquy = window.soliloquy || {};
  soliloquy.AddStatementView = Backbone.View.extend({

    events: {
      "submit": "onStatementSubmit",
      "click .js-random": "onRandom",
      "click .js-start-monkeys": "onStartMonkeys",
      "click .js-stop-monkeys": "onStopMonkeys"
    },

    initialize: function () {
      this.$textArea = this.$("textarea");
    },

    onStatementSubmit: function (e) {
      this.collection.create({
        text: this.$textArea.val(),
        image: soliloquy.profile.get("image")
      });
      // this.collection.createFromText(this.$textArea.val());
      this.$textArea.val("");

      e.preventDefault();
      return false;
    },

    onRandom: function () {
      this.collection.createRandom();
    },

    onStartMonkeys: function () {
      this.collection.startMonkeys();
    },

    onStopMonkeys: function () {
      this.collection.stopMonkeys();
    }

  });

})();