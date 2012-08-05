
test("window.onStatusSubmit() sends textarea data to server and renders result", function() {
	// Arrange
	var expectedStatus = "Some Value";

	var server = sinon.fakeServer.create();
	server.respondWith("POST", "/soliloquy/api/status/",
		[200, { "Content-Type": "application/json" },
		'{ "text": "'+expectedStatus+'" }']);

	var $dom = $('#qunit-fixture');
	$dom.append('<textarea>'+expectedStatus+'</textarea>');
	$dom.append('<ul id="statuses">');

	// Act
	window.onStatusSubmit.call($dom);
	server.respond();

	// Assert
	strictEqual($dom.find('textarea').val(), '', 'text area was cleared');
	strictEqual($dom.find('#statuses li').length, 1, 'one status was added');
	strictEqual($dom.find('#statuses li').first().html(), expectedStatus, 'status was added to dom');
});

test( "window.getStatus() gets status from server and renders in list", function() {
	// Arrange
	var server = sinon.fakeServer.create();
	server.respondWith("GET", "/soliloquy/api/status/",
		[200, { "Content-Type": "application/json" },
		'[{ "text": "Hi" }, { "text": "You" }, { "text": "Guys" }]']);

	var $dom = $('#qunit-fixture');
	$dom.append('<ul id="statuses">');

	// Act
	window.getStatus();
	server.respond();

	// Assert
	strictEqual($dom.find('#statuses li').length, 3, 'statuses were added to dom');
});
