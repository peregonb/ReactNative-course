import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";

export default function App() {
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
        setTodos(prev => prev.filter(todo => todo.id !== todoId));
    };

    let content = <MainScreen addTodo={addTodo} removeTodo={removeTodo} todos={todos}/>;

    if (todoId) {
        content = <TodoScreen/>
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
