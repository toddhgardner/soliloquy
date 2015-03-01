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

      e.preventDefault();
      return false;
    },

    onStartMonkeys: function () {
      this.collection.startMonkeys();
    },

    onStopMonkeys: function () {
      this.collection.stopMonkeys();
    }

   // writeStatus: function (model) {
   //   var m = this.formatStatus(model);
   //   this.$('#statuses').prepend(this.template(m));
   // },

   // writeAllStatus: function (collection) {
   //   collection.each(this.writeStatus, this);
   // },

   // interleaveAds: function () {
   //   var currentHeight = 0;
   //   var adHeightInterval = 500;
   //   var statusList = this.$("#statuses");

   //   statusList.find("li").each(function (index, el) {
   //     currentHeight = currentHeight + el.offsetHeight;
   //     if (currentHeight >= adHeightInterval) {
   //       currentHeight = 0;
   //       var m = this.formatStatus(this.adModel);
   //       $(el).after(this.template(m));
   //     }
   //   }.bind(this));
   // },

   // formatStatus: function(status) {
   //   var m = status.toJSON();
   //   m.timestamp = moment(m.timestamp).fromNow();
   //   return m;
   // }

  });

})();