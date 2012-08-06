
sinon.stub(window.views.StatusView.prototype, 'initialize');

test("view.onStatusSubmit() creates status model in collection", function() {
	// Arrange
	var expectedStatus = "Some Value";

	var $fakeDom = $('#qunit-fixture');
	$fakeDom.append('<textarea>'+expectedStatus+'</textarea>');

	var fakeCollection = {
		create: sinon.spy()
	};

	var view = new window.views.StatusView({
		el: $fakeDom,
		collection: fakeCollection
	});

	var fakeEvent = {
		preventDefault: sinon.spy()
	};

	// Act
	view.onStatusSubmit(fakeEvent);
	var result = fakeCollection.create.firstCall.args[0];

	// Assert
	strictEqual(result.text, expectedStatus, 'status was created in collection');
});

test("view.renderStatus() writes text to dom", function() {
	// Arrange
	var expectedStatus = "Some Value";

	var $fakeDom = $('#qunit-fixture');
	$fakeDom.append('<ul id="statuses">');

	var fakeModel = {
		get: sinon.stub().returns(expectedStatus)
	};

	var view = new window.views.StatusView({
		el: $fakeDom
	});

	// Act
	view.renderStatus(fakeModel);

	// Assert
	strictEqual($fakeDom.find('#statuses li').first().html(), expectedStatus, 'statuses were written to dom');
});