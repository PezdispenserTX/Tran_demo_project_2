//Define
Alloy.Colections.instance("cars");

//More controller
var carsController = Alloy.createController("cars");

//This again, no Mustang?
Alloy.Collections.cars.reset([{
	"make" : "Honda",
	"model" : "Civic"
}, {
	"make" : "Honda",
	"model" : "Accord"
}, {
	"make" : "Ford",
	"model" : "Escape"
}, {
	"make" : "Nissan",
	"model" : "Altima"
}]);

//wedgit
var toggleBtnWidget = Alloy.createWidget("Wedgit", null, {
	"defaultState": "on",
	"id" : "toggleBtnWidget"
});

//wedgit view
$.mainWindow.add(toggleBtnWidget.getView());

//window
$.mainWindow.open();
