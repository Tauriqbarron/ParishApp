import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Will import a custom text component
// the component will be able to be passed the font settings (to be built)
// Create a view that contains the custom text component.

const PostDateContainer = () => {
  return (
    <View style={styles.dateBox}>
      <Text>3rd May 2023</Text>
    </View>
  );
};

export default PostDateContainer;

const styles = StyleSheet.create({
  dateBox: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    height: 23,
  },
});
