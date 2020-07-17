import React from 'react';
import {Text, View} from 'react-native';

const Hello = ({name}) => (
  <View>
    <Text testID="greeting">Hello, {name}!</Text>
  </View>
);

export default Hello;
