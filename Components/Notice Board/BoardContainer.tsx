import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PostsContainer from './PostsContatainer';
const BoardContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Board Container</Text>
      <PostsContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '99%',
    height: '98%',
    borderColor: 'black',
    borderWidth: 3,
  },
  text: {
    fontSize: 20,
  },
});
export default BoardContainer;
