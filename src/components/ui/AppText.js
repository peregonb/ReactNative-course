import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const AppText = (props) => {
    return (
        <Text style={{...styles.default, ...props.style}}>
            {props.children}
        </Text>
    )
};

let styles = StyleSheet.create({
    default: {
        fontFamily: 'roboto-regular'
    }
});