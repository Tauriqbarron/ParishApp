import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

// Will import a custom text component
// the component will be able to be passed the font settings (to be built)
// text component will be with a view
// view attributes based on Peters figma design.

const PostAuthorContainer = () => {
  return (
    <View style={styles.nameBox}>
      <Text>Peter Yung</Text>
    </View>
  );
};

export default PostAuthorContainer;
const styles = StyleSheet.create({
  nameBox: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    width: 90,
    height: 23,
    left: 130,
  },
});
