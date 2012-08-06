jQuery(function($) {
  var statusView = new window.views.StatusView({
    el: $('.container'),
    collection: new window.collections.StatusCollection()
  });
});
