package ti.widget;

import android.appwidget.AppWidgetManager;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;

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
		Context context = TiApplication.getAppCurrentActivity();
		int[] ids = AppWidgetManager.getInstance(context.getApplicationContext())
				.getAppWidgetIds(new ComponentName(context.getApplicationContext(), SimpleWidgetProvider.class));

		Intent intent = new Intent(context, SimpleWidgetProvider.class);
		intent.setAction(AppWidgetManager.ACTION_APPWIDGET_UPDATE);
		intent.putExtra(AppWidgetManager.EXTRA_APPWIDGET_IDS, ids);

		context.sendBroadcast(intent);
	}
}
