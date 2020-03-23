import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {AppText} from "./ui/AppText";

export const Todo = ({todo, removeTodo, onOpen}) => {
    return (
        <TouchableOpacity activeOpacity={0.5}
                          onPress={() => onOpen(todo.id)}
                          onLongPress={() => removeTodo(todo.id)}>
            <View style={styles.todo}>
                <AppText>{todo.title}</AppText>
            </View>
        </TouchableOpacity>
    )
};

let styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    }
});