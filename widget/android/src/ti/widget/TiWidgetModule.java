package ti.widget;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.widget.RemoteViews;

import org.appcelerator.kroll.KrollModule;
import org.appcelerator.kroll.annotations.Kroll;
import org.appcelerator.kroll.common.TiConfig;
import org.appcelerator.titanium.TiApplication;


@Kroll.module(name="TiWidget", id="ti.widget")
public class TiWidgetModule extends KrollModule
{

	// Standard Debugging variables
	private static final String LCAT = "TiWidgetModule";
	private static final boolean DBG = TiConfig.LOGD;

	public TiWidgetModule()
	{
		super();
	}

	@Kroll.onAppCreate
	public static void onAppCreate(TiApplication app) {}

	@Kroll.method
	public void updateWidgets() {
		// 2x1 widget
		Context context = TiApplication.getAppCurrentActivity();
		int[] ids = AppWidgetManager.getInstance(context.getApplicationContext())
				.getAppWidgetIds(new ComponentName(context.getApplicationContext(), WidgetProvider2x1.class));
		Intent intent = new Intent(context, WidgetProvider2x1.class);
		intent.setAction(AppWidgetManager.ACTION_APPWIDGET_UPDATE);
		intent.putExtra(AppWidgetManager.EXTRA_APPWIDGET_IDS, ids);
		context.sendBroadcast(intent);

		// 1x1 widget
		ids = AppWidgetManager.getInstance(context.getApplicationContext())
				.getAppWidgetIds(new ComponentName(context.getApplicationContext(), WidgetProvider1x1.class));
		intent = new Intent(context, WidgetProvider1x1.class);
		intent.setAction(AppWidgetManager.ACTION_APPWIDGET_UPDATE);
		intent.putExtra(AppWidgetManager.EXTRA_APPWIDGET_IDS, ids);
		context.sendBroadcast(intent);
	}
}
