(function () {
  "use strict";

  var soliloquy = window.soliloquy = window.soliloquy || {};
  soliloquy.StatementModel = Backbone.Model.extend({

    idAttribute: "_id"

  });

  soliloquy.StatementCollection = Backbone.Collection.extend({

    url: "/api/statements/",

    comparator: "timestamp",

    model: soliloquy.StatementModel,

    parse: function (resp) {
      return _.map(resp, function (item) {
        if (!_.isString(item.text) && item.toString) {
          console.warn("invalid text data", item.text);
          item.text = item.text.toString();
        }
        item.text = item.text.substr(0, 140);
        return item;
      });
    },

    createFromText: function (text) {
      return this.create({
        text: text,
        image: soliloquy.profile.get("image")
      });
    },

    createRandom: function () {
      return this.createFromText(this.randomText(140));
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