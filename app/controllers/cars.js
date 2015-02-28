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

$.table.addEventListener('click', function(_event) {
	//get model
	var model = Alloy.Collections.cars._getByCid(_event.rowData.modelId);
	
	//Create/Pass
	var detailController = Alloy.createController('detail', {
		data : model
	});
	
	//get view
	detailController.getView().open({
		modal : true
	});
});