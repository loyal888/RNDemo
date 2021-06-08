import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    NativeModules
} from 'react-native';

import {Alert, Button} from 'react-native';
import {DeviceEventEmitter} from 'react-native';
import {requireNativeComponent, View} from 'react-native';

let MyButton = requireNativeComponent('NativeMyButton');

const ToastExample = NativeModules.ToastExample;

// Promise
function callAndroidPromise() {
    ToastExample.rnCallNativePromise('RN Promise 调用 Android 原生~~')
        .then((msg) => {
            Alert.alert('promise 收到消息', msg)
        })
        .catch((error) => {
        })
}

// callback
function callAndroidCallback() {
    ToastExample.rnCallNativeCallback((x, y) => {
        Alert.alert('callback 收到消息', x + ',' + y)
    }, (error) => {
    })
}


class HelloWorld extends React.Component {

    _onPressButton() {
        // Alert.alert('You tapped the button!')
        ToastExample.show('Awesome', ToastExample.SHORT);
    }

    componentDidMount() {
        // 收到监听
        this.listener = DeviceEventEmitter.addListener('SUCCESS', (message) => {
            // 收到监听后想做的事情，’SUCCESS‘ 必须与原生层传递的 eventName 一致
            console.error(message);
        });
        this.errorListener = DeviceEventEmitter.addListener('ERROR', (message) => {
            // 收到监听后想做的事情，’ERROR‘ 必须与原生层传递的 eventName 一致
        });
    }

    componentWillUnmount() {
        // 移除监听
        if (this.listener) {
            this.listener.remove()
        }
        if (this.errorListener) {
            this.listener.remove()
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Press Me"/>
                    <Button title='call_android_promise' onPress={callAndroidPromise}/>
                    <Button title='call_android_callback' onPress={callAndroidCallback}/>
                    <MyButton style={{width: 160, height: 50}} text='这是个按钮'
                    onReactClick={data=>{
                              // 这里接收 event 传过来的数据
                              console.error(data);
                          }}
                    />
                </View>

            </View>
    )
        ;
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})


AppRegistry.registerComponent(
    'MyReactNativeApp',
    () => HelloWorld
);