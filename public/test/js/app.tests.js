
test("window.onStatusSubmit() creates status model in collection", function() {
	// Arrange
	var expectedStatus = "Some Value";

	var $dom = $('#qunit-fixture');
	$dom.append('<textarea>'+expectedStatus+'</textarea>');

	var fakeCollection = {
		create: sinon.spy()
	};

	// Act
	window.onStatusSubmit.call($dom, fakeCollection);
	var result = fakeCollection.create.firstCall.args[0];

	// Assert
	strictEqual(result.text, expectedStatus, 'status was added to collection');
});

test("window.renderStatus() writes text to dom", function() {
	// Arrange
	var expectedStatus = "Some Value";

	var $dom = $('#qunit-fixture');
	$dom.append('<textarea>'+expectedStatus+'</textarea>');
	$dom.append('<ul id="statuses">');

	var fakeModel = {
		get: sinon.stub().returns(expectedStatus)
	};

	// Act
	window.renderStatus(fakeModel);

	// Assert
	strictEqual($dom.find('textarea').val(), '', 'text area was cleared');
	strictEqual($dom.find('#statuses li').length, 1, 'statuses were written to dom');
	strictEqual($dom.find('#statuses li').first().html(), expectedStatus, 'statuses were written to dom');
});