define([
  'collections/statusCollection',
  'views/statusView'
],function (StatusCollection, StatusView) {

  jQuery(function($) {
    var statusView = new StatusView({
      el: $('.container'),
      collection: new StatusCollection()
    });
  });

});