import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";

export const MainScreen = ({addTodo, todos, removeTodo, onOpen}) => {
    let content = (
        <FlatList
            keyExtractor={item => item.id.toString()}
            data={todos}
            renderItem={({item}) => <Todo onOpen={onOpen} todo={item} removeTodo={removeTodo}/>}
        />);

    if (!todos.length) {
        content = (
            <View style={styles.imgWrap}>
                <Image style={styles.img} source={require('../../assets/no-items.png')}/>
            </View>)
    }

    return (
        <View style={styles.block}>
            <AddTodo onSubmit={addTodo}/>
            {content}
        </View>
    )
};

let styles = StyleSheet.create({
    block: {},
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    img: {
        width: '80%',
        resizeMode: 'contain',
        opacity: 0.5
    }
});