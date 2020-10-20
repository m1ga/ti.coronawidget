var widgets = require("ti.widget");

$.index.open();

function onClickButton(e) {
	require("/widget").updateData();
}

var MINUTES = 60 * 30 * 1000;
var intent = Titanium.Android.createServiceIntent({
	url: 'service.js'
});
intent.putExtra('interval', MINUTES);
Titanium.Android.startService(intent);



function onOpen(e) {
	require("/widget").updateData();
}
