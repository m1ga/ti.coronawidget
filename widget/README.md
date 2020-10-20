# Appcelerator Titanium Android Widget

Based on https://github.com/m1ga/ti.widget

## Send text to the widget:
```javascript
Ti.App.Properties.setObject("widgetData", {
	text: "my text"
})

var widget = require("ti.widget");
widget.updateWidgets();		// update widgets
```
