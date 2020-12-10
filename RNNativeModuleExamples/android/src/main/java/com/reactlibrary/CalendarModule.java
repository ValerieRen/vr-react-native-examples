package com.reactlibrary;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;
import com.facebook.react.bridge.Callback;

public class CalendarModule extends ReactContextBaseJavaModule {
    
    private final ReactApplicationContext reactContext;
    
    public CalendarModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location, Callback successCallback) {
        String response = "Create event called with name: " + name + " and location: " + location;
        successCallback.invoke(response);
        Log.d("calendar", response);
    }
}