import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import BookComponent from './src/core/presentation/BookComponent';

const App = () => {
  return (
    <>
      <View style={styles.body}>
        <Text>Hello</Text>
      </View>
      <BookComponent />
    </>
  );
};

const styles = StyleSheet.create({
  body: {},
});

export default App;
