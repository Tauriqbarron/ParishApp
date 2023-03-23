mport React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const PostsContainer = () => {
  return( 
  <View style={styles.msgBox}>
    <Text>"Lets see what this text looks like</Text>
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
    position: absolute;
    width: 340px;
    
  }
})