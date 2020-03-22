import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {THEME} from "../THEME";
import {AppCard} from "../components/ui/AppCard";
import {EditModal} from "../components/EditModal";

export const TodoScreen = ({goBack, todo, removeTodo, onSave}) => {
    const [modal, setModal] = useState(false);
    const saveHandler = title => {
        onSave(todo.id, title);
        setModal(false);
    };
    return (
        <View style={styles.block}>
            <EditModal value={todo.title}
                       visible={modal}
                       onSave={saveHandler}
                       closeModal={() => setModal(false)}/>
            <View style={styles.content}>
                <AppCard style={styles.card}>
                    <Text style={styles.title}>{todo.title}</Text>
                    <Button title={"Ред."}
                            onPress={() => {
                                setModal(true)
                            }}/>
                </AppCard>
            </View>
            <View style={styles.buttonsWrapper}>
                <View style={styles.button}>
                    <Button color={THEME.BACK}
                            title={"Назад"}
                            onPress={goBack}/>
                </View>
                <View style={styles.button}>
                    <Button color={THEME.REMOVE}
                            title={"Удалить"}
                            onPress={() => removeTodo(todo.id)}/>
                </View>
            </View>
        </View>
    )
};

let styles = StyleSheet.create({
    block: {
        flex: 1
    },
    buttonsWrapper: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        width: "45%"
    },
    content: {
        flexGrow: 1
    },
    title: {
        fontSize: 20
    },
    card: {
        marginBottom: 20,
    }
});