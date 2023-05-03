import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PostContentContainer from './PostContentContainer';
import LowerPostContainer from './LowerPostContainer';

const PostsContainer = () => {
  return (
    <View style={styles.msgBox}>
      <Text>Posts Container</Text>
      <PostContentContainer />
      <LowerPostContainer />
    </View>
  );
};
export default PostsContainer;

const styles = StyleSheet.create({
  msgBox: {
    backgroundColor: '#EAE7DB',
    borderWidth: 2,
    borderColor: '#000',
    padding: 4,
    margin: 5,
    borderRadius: 3,
    width: 340,
    height: 194,
  },
});
