var widgets = require("ti.widget");
var moment = require("alloy/moment");

var widgetData = Ti.App.Properties.getObject("widgetData", {
	value1: "-",
	value2: "-"
})

// get previous values
var town1 = Ti.App.Properties.getString("town1", "-");
var town2 = Ti.App.Properties.getString("town2", "-");
var icon = Ti.App.Properties.getString("icon", "🦠");


function currentDateTime() {
	return moment().format('DD.MM., HH:mm');
}

function downloadData(data) {

	var lon = data.lon;
	var lat = data.lat;
	var dTarget = data.target;

	const outputFields = 'GEN,RS,EWZ,EWZ_BL,BL_ID,cases,cases_per_100k,cases7_per_100k,cases7_bl_per_100k,last_update,BL';
	const locationUrl = "https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&outFields=" + outputFields + "&geometry=" + lon + "%2C" + lat + "&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelWithin&returnGeometry=false&outSR=4326&f=json"

	var xhr = Ti.Network.createHTTPClient({
		onload: function(e) {
			var json = JSON.parse(this.responseText);
			if (json.features && json.features.length > 0) {
				if (dTarget == 1) {
					widgetData.town1 = town1;
					widgetData.value1 = icon + parseFloat(json.features[0].attributes.cases7_per_100k).toFixed(1);
					widgetData.updateTime1 = "Stand: " + json.features[0].attributes.last_update;
				} else {
					widgetData.town2 = town2;
					widgetData.value2 = icon + parseFloat(json.features[0].attributes.cases7_per_100k).toFixed(1);
					widgetData.updateTime2 = "Stand: " + json.features[0].attributes.last_update;
				}
				Ti.App.Properties.setObject("widgetData", widgetData)
			}

			widgets.updateWidgets();
		},
		onerror: function(e) {},
		timeout: 5000
	});
	xhr.open('GET', locationUrl);
	xhr.send();
}

function getData() {

	if (Ti.Network.online) {
		town1 = Ti.App.Properties.getString("town1", "-");
		town2 = Ti.App.Properties.getString("town2", "-");
		icon = Ti.App.Properties.getString("icon", "🦠");

		downloadData({
			lon: Ti.App.Properties.getString("lon1", "13.404954"),
			lat: Ti.App.Properties.getString("lat1", "52.520008"),
			target: 1
		});
		downloadData({
			lon: Ti.App.Properties.getString("lon2", "13.404954"),
			lat: Ti.App.Properties.getString("lat2", "52.520008"),
			target: 2
		});
	}
}

exports.updateData = getData;
