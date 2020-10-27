package ti.widget;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.widget.RemoteViews;

import org.json.JSONException;
import org.json.JSONObject;

public class WidgetProvider1x1 extends AppWidgetProvider {


	@Override
    public void onUpdate(Context context, AppWidgetManager appWidgetManager, int[] appWidgetIds) {
        final int count = appWidgetIds.length;

        // get text from app/shared preferences
        String value1 = "-";
		String town1 = "-";
        SharedPreferences sharedPref = context.getSharedPreferences("titanium", Context.MODE_PRIVATE);
        String appString = sharedPref.getString("widgetData", "{\"text\":''}");
        try {
            JSONObject appData = new JSONObject(appString);
            value1 = appData.getString("value1");
			town1 = appData.getString("town1");
        } catch (JSONException e) {

        }

        // update all widgets
        for (int i = 0; i < count; i++) {
            int widgetId = appWidgetIds[i];

            // get view
            RemoteViews remoteViews1x1 = new RemoteViews(context.getPackageName(), R.layout.appwidget1x1);

			// set text to textfield
            remoteViews1x1.setTextViewText(R.id.numValue1, value1);
            remoteViews1x1.setTextViewText(R.id.town1, town1);

            // update ui
            Intent intent = new Intent(context, WidgetProvider1x1.class);
            intent.setAction(AppWidgetManager.ACTION_APPWIDGET_UPDATE);
            intent.putExtra(AppWidgetManager.EXTRA_APPWIDGET_IDS, appWidgetIds);
            PendingIntent pendingIntent = PendingIntent.getBroadcast(context,0, intent, PendingIntent.FLAG_UPDATE_CURRENT);
            appWidgetManager.updateAppWidget(widgetId, remoteViews1x1);
        }
    }
}
