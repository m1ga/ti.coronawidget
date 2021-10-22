// var widgets = require("ti.widget");
var widget = require("/widget");

$.index.open();

function onClickUpdate(e) {
	showLoading();
	widget.updateData(updatePreview);
}

// var MINUTES = 60 * 30 * 1000;
// var intent = Titanium.Android.createServiceIntent({
// 	url: 'service.js'
// });
// intent.putExtra('interval', MINUTES);
// Titanium.Android.startService(intent);

function updatePreview() {
	var widgetData = Ti.App.Properties.getObject("widgetData", {
		value1: "-",
		value2: "-"
	})

	$.lbl_preview1.text = Ti.App.Properties.getString("town1", "Berlin") + ": " + widgetData.value1;
	$.lbl_preview2.text = Ti.App.Properties.getString("town2", "Munich") + ": " + widgetData.value2;
	hideLoading();
}

function showLoading() {
	$.view_loading.show();
	$.activity.show();
}

function hideLoading() {
	$.view_loading.hide();
	$.activity.hide();
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

	showLoading();
	widget.updateData(updatePreview);
}

function onClickSave(e) {
	showLoading();
	if ($.tf_town1.value != "") Ti.App.Properties.setString("town1", $.tf_town1.value);
	if ($.tf_town2.value != "") Ti.App.Properties.setString("town2", $.tf_town2.value);

	if ($.tf_lat1.value != "") Ti.App.Properties.setString("lat1", $.tf_lat1.value);
	if ($.tf_lon1.value != "") Ti.App.Properties.setString("lon1", $.tf_lon1.value);

	if ($.tf_lat2.value != "") Ti.App.Properties.setString("lat2", $.tf_lat2.value);
	if ($.tf_lon2.value != "") Ti.App.Properties.setString("lon2", $.tf_lon2.value);

	Ti.App.Properties.setString("icon", $.tf_icon.value);
	widget.updateData(updatePreview);
}

// function onClickClose(e) {
// 	Titanium.Android.stopService(intent);
// 	$.index.exitOnClose = true;
// 	$.index.close();
// }
