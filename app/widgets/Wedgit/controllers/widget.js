//click handler
$.container.addEventListener('click', function(_event) {
	//hide clicked
	toggleButtonBIdClicked(_event.source.id);
});

//_buttonId name
function toggleButtonByIdClicked(_buttonId) {
	if (_buttonId === "on") {
		$.on.hide();
		$.off.show();
	} else if (_buttonId === "off") {
		$.on.show();
		$.off.hide();
	}
}

var args = arguments[0] || {};
//default on
args.defaultState = args.defaultState || 'on';

//init state
if (args.defaultState === "on") {
	toggleButtonByIdClicked("off");
} else if (args.defaultState === "off") {
	toggleButtonByIdClicked("on");
}
