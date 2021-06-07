package com.loyal888.myapplication;

import android.graphics.Color;
import android.widget.Button;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class MyButtonViewManager extends SimpleViewManager<Button> {
    private ThemedReactContext mReactContext;

    @Override
    public String getName() {
        return "RCTCustomButton";
    }

    @Override
    protected Button createViewInstance(ThemedReactContext reactContext) {

        this.mReactContext = reactContext;
        Button button = new Button(reactContext);
        return button;
    }

    // 暴露给 JS 的参数，用于设定名称为“text”的属性，设定 Button 的文字
    @ReactProp(name = "text")
    public void setSrc(Button view, String text) {
        view.setText(text);
    }
}
