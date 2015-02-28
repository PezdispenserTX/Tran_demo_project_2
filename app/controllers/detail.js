var args = arguments[0] || {};
//close on click
$.closeBtn.addEventListener('click', function() {
	$.detailWindow.close();
});

//Render trigger
$.car.set(args.data.attributes);

//Free model-view on close
$.detailWindow.addEventListener('close', function() {
	$.destroy();
});
