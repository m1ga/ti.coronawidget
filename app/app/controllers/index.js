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


function onChange() {
	if ($.tf_town1.value != "") Ti.App.Properties.setString("town1", $.tf_town1.value);
	if ($.tf_town2.value != "") Ti.App.Properties.setString("town2", $.tf_town2.value);

	if ($.tf_lat1.value != "") Ti.App.Properties.setString("lat1", $.tf_lat1.value);
	if ($.tf_lon1.value != "") Ti.App.Properties.setString("lon1", $.tf_lon1.value);

	if ($.tf_lat2.value != "") Ti.App.Properties.setString("lat2", $.tf_lat2.value);
	if ($.tf_lon2.value != "") Ti.App.Properties.setString("lon2", $.tf_lon2.value);

	Ti.App.Properties.setString("icon", $.tf_icon.value);
}

function onOpen(e) {


	if (Ti.App.Properties.getBool("firstStart", true)) {
		// set values for first start
		Ti.App.Properties.setString("town1", "Berlin");
		Ti.App.Properties.setString("town2", "Munich");
		Ti.App.Properties.setString("lat2", "48.135124");
		Ti.App.Properties.setString("lon2", "11.581981");
		Ti.App.Properties.setString("lat2", "52.520008");
		Ti.App.Properties.setString("lon2", "13.404954");
		Ti.App.Properties.setBool("firstStart", false);
		Ti.App.Properties.setString("icon", "🦠");
	}

	$.tf_lat1.value = Ti.App.Properties.getString("lat1", "48.135124");
	$.tf_lon1.value = Ti.App.Properties.getString("lon1", "11.581981");
	$.tf_lat2.value = Ti.App.Properties.getString("lat2", "52.520008");
	$.tf_lon2.value = Ti.App.Properties.getString("lon2", "13.404954");
	$.tf_town1.value = Ti.App.Properties.getString("town1", "Berlin");
	$.tf_town2.value = Ti.App.Properties.getString("town2", "Munich");
	$.tf_icon.value = Ti.App.Properties.getString("icon", "🦠");

	require("/widget").updateData();
}
