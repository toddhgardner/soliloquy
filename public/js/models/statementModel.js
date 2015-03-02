(function () {
  "use strict";

  var soliloquy = window.soliloquy = window.soliloquy || {};
  soliloquy.StatementModel = Backbone.Model.extend({

    idAttribute: "_id",

    initialize: function () {
      this.on("sync", function () {
        console.info("saved statement " + this.id);
      });
    }

  });

  soliloquy.StatementCollection = Backbone.Collection.extend({

    url: "/api/statements/",

    comparator: "timestamp",

    model: soliloquy.StatementModel,

    parse: function (resp) {
      return _.map(resp, function (item) {
        item.text = item.text.substr(0, 140);
        return item;
      });
    },

    createRandom: function () {
      this.create({
        text: this.randomText(140)
      });
    },

    // _monkeyJob: null,
    // startMonkeys: function () {
    //   this.stopMonkeys();
    //   this._monkeyJob = setInterval(function () {
    //     this.create({
    //       text: this.randomText(160)
    //     });
    //   }.bind(this), 10);
    // },

    // stopMonkeys: function () {
    //   clearInterval(this._monkeyJob);
    // },

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