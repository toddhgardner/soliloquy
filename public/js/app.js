jQuery(function($) {
  $('form').on('submit', function() {
    $.ajax({
      url: '/soliloquy/api/status/',
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({text: $(this).find('textarea').val()}),
      success: function(data) {
        $('textarea').val('');
        $('#statuses').append('<li class="status">' + data.text + '</li>');
      }
    });
    return false;
  });

  $.ajax({
    url: '/soliloquy/api/status/',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      var $statuses = $('#statuses');
      for(var i = 0; data.length > i; i++) {
        $statuses.append('<li class="status">' + data[i].text + '</li>');
      }
    }
  });
});
