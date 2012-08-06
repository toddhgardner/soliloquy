
sinon.stub(window.views.StatusView.prototype, 'initialize');

test( "view.onStatusSubmit() creates status model in collection", function() {
  
	// Arrange
	var fakeCollection = {
		create: sinon.spy()
	};

	var view = new window.views.StatusView({
		el: $('#qunit-fixture'),
		collection: fakeCollection
	});

	var fakeEvent = {
		preventDefault: sinon.spy()
	};

	// Act
	var result = view.onStatusSubmit(fakeEvent);

	// Assert
	ok(!result, 'returned false');
	ok(fakeCollection.create.calledOnce, 'create was called');
});

test( "view.writeStatus() writes text to dom", function() {
  
	// Arrange
	var fakeModel = {
		get: sinon.spy()
	};

	var view = new window.views.StatusView({
		el: $('#qunit-fixture')
	});


	// Act
	view.writeStatus(fakeModel);

	// Assert
	strictEqual($('#statuses li').length, 1, 'statuses were written to dom');

});