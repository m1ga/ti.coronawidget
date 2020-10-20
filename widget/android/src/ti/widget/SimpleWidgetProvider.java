package ti.widget;

import java.util.Random;
import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.util.Log;
import android.widget.RemoteViews;
import android.widget.Toast;

import org.appcelerator.titanium.TiApplication;
import org.json.JSONException;
import org.json.JSONObject;

public class SimpleWidgetProvider extends AppWidgetProvider {


	@Override
    public void onUpdate(Context context, AppWidgetManager appWidgetManager, int[] appWidgetIds) {
        final int count = appWidgetIds.length;

        // get text from app/shared preferences
        String value1 = "-";
        String value2 = "-";
		String town1 = "-";
        String town2 = "-";
        SharedPreferences sharedPref = context.getSharedPreferences("titanium", Context.MODE_PRIVATE);
        String appString = sharedPref.getString("widgetData", "{\"text\":''}");
        try {
            JSONObject appData = new JSONObject(appString);
            value1 = appData.getString("value1");
            value2 = appData.getString("value2");
			town1 = appData.getString("town1");
            town2 = appData.getString("town2");
        } catch (JSONException e) {

        }

        // update all widgets
        for (int i = 0; i < count; i++) {
            int widgetId = appWidgetIds[i];

            // get view
            RemoteViews remoteViews = new RemoteViews(context.getPackageName(), R.layout.example_appwidget);

            // set text to textfield
            remoteViews.setTextViewText(R.id.numValue1, value1);
            remoteViews.setTextViewText(R.id.numValue2, value2);

            remoteViews.setTextViewText(R.id.town1, town1);
            remoteViews.setTextViewText(R.id.town2, town2);

            // update ui
            Intent intent = new Intent(context, SimpleWidgetProvider.class);
            intent.setAction(AppWidgetManager.ACTION_APPWIDGET_UPDATE);
            intent.putExtra(AppWidgetManager.EXTRA_APPWIDGET_IDS, appWidgetIds);
            PendingIntent pendingIntent = PendingIntent.getBroadcast(context,0, intent, PendingIntent.FLAG_UPDATE_CURRENT);
            appWidgetManager.updateAppWidget(widgetId, remoteViews);
        }
    }
}
