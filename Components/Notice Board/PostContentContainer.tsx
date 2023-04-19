import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';

// Will import a custom text component
// the component will be able to be passed the font settings (to be built)
// Create a scrollview with scrollbar and place text component within scrollview
// attributes based on figma designs.

const PostContentContainer = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <Text>PostContentContainer</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: '90%',
    height: 200,
    backgroundColor: 'F8F9FB',
    borderColor: 'blue',
    borderWidth: 3,
  },
});

export default PostContentContainer;
