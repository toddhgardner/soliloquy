
test( "window.onStatusSubmit() sends textarea data to server and renders result", function() {
  
	// Arrange
	var server = sinon.fakeServer.create();
	server.respondWith("POST", "/soliloquy/api/status/",
		[200, { "Content-Type": "application/json" },
		'{ "text": "Hey there" }']);

	// Act
	window.onStatusSubmit();
	server.respond();

	// Assert
	strictEqual($('textarea').val(), '', 'text area was cleared');
	strictEqual($('#statuses li').html(), 'Hey there', 'status was added to dom');

});

test( "window.getStatus() gets status from server and renders in list", function() {
  
	// Arrange
	var server = sinon.fakeServer.create();
	server.respondWith("GET", "/soliloquy/api/status/",
		[200, { "Content-Type": "application/json" },
		'[{ "text": "Hi" }, { "text": "You" }, { "text": "Guys" }]']);

	// Act
	window.getStatus();
	server.respond();

	// Assert
	strictEqual($('#statuses li').length, 3, 'statuses were added to dom');

});