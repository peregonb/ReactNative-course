import React, { useContext } from 'react'
import { FlatList, Image, StyleSheet, View } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import { THEME } from '../THEME'
import { withUpdatesOnRotation } from '../components/hoc/withUpdatesOnRotation'
import { TodoContext } from '../context/todo/todoContext'
import { ScreenContext } from '../context/screen/screenContext'

export const MainScreenContent = ({ vw }) => {
    const { addTodo, todos, removeTodo } = useContext(TodoContext)
    const { changeScreen } = useContext(ScreenContext)
    let content = (
        <View style={{ width: 100 * vw - THEME.PADDING_HORIZONTAL * 2 }}>
            <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={todos}
                renderItem={({ item }) => <Todo onOpen={changeScreen} todo={item} removeTodo={removeTodo} />}
            />
        </View>
    )

    if (!todos.length) {
        content = (
            <View style={styles.imgWrap}>
                <Image style={styles.img} source={require('../../assets/no-items.png')} />
            </View>
        )
    }

    return (
        <View style={styles.block}>
            <AddTodo onSubmit={addTodo} />
            {content}
        </View>
    )
}

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
        opacity: 0.5,
    },
})

export const MainScreen = withUpdatesOnRotation(MainScreenContent)
