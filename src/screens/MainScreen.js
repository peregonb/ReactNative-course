import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";

export const MainScreen = ({addTodo, todos, removeTodo}) => {
    return (
        <View style={styles.block}>
            <AddTodo onSubmit={addTodo}/>
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={todos}
                renderItem={({item}) => <Todo todo={item} removeTodo={removeTodo}/>}
            />
        </View>
    )
};

let styles = StyleSheet.create({
    block: {}
});