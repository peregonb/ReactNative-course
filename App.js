import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Navbar} from "./src/Navbar";
import {AddTodo} from "./src/AddTodo";
import {Todo} from "./src/Todo";

export default () => {
    const [todos, setTodos] = useState([]);

    const addTodo = title => {
        // const newTodo = {
        //     id: Date.now().toString(),
        //     title: title
        // };
        // setTodos(todos.concat([newTodo])) мутирующа
        // setTodos((prevTodos) => {
        //     return [
        //         ...prevTodos,
        //         newTodo
        //     ]
        // })

        setTodos(prev => [...prev,
            {
                id: Date.now().toString(),
                title
            }
        ])
    };

    return (
        <View style={styles.container}>
            <Navbar/>
            <View style={styles.wrapper}>
                <AddTodo onSubmit={addTodo}/>

                <View>
                    {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {},
    wrapper: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
});
