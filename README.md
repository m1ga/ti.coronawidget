# 😷 Appcelerator Titanium Covid-19 widget for Android

<img src="app.jpg" alt="app"/>

<br/>
<span class="badge-buymeacoffee"><a href="https://www.buymeacoffee.com/miga" title="donate"><img src="https://img.shields.io/badge/buy%20me%20a%20coke-donate-orange.svg" alt="Buy Me A Coke donate button" /></a></span>

<table>
<tr>
<td>
<img src="preview0.jpg" alt="preview"/><br/>
<small><i>Widget</i></small>
</td>
<td>
<img src="preview1.png" alt="preview"/><br/>
<small><i>Widget selection</i></small>
</td>

<td>
<img src="preview2.png" alt="preview"/><br/>
<small><i>App settings</i></small>
</td>
</tr>
</table>

<hr/>

## 📋 Content

<i><b>This Widget and app started as a proof-of-concept how to create such a widget with Appcelerator Titanium! It is not a final app (yet) 😉 It works but it can be improved!</b></i>

* 📱 Appcelerator Titanum app (<a href="/app">app folder</a>)
* 📱 Appcelerator Titanum Android Widget (<a href="/widget">widget folder</a>)

The widget is a basic Android Home widget that will read Ti.App.Properties and writes them into XML fields. The app will run a foreground service (the icon in the top left corner) and collects data every 30mins. This data is forwarded to the widget.

## 📲 Use

APK is available in the <a href="https://github.com/m1ga/ti.coronawidget/releases/">release section</a> (no store version yet).
* download APK
* install APK
* add the Widget to your home screen
* start the app
* set places and press "Force update"

**Note**
There are still some bugs and features that could be implemented:
* if the icon is gone you have to restart the app to get new updates. Sometimes the system will kill the background process

## 🛠 Build
### Widget

go to the `widget/android/` folder and run
```appc ti build -p android --build-only```

### App

go to the `app/` folder and run
```bash
appc new --import --no-services
appc ti build -p android
```

## 🚨 Attention
_Android only!_ For iOS you can use Scriptable with https://gist.github.com/kevinkub/46caebfebc7e26be63403a7f0587f664 by @kevinkub (https://github.com/kevinkub)


## Author
* Michael Gangolf (https://migaweb.de) <span class="badge-buymeacoffee"><a href="https://www.buymeacoffee.com/miga" title="donate"><img src="https://img.shields.io/badge/buy%20me%20a%20coke-donate-orange.svg" alt="Buy Me A Coke donate button" /></a></span>
