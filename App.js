import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {TodoScreen} from "./src/screens/TodoScreen";
import {MainScreen} from "./src/screens/MainScreen";

export default function App() {
    const [todos, setTodos] = useState([
        {id: "1", title: "Выучить react native"}]);
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

    let content = <MainScreen onOpen={id => {
        setTodoId(id)
    }} addTodo={addTodo} removeTodo={removeTodo} todos={todos}/>;

    if (todoId) {
        const todo = todos.find(selected => selected.id === todoId);
        content = <TodoScreen onSave={renameTodo} removeTodo={removeTodo} todo={todo} goBack={() => setTodoId(null)}/>
    }

    return (
        <View style={styles.container}>
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
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        marginBottom: 10
    },
});
