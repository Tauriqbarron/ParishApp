import React from 'react';
import { StyleSheet, Text } from 'react-native/types';

// should return a text component
// component needs to be able to recieve font settings and set them.


export const CustomText = (props) => {
    return (
        <Text style = {[styles.customText, {props.font-size, props.font-family, props.colour}]}>props.text</Text>
    );
}


const styles = StyleSheet.create({
    customText: {},
})