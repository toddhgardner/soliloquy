var soliloquy = window.soliloquy || {};

jQuery(function($) {

  var statusView = new soliloquy.StatusView({
    el: $('#status-container'),
    collection: new soliloquy.StatusCollection()
  });

});
