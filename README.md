# Appclerator Titanium Covid-19 widget for Android

<p>
<img src="preview0.jpg"/><br/>
<small><i>Widget</i></small>
</p>

<p>
<img src="preview1.png"/><br/>
<small><i>Widget selection</i></small>
</p>

<p>
<img src="preview2.png"/><br/>
<small><i>App settings</i></small>
</p>

<hr/>

## Content
* Appcelerator Titanum app (<a href="/app">app folder</a>)
* Appcelerator Titanum Android Widget (<a href="/widget">widget folder</a>)

The widget is a basic Android Home widget that will read Ti.App.Properties and writes them into XML fields. The app will run a foreground service (the icon in the top left corner) and collects data every 30mins. This data is forwarded to the widget.

## Build
### Widget

go to the `widget/android/` folder and run
```appc ti build -p android --build-only```

### App

go to the `app/` folder and run
```bash
appc new --import --no-services
appc ti build -p android
```

## Attention
_Android only!_ For iOS you can use Scriptable with https://gist.github.com/kevinkub/46caebfebc7e26be63403a7f0587f664
