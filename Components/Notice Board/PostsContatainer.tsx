import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const PostsContainer = () => {
  return( 
  <View style={styles.msgBox}>
    <PostContentContainer></PostContentContainer>
  </View>
    )
}

const styles = StyleSheet.create({
  msgBox:{
    backgroundColor: '#EAE7DB',
    borderWidth: 2px,
    borderColor: '#000',
    padding: 4px,
    margin: 5px,
    borderRadius: 3px,
    width: 340px,
    height: 194px,
  }
})