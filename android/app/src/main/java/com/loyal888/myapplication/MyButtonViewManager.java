package com.loyal888.myapplication;

import android.annotation.Nullable;
import android.graphics.Color;
import android.widget.Button;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import java.util.Map;

public class MyButtonViewManager extends SimpleViewManager<Button> {
    private ThemedReactContext mReactContext;

    @Override
    public String getName() {
        return "NativeMyButton";
    }

    @Override
    protected Button createViewInstance(ThemedReactContext reactContext) {

        this.mReactContext = reactContext;
        Button button = new Button(reactContext);
        button.setOnClickListener((v) -> {
            WritableMap params = Arguments.createMap();
            reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                    v.getId(),
                    "onNativeClick", // 与下面注册的要发送的事件名称必须相同
                    params);

        });
        return button;
    }

    // 暴露给 JS 的参数，用于设定名称为“text”的属性，设定 Button 的文字
    @ReactProp(name = "text")
    public void setSrc(Button view, String text) {
        view.setText(text);
    }


    @Nullable
    @Override
    public Map getExportedCustomDirectEventTypeConstants() {
        return MapBuilder.of(
                "onNativeClick", MapBuilder.of("registrationName", "onReactClick"));
        // onNativeClick 是原生要发送的 event 名称，onReactClick 是 JS 端组件中注册的属性方法名称，中间的 registrationName 不可更改
    }

}
