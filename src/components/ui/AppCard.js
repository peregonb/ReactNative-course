import React from 'react';
import {View, StyleSheet} from 'react-native';

export const AppCard = (props) => {
    return (
        <View style={{...styles.block, ...props.style}}>
            {props.children}
        </View>
    )
};

let styles = StyleSheet.create({
    block: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: {width: 2, height: 2},
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 6
    }
});