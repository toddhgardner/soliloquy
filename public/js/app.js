jQuery(function($) {
  var statusView = new window.views.StatusView({
    el: $('#status-container'),
    collection: new window.collections.StatusCollection()
  });
});