import React from 'react';
import { StyleSheet, Text } from 'react-native/types';

// should return a text component
// component needs to be able to recieve font settings and set them.
type Props = {
    font-size: number,
    font-family: string,
    colour: string,
    text: string
};

export const CustomText = ({
    font-size,
    font-family,
    colour,
    text

}: Props) => {
    return (
        <Text style = {[styles.customText, {font-size, font-family, colour}]}>text</Text>
    );

}


const styles = StyleSheet.create({
    customText: {},
})