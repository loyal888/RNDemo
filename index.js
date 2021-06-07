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


class HelloWorld extends React.Component {

   _onPressButton() {
    Alert.alert('You tapped the button!')
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