(function () {
  "use strict";

  var soliloquy = window.soliloquy = window.soliloquy || {};
  soliloquy.StatementModel = Backbone.Model.extend({

    idAttribute: "_id",

    validate: function (attrs) {
      if (attrs.text.length > 140) {
        return "Statement text cannot be longer than 140 charcters";
      }
    }

  });

  soliloquy.StatementCollection = Backbone.Collection.extend({

    url: "/api/statements/",

    comparator: "timestamp",

    model: soliloquy.StatementModel,

    initialize: function () {
      this.on("sync", function () {
        this.each(function (model) {
          if (!model.isValid()) {
            var err = new Error(model.validationError);
            err.model = model.toJSON();
            throw err;
          }
        });
      });
    },

    _monkeyJob: null,
    startMonkeys: function () {
      this.stopMonkeys();
      this._monkeyJob = setInterval(function () {
        this.create({
          text: this.randomText(160)
        });
      }.bind(this), 10);
    },

    stopMonkeys: function () {
      clearInterval(this._monkeyJob);
    },

    randomText: function (max) {
      var i;
      var text = "";
      var length = Math.floor(Math.random() * max);
      var possible = "abcdefghijklmnopqrstuvwxyz ,.!?";
      possible += "               "; // let's make words more likely
      possible += "aeiouaeiouaeiou"; // let's make vocalizable more likely

      for(i=0; i<length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      return text;
    }


  });

})();