package com.reactlibrary;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;

public class NativeModulesModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public NativeModulesModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "NativeModule";
    }

    @ReactMethod
    public void multiply(Integer a, Integer b, Promise promise) {
        promise.resolve(a * b);
    }
}
