import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";
import {THEME} from '../THEME'
import {withUpdatesOnRotation} from "../components/hoc/withUpdatesOnRotation";

export const MainScreenContent = ({addTodo, todos, removeTodo, onOpen, vw}) => {

    let content = (
        <View style={{width: 100 * vw - THEME.PADDING_HORIZONTAL * 2}}>
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={todos}
                renderItem={({item}) => <Todo onOpen={onOpen} todo={item} removeTodo={removeTodo}/>}
            />
        </View>
    );

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


export const MainScreen = withUpdatesOnRotation(MainScreenContent);