window.onStatusSubmit = function() {
  $.ajax({
    url: '/soliloquy/api/status/',
    type: 'POST',
    dataType: 'json',
    data: {text: $(this).find('textarea').val()},
    success: function(data) {
      $('textarea').val('');
      $('#statuses').append('<li class="status">' + data.text + '</li>');
    }
  });
  return false;
};

window.getStatus = function () {
  $.ajax({
    url: '/soliloquy/api/status/',
    dataType: 'json',
    success: function(data) {
      var $statuses = $('#statuses');
      for(var i = 0; data.length > i; i++) {
        $statuses.append('<li class="status">' + data[i].text + '</li>');
      }
    }
  });
};

jQuery(function($) {
  $('form').on('submit', window.onStatusSubmit);
  window.getStatus();
});