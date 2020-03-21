import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {THEME} from "../THEME";

export const TodoScreen = ({goBack, todo, removeTodo}) => {
    return (
        <View style={styles.block}>
            <Text>{todo.title}</Text>
            <View style={styles.buttonsWrapper}>
                <View style={styles.button}>
                    <Button color={THEME.BACK} title={"Назад"} onPress={goBack}/>
                </View>
                <View style={styles.button}>
                    <Button color={THEME.REMOVE} title={"Удалить"} onPress={console.log("remove")}/>
                </View>
            </View>
        </View>
    )
};

let styles = StyleSheet.create({
    block: {},
    buttonsWrapper: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        width: "45%"
    }
});