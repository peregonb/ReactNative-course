import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";

export default function App() {
    const [todos, setTodos] = useState([
        {id: "1", title: "выучить react native"},
        {id: "2", title: "написать приложение"}]);
    const [todoId, setTodoId] = useState("2");

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

    let content = <MainScreen onOpen={id => {
        setTodoId(id)
    }} addTodo={addTodo} removeTodo={removeTodo} todos={todos}/>;

    if (todoId) {
        const todo = todos.find(selected => selected.id === todoId);
        content = <TodoScreen removeTodo={removeTodo} todo={todo} goBack={() => setTodoId(null)}/>
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
