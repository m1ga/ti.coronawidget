Ti.API.info("@@@ Service started.");
require("/widget").updateData();

if (Ti.Platform.Android.API_LEVEL >= 26) {
	channel = Ti.Android.NotificationManager.createNotificationChannel({
		id: "channel_id",
		name: "Background Channel",
		importance: Ti.Android.IMPORTANCE_LOW
	});
}

Ti.Android.currentService.foregroundNotify(
	123,
	Ti.Android.createNotification({
		contentTitle: "Corona Widget",
		icon: Ti.App.Android.R.drawable.virus,
		contentText: "Keep the app running...",
		channelId: channel ? channel.id : null,
		contentIntent: Ti.Android.createPendingIntent({
			intent: Ti.App.Android.launchIntent || Ti.Android.createIntent(),
		})
	})
);
