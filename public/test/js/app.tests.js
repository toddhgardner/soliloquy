
test( "window.onStatusSubmit() creates status model in collection", function() {
  
	// Arrange
	window.statusCollection = {
		create: sinon.spy()
	};

	// Act
	var result = window.onStatusSubmit();

	// Assert
	ok(!result, 'returned false');
	ok(window.statusCollection.create.calledOnce, 'create was called');
});


window.writeStatus = function (model) {
  $('textarea').val('');
  $('#statuses').append('<li class="status">' + model.get('text') + '</li>');
};

test( "window.writeStatus() writes text to dom", function() {
  
	// Arrange
	var fakeModel = {
		get: sinon.spy()
	};

	var $dom = $('#qunit-fixture');
	$dom.append('<ul id="statuses">');

	// Act
	window.writeStatus(fakeModel);

	// Assert
	strictEqual($('#statuses li').length, 1, 'statuses were written to dom');

});
