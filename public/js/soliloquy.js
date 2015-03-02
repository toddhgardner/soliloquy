(function () {
  "use strict";

  jQuery(function soliliquyMain($) {

    console.info("Soliloquy initializing...");

    var soliloquy = window.soliloquy = window.soliloquy || {};
    var profile = new soliloquy.ProfileModel();
    var statements = new soliloquy.StatementCollection();

    // Setup Views
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

    // Setup Ads
    setupAds();

    // Get Data
    soliloquy.profile = profile;
    statements.fetch({ reset: true });

  });

  function setupAds() {
    window.INLINE_ADS({
      key: "76sdfnnd877asd8gsdf-01",
      container: ".statement-list",
      frequency: 700,
      done: function (count) {
        console.info("inline ads completed " + count + " ads");
      }
    });

    window.SIDEBAR_ADS = {
      key: "8dsf7sdfnsndf87s6s",
      container: ".sidebar-ads",
      count: 8,
      refresh: 5000,
      onRefresh: function () {
        console.info("sidebar ads refreshed");
      }
    };
  }

})();








/*
  $.getScript("ads/inlineAdProvider.js", function () {

  });
*/