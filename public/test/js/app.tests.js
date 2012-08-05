
var $dom = $('#qunit-fixture');

test( "window.onStatusSubmit() sends textarea data to server and renders result", function() {
  
	// Arrange
	$dom.append('<textarea>Some Value</textarea>');
	$dom.append('<div id="statuses">');

	// Act
	window.onStatusSubmit();

	// Assert
	// This sucks! I have to wait for ajax to finish and I don't control what
	// the server will return.
	strictEqual($('textarea').val(), '', 'text area was cleared');
	ok($('#statuses li').length > 0, 'status was added to dom');

});

