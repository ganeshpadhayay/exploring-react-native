import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Loader from './Loader';
import Colors from './colors';

const RnImage = (props) => {
  //Set the dafault or rendering values here
  //Props available are animatorRequired, placeholderSource
  const [animating, setAnimating] = useState(props.animatorRequired || false);
  const [source, setSource] = useState(props.source);
  let placeholderSource = props.placeholderSource;
  let size = props.animatorSize || 'small';
  let color = props.animatorColor || Colors.primary;

  const errorHandler = (eror) => {
    setAnimating(false);
    setSource(placeholderSource);
  };

  const completionHanlder = () => {
    setAnimating(false);
  };

  return (
    <View style={{...props.style, ...styles.container}}>
      <Image
        {...props}
        source={source}
        style={styles.image}
        onError={errorHandler}
        onLoad={completionHanlder}
      />
      <Loader animating={animating} color={color} size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'absolute',
  },
  container: {
    overflow: 'hidden',
  },
});

export default RnImage;
