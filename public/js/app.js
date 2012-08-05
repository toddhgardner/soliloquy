window.statusCollection = new window.collections.StatusCollection();

window.onStatusSubmit = function() {
  window.statusCollection.create({ text: $(this).find('textarea').val() });
  return false;
};

window.writeAllStatus = function (collection) {
  collection.each(window.writeStatus);
};

window.writeStatus = function (model) {
  $('textarea').val('');
  $('#statuses').append('<li class="status">' + model.get('text') + '</li>');
};

jQuery(function($) {
  $('form').on('submit', window.onStatusSubmit);
  window.statusCollection.on('add', window.writeStatus);
  window.statusCollection.on('reset', window.writeAllStatus);
  window.statusCollection.fetch();
});
