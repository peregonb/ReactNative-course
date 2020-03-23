import React from 'react';
import {StyleSheet, TouchableOpacity, View, TouchableNativeFeedback, Platform} from 'react-native';
import {AppTextBold} from "./AppTextBold";
import {THEME} from "../../THEME";

export const AppButton = ({children, onPress, color = THEME.MAIN}) => {
    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    return (
        <Wrapper activeOpacity={0.85} onPress={onPress}>
            <View style={{...styles.button, backgroundColor: color}}>
                <AppTextBold style={styles.text}>
                    {children}
                </AppTextBold>
            </View>
        </Wrapper>
    )
};

let styles = StyleSheet.create({
    button: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff',
        textTransform: 'uppercase'
    }
});