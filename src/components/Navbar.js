import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { THEME } from '../THEME'
import { AppTextBold } from './ui/AppTextBold'

export const Navbar = () => {
    return (
        <View
            style={{
                ...styles.navbar,
                ...Platform.select({
                    ios: styles.navbarIOS,
                    android: styles.navbarAndroid,
                }),
            }}
        >
            <AppTextBold style={styles.text}>Todo App </AppTextBold>
        </View>
    )
}

let styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',

        paddingBottom: 10,
    },
    navbarAndroid: {
        backgroundColor: THEME.MAIN,
    },
    navbarIOS: {
        borderBottomColor: THEME.MAIN,
        borderBottomWidth: 1,
    },
    text: {
        color: Platform.OS === 'android' ? '#fff' : THEME.MAIN,
        textTransform: 'uppercase',
        fontSize: 16,
    },
})
