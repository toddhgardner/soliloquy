
require(['../js/views/statusView'], function(StatusView) {
	sinon.stub(StatusView.prototype, 'initialize');
});

asyncTest( "view.onStatusSubmit() creates status model in collection", function() {
	require(['../js/views/statusView'], function(StatusView) {
		start();

		// Arrange
		var fakeCollection = {
			create: sinon.spy()
		};
		
		var view = new StatusView({
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
});

asyncTest( "view.writeStatus() writes text to dom", function() {
	require(['../js/views/statusView'], function(StatusView) {
		start();

		// Arrange
		var fakeModel = {
			get: sinon.spy()
		};

		var view = new StatusView({
			el: $('#qunit-fixture')
		});


		// Act
		view.writeStatus(fakeModel);

		// Assert
		strictEqual($('#statuses li').length, 1, 'statuses were written to dom');

	});
});