import React, {useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {Alert, Platform, StatusBar, StyleSheet, View} from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {TodoScreen} from "./src/screens/TodoScreen";
import {MainScreen} from "./src/screens/MainScreen";
import {THEME} from "./src/THEME";

const loadApp = async () => {
    await Font.loadAsync({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
    });
};

export default function App() {
    const [todos, setTodos] = useState([
        {id: "1", title: "Выучить react native"}]);
    const [todoId, setTodoId] = useState(null);
    const [isReady, setIsReady] = useState(false);
    const statusBar = <StatusBar barStyle={Platform.OS === 'ios' ? "dark-content" : "light-content"}/>;

    if (!isReady) {
        return <AppLoading startAsync={loadApp}
                           onError={err => console.log(err)}
                           onFinish={() => setIsReady(true)}/>
    }

    const addTodo = title => {
        setTodos(prev => [
            {
                id: Date.now().toString(),
                title
            },
            ...prev
        ])
    };
    const removeTodo = todoId => {
        const todo = todos.filter(t => t.id === todoId)[0];
        Alert.alert(
            'Удаление элемента',
            `Вы уверены что хотите удалить: "${todo.title}"?`,
            [
                {
                    text: 'Отмена',
                    style: 'cancel',
                },
                {
                    text: 'Удалить', onPress: () => {
                        setTodoId(null);
                        setTodos(prev => prev.filter(todo => todo.id !== todoId));
                    },
                    style: 'destructive'
                },
            ],
            {cancelable: false},
        );
    };
    const renameTodo = (id, title) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                todo.title = title;
            }
            return todo;
        }));
    };

    let content = <MainScreen onOpen={id => {
        setTodoId(id)
    }} addTodo={addTodo} removeTodo={removeTodo} todos={todos}/>;

    if (todoId) {
        const todo = todos.find(selected => selected.id === todoId);
        content = <TodoScreen onSave={renameTodo} removeTodo={removeTodo} todo={todo} goBack={() => setTodoId(null)}/>
    }

    return (
        <View style={styles.container}>
            {statusBar}
            <Navbar/>
            <View style={styles.wrapper}>
                {content}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: {
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: 10,
        flex: 1,
        marginBottom: 10
    },
});
