import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  NativeModules,
  View
} from 'react-native';

import { Alert, Button} from 'react-native';

const ToastExample = NativeModules.ToastExample;

// Promise
function callAndroidPromise() {
ToastExample.rnCallNativePromise('RN Promise 调用 Android 原生~~')
    .then((msg) => {
        Alert.alert('promise 收到消息', msg)
        console.log("promise 收到消息", msg)
    })
    .catch((error) => {
        console.log(error)
    })
}

// callback
function callAndroidCallback() {
    ToastExample.rnCallNativeCallback((x, y) => {
        Alert.alert('callback 收到消息', x + ',' + y)
        console.log('callback 收到消息', x, y)
    }, (error) => {
        console.log(error)
    })
}



class HelloWorld extends React.Component {

   _onPressButton() {
    // Alert.alert('You tapped the button!')
    ToastExample.show('Awesome', ToastExample.SHORT);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
          <Button title='call_android_promise' onPress={callAndroidPromise}/>

           <Button title='call_android_callback' onPress={callAndroidCallback}/>
        </View>
      </View>
    );
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