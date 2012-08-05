window.onStatusSubmit = function(collection) {
  collection.create({ text: $(this).find('textarea').val() });
  return false;
};

window.renderStatuses = function (collection) {
  collection.each(window.renderStatus);
};

window.renderStatus = function (model) {
  $('textarea').val('');
  $('#statuses').append('<li class="status">' + model.get('text') + '</li>');
};

jQuery(function($) {
  var statusCollection = new window.collections.StatusCollection();

  $('form').on('submit', function (evt) {
    evt.preventDefault();
    window.onStatusSubmit.call(this, statusCollection);
  });

  statusCollection.on('reset', window.renderStatuses);
  statusCollection.on('add', window.renderStatus);
  
  statusCollection.fetch();
});
