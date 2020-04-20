import React, {useState, useContext} from 'react'
import {View, StyleSheet, StatusBar, Platform, Alert} from "react-native";
import {Navbar} from "./components/Navbar";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/TodoScreen";
import {THEME} from "./THEME";
import {TodoContext} from "./context/todo/todoContext";


export const MainLayout = () => {
    const todosContext = useContext(TodoContext);
    const statusBar = <StatusBar barStyle={Platform.OS === 'ios' ? "dark-content" : "light-content"}/>;
    const [todos, setTodos] = useState([]);
    const [todoId, setTodoId] = useState(null);

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

    let content = <MainScreen
        onOpen={id => setTodoId(id)}
        addTodo={addTodo}
        removeTodo={removeTodo}
        todos={todosContext.todos}/>;

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