import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import Colors from './colors';

const Loader = (props) => {
  //Set the dafault or rendering values here
  //Props available are animating, passTouches, color, size, backgroundColor
  let passTouches = props.passTouches || false;
  let animating = props.animating || false;
  let color = props.color || Colors.primary;
  let size = props.size || 'large';
  let pointerEvents = animating ? (passTouches ? 'none' : 'auto') : 'none';
  let backgroundColor = animating ? props.backgroundColor : 'rgba(0, 0, 0, 0)';

  return (
    <View
      style={[styles.container, {backgroundColor: backgroundColor}]}
      pointerEvents={pointerEvents}>
      <ActivityIndicator animating={animating} color={color} size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});

export default Loader;
