import React from 'react';
import { View, StyleSheet } from 'react-native';

// Will import a custom text component 
// the component will be able to be passed the font settings (to be built)
// Create a view that contains the custom text component.

const PostDateContainer = () => {
  return( 
  <View style={styles.postDate}>
    <CustomText  ></CustomText>
  </View>
    )
}

const styles = StyleSheet.create({
  postDate : {
    position: absolute;
    width: 120px;
    height: 23px;
    left: 135px;
    top: 243px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: right;

  }


})
  
export default PostDateContainer;