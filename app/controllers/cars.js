//Show
carsController.mainWindow.open();

function transform(model) {
	//Converting to JSON
	var carObject = model.toJSON();
	return {
		"title" : carObject.model + " by " + carObject.make,
		"id" : model.cid
	};
}

//Show E Honda
function filter(collection) {
	return collection.where({
		make : 'Honda'
	});
}

//Bind view controller
$.mainWindow.addEventListener('close', function() {
	$.destroy();
});
