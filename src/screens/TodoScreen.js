import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {THEME} from "../THEME";
import {AppCard} from "../components/ui/AppCard";
import {EditModal} from "../components/EditModal";
import {AppText} from "../components/ui/AppText";
import {AppButton} from "../components/ui/AppButton";
import {FontAwesome} from '@expo/vector-icons';

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
                    <AppText style={styles.title}>{todo.title}</AppText>
                    <AppButton onPress={() => setModal(true)}>
                        <FontAwesome name={'edit'} size={20}/>
                    </AppButton>
                </AppCard>
            </View>
            <View style={styles.buttonsWrapper}>
                <View style={styles.button}>
                    <AppButton color={THEME.BACK} onPress={goBack}>Назад</AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton color={THEME.REMOVE} onPress={() => removeTodo(todo.id)}>Удалить</AppButton>
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