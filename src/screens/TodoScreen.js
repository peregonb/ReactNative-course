import React, { useContext, useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { THEME } from '../THEME'
import { AppCard } from '../components/ui/AppCard'
import { EditModal } from '../components/EditModal'
import { AppText } from '../components/ui/AppText'
import { AppButton } from '../components/ui/AppButton'
import { FontAwesome } from '@expo/vector-icons'
import { TodoContext } from '../context/todo/todoContext'
import { ScreenContext } from '../context/screen/screenContext'

export const TodoScreen = () => {
    const { todos, renameTodo, removeTodo } = useContext(TodoContext)
    const { todoId, changeScreen } = useContext(ScreenContext)
    const todo = todos.find((t) => t.id === todoId)
    const [modal, setModal] = useState(false)
    const saveHandler = (title) => {
        renameTodo(todo.id, title)
        setModal(false)
    }
    return (
        <View style={styles.block}>
            <EditModal value={todo.title} visible={modal} onSave={saveHandler} closeModal={() => setModal(false)} />
            <View style={styles.content}>
                <AppCard style={styles.card}>
                    <AppText style={styles.title}>{todo.title}</AppText>
                    <AppButton onPress={() => setModal(true)}>
                        <FontAwesome name={'edit'} size={20} />
                    </AppButton>
                </AppCard>
            </View>
            <View style={styles.buttonsWrapper}>
                <View style={styles.button}>
                    <AppButton color={THEME.BACK} onPress={() => changeScreen(null)}>
                        Назад
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton color={THEME.REMOVE} onPress={() => removeTodo(todo.id)}>
                        Удалить
                    </AppButton>
                </View>
            </View>
        </View>
    )
}

let styles = StyleSheet.create({
    block: {
        flex: 1,
    },
    buttonsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: Dimensions.get('window').width / 2.5,
        // width: Dimensions.get('window').width / 2.5 ? 150: 100
    },
    content: {
        flexGrow: 1,
    },
    title: {
        fontSize: 20,
    },
    card: {
        marginBottom: 20,
    },
})
