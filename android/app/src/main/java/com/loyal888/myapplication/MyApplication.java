package com.loyal888.myapplication;

import android.app.Application;

import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.List;

/**
 * @author huyunsong
 * @date 6/7/21 2:13 PM
 */
public class MyApplication extends Application implements ReactApplication {
    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, false);
    }

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            List<ReactPackage> packages = new PackageList(this).getPackages();
            // Packages that cannot be autolinked yet can be added manually here
            packages.add(new CustomToastPackage());
            return packages;
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }
}
