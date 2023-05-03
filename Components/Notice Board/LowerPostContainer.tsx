import React from 'react';
import {StyleSheet, View} from 'react-native';
import PostAuthorContainer from './PostAuthorContainer';
import PostDateContainer from './PostDateContainer';

const LowerPostContainer = () => {
  return (
    <View style={styles.lowerPost}>
      <PostDateContainer />
      <PostAuthorContainer />
    </View>
  );
};

export default LowerPostContainer;

const styles = StyleSheet.create({
  lowerPost: {
    width: '100%',
    flexDirection: 'row-reverse',
  },
});
