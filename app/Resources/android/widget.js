var widgets = require("ti.widget");

var t = Ti.App.Properties.getObject("widgetData", {
  value1: "-",
  value2: "-" });


var dataValue1 = t.value1;
var dataValue2 = t.value2;
var town1 = Ti.App.Properties.getString("town1", "-");
var town2 = Ti.App.Properties.getString("town2", "-");

function getData() {

  town1 = Ti.App.Properties.getString("town1", "-");
  town2 = Ti.App.Properties.getString("town2", "-");

  var xhr = Ti.Network.createHTTPClient({
    onload: function (e) {
      var json = JSON.parse(this.responseText);
      dataValue1 = parseFloat(json.features[0].attributes.cases7_per_100k).toFixed(1);

      Ti.App.Properties.setObject("widgetData", {
        town1: town1,
        town2: town2,
        value1: "🦠 " + dataValue1,
        value2: "🦠 " + dataValue2 });

      widgets.updateWidgets();
    },
    onerror: function (e) {},
    timeout: 5000 // milliseconds
  });
  var lat1 = Ti.App.Properties.getString("lat1", "52.520008");
  var lon1 = Ti.App.Properties.getString("lon1", "13.404954");
  xhr.open('GET', "https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&outFields=GEN,cases7_per_100k&geometry=" + lon1 + "%2C" + lat1 + "&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelWithin&returnGeometry=false&outSR=4326&f=json");
  xhr.send();

  // second data source
  var xhr = Ti.Network.createHTTPClient({
    onload: function (e) {
      var json = JSON.parse(this.responseText);
      dataValue2 = parseFloat(json.features[0].attributes.cases7_per_100k).toFixed(1);

      Ti.App.Properties.setObject("widgetData", {
        town1: town1,
        town2: town2,
        value1: "🦠 " + dataValue1,
        value2: "🦠 " + dataValue2 });

      widgets.updateWidgets();
    },
    onerror: function (e) {},
    timeout: 5000 });


  lat1 = Ti.App.Properties.getString("lat2", "48.135124");
  lon1 = Ti.App.Properties.getString("lon2", "11.581981");
  xhr.open('GET', "https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&outFields=GEN,cases7_per_100k&geometry=" + lon1 + "%2C" + lat1 + "&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelWithin&returnGeometry=false&outSR=4326&f=json");
  xhr.send();
}

exports.updateData = getData;