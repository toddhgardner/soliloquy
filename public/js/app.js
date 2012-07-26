jQuery(function($) {
  require([
    'js/collections/statusCollection',
    'js/views/statusView'],
  function (StatusCollection, StatusView) {

    var statusView = new StatusView({
      el: $('#status-container'),
      collection: new StatusCollection()
    });
  });

});