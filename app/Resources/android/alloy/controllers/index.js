var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;




function __processArg(obj, key) {
  var arg = null;
  if (obj) {
    arg = obj[key] || null;
  }
  return arg;
}

function Controller() {

  require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
  this.__controllerPath = 'index';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};

  // Generated code that must be executed before all UI and/or
  // controller code. One example is all model and collection
  // declarations from markup.


  // Generated UI code
  $.__views["index"] = Ti.UI.createWindow(
  { backgroundColor: "white", exitOnClose: false, id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  onOpen ? $.addListener($.__views["index"], 'open', onOpen) : __defers['$.__views["index"]!open!onOpen'] = true;$.__views["__alloyId0"] = Ti.UI.createScrollView(
  { width: 300, layout: "vertical", height: Ti.UI.SIZE, top: 10, id: "__alloyId0" });

  $.__views["index"].add($.__views["__alloyId0"]);
  $.__views["__alloyId1"] = Ti.UI.createLabel(
  { color: "#000", width: Ti.UI.SIZE, height: Ti.UI.SIZE, left: 0, text: "Town 1", id: "__alloyId1" });

  $.__views["__alloyId0"].add($.__views["__alloyId1"]);
  $.__views["tf_town1"] = Ti.UI.createTextField(
  { width: 300, borderColor: "#000", borderWidth: 1, color: "#000", id: "tf_town1" });

  $.__views["__alloyId0"].add($.__views["tf_town1"]);
  onChange ? $.addListener($.__views["tf_town1"], 'change', onChange) : __defers['$.__views["tf_town1"]!change!onChange'] = true;$.__views["__alloyId2"] = Ti.UI.createLabel(
  { color: "#000", width: Ti.UI.SIZE, height: Ti.UI.SIZE, left: 0, text: "Lat", id: "__alloyId2" });

  $.__views["__alloyId0"].add($.__views["__alloyId2"]);
  $.__views["tf_lat1"] = Ti.UI.createTextField(
  { width: 300, borderColor: "#000", borderWidth: 1, color: "#000", id: "tf_lat1" });

  $.__views["__alloyId0"].add($.__views["tf_lat1"]);
  onChange ? $.addListener($.__views["tf_lat1"], 'change', onChange) : __defers['$.__views["tf_lat1"]!change!onChange'] = true;$.__views["__alloyId3"] = Ti.UI.createLabel(
  { color: "#000", width: Ti.UI.SIZE, height: Ti.UI.SIZE, left: 0, text: "Lon", id: "__alloyId3" });

  $.__views["__alloyId0"].add($.__views["__alloyId3"]);
  $.__views["tf_lon1"] = Ti.UI.createTextField(
  { width: 300, borderColor: "#000", borderWidth: 1, color: "#000", id: "tf_lon1" });

  $.__views["__alloyId0"].add($.__views["tf_lon1"]);
  onChange ? $.addListener($.__views["tf_lon1"], 'change', onChange) : __defers['$.__views["tf_lon1"]!change!onChange'] = true;$.__views["__alloyId4"] = Ti.UI.createLabel(
  { color: "#000", width: Ti.UI.SIZE, height: Ti.UI.SIZE, left: 0, text: "Town 2", top: 10, id: "__alloyId4" });

  $.__views["__alloyId0"].add($.__views["__alloyId4"]);
  $.__views["tf_town2"] = Ti.UI.createTextField(
  { width: 300, borderColor: "#000", borderWidth: 1, color: "#000", id: "tf_town2" });

  $.__views["__alloyId0"].add($.__views["tf_town2"]);
  onChange ? $.addListener($.__views["tf_town2"], 'change', onChange) : __defers['$.__views["tf_town2"]!change!onChange'] = true;$.__views["__alloyId5"] = Ti.UI.createLabel(
  { color: "#000", width: Ti.UI.SIZE, height: Ti.UI.SIZE, left: 0, text: "Lat", id: "__alloyId5" });

  $.__views["__alloyId0"].add($.__views["__alloyId5"]);
  $.__views["tf_lat2"] = Ti.UI.createTextField(
  { width: 300, borderColor: "#000", borderWidth: 1, color: "#000", id: "tf_lat2" });

  $.__views["__alloyId0"].add($.__views["tf_lat2"]);
  onChange ? $.addListener($.__views["tf_lat2"], 'change', onChange) : __defers['$.__views["tf_lat2"]!change!onChange'] = true;$.__views["__alloyId6"] = Ti.UI.createLabel(
  { color: "#000", width: Ti.UI.SIZE, height: Ti.UI.SIZE, left: 0, text: "Lon", id: "__alloyId6" });

  $.__views["__alloyId0"].add($.__views["__alloyId6"]);
  $.__views["tf_lon2"] = Ti.UI.createTextField(
  { width: 300, borderColor: "#000", borderWidth: 1, color: "#000", id: "tf_lon2" });

  $.__views["__alloyId0"].add($.__views["tf_lon2"]);
  onChange ? $.addListener($.__views["tf_lon2"], 'change', onChange) : __defers['$.__views["tf_lon2"]!change!onChange'] = true;$.__views["__alloyId7"] = Ti.UI.createButton(
  { title: "Force Update", id: "__alloyId7" });

  $.__views["__alloyId0"].add($.__views["__alloyId7"]);
  onClickButton ? $.addListener($.__views["__alloyId7"], 'click', onClickButton) : __defers['$.__views["__alloyId7"]!click!onClickButton'] = true;exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var widgets = require("ti.widget");

  $.index.open();

  function onClickButton(e) {
    require("/widget").updateData();
  }

  var MINUTES = 60 * 30 * 1000;
  var intent = Titanium.Android.createServiceIntent({
    url: 'service.js' });

  intent.putExtra('interval', MINUTES);
  Titanium.Android.startService(intent);


  function onChange() {
    Ti.App.Properties.setString("town1", $.tf_town1.value);
    Ti.App.Properties.setString("town2", $.tf_town2.value);

    Ti.App.Properties.setString("lat1", $.tf_lat1.value);
    Ti.App.Properties.setString("lon1", $.tf_lon1.value);

    Ti.App.Properties.setString("lat2", $.tf_lat2.value);
    Ti.App.Properties.setString("lon2", $.tf_lon2.value);
  }

  function onOpen(e) {

    $.tf_lat1.value = Ti.App.Properties.getString("lat1", "48.135124");
    $.tf_lon1.value = Ti.App.Properties.getString("lon1", "11.581981");
    $.tf_lat2.value = Ti.App.Properties.getString("lat2", "52.520008");
    $.tf_lon2.value = Ti.App.Properties.getString("lon2", "13.404954");
    $.tf_town1.value = Ti.App.Properties.getString("town1", "Berlin");
    $.tf_town2.value = Ti.App.Properties.getString("town2", "Munich");

    require("/widget").updateData();
  }

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["index"]!open!onOpen'] && $.addListener($.__views["index"], 'open', onOpen);__defers['$.__views["tf_town1"]!change!onChange'] && $.addListener($.__views["tf_town1"], 'change', onChange);__defers['$.__views["tf_lat1"]!change!onChange'] && $.addListener($.__views["tf_lat1"], 'change', onChange);__defers['$.__views["tf_lon1"]!change!onChange'] && $.addListener($.__views["tf_lon1"], 'change', onChange);__defers['$.__views["tf_town2"]!change!onChange'] && $.addListener($.__views["tf_town2"], 'change', onChange);__defers['$.__views["tf_lat2"]!change!onChange'] && $.addListener($.__views["tf_lat2"], 'change', onChange);__defers['$.__views["tf_lon2"]!change!onChange'] && $.addListener($.__views["tf_lon2"], 'change', onChange);__defers['$.__views["__alloyId7"]!click!onClickButton'] && $.addListener($.__views["__alloyId7"], 'click', onClickButton);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/miga/dev/titanium/coronaWidgetGithub/app/build/map/Resources/android/alloy/controllers/index.js.map