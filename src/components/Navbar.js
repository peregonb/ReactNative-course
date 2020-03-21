import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {THEME} from "../THEME";

export const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>Todo App </Text>
        </View>
    )
};

let styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: THEME.MAIN,
        paddingBottom: 10
    },
    text: {
        color: "#fff",
        textTransform: 'uppercase',
        fontSize: 16
    }
});