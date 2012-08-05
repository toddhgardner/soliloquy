
asyncTest("window.onStatusSubmit() sends textarea data to server and renders result", function() {
  
	// Arrange
	var $dom = $('#qunit-fixture');
	$dom.append('<textarea>Some Value</textarea>');
	$dom.append('<div id="statuses">');

	// Act
	window.onStatusSubmit.call($dom);

	// wait for ajax to be done
	// This sucks! I have to wait for ajax to finish and I don't control what
	// the server will return.
	setTimeout(function () {
		start();
		
		// Assert
		strictEqual($dom.find('textarea').val(), '', 'text area was cleared');
		ok($dom.find('#statuses li').length > 0, 'status was added to dom');
	
	}, 100);
});