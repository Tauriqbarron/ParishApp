import React from 'react';
import { CustomText } from '../Commmon/CustomText';

// Will import a custom text component 
// the component will be able to be passed the font settings (to be built)
// text component will be with a view 
// view attributes based on Peters figma design.

import {View, StyleSheet, Text} from 'react-native';

const PostAuthorContainer = () => {
  return( 
  <View style={styles.nameBox}>
    <CustomText  ></CustomText>
  </View>
    )
}

const styles = StyleSheet.create({
  nameBox:{
    width: 100px,
    height: 23px,

  }
})