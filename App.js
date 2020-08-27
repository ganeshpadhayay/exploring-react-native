import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import BookComponent from './src/core/presentation/BookComponent';

import codePush from 'react-native-code-push';

const App = () => {
  return (
    <>
      <View style={styles.body}>
        <Text>Hello World</Text>
      </View>
      <BookComponent />
    </>
  );
};

const styles = StyleSheet.create({
  body: {},
});

const codePushOptions = {
  installMode: codePush.InstallMode.IMMEDIATE,
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
};

export default codePush(codePushOptions)(App);
