import React from 'react';
import {Alert, Button, Modal, StyleSheet, TextInput, View} from 'react-native';
import {THEME} from '../THEME';

export const EditModal = ({visible, closeModal, value, onSave}) => {
    const [title, setTitle] = React.useState(value);

    const saveHandler = () => {
        const titleLength = 3;
        if (title.trim().length < titleLength) {
            Alert.alert('Ошибка!', `Название меньше ${titleLength} символов.`);
        } else {
            onSave(title);
        }
    };

    return (
        <Modal style={styles.modal}
               visible={visible}
               animationType={'slide'}
               transparent={false}>
            <View style={styles.block}>
                <TextInput style={styles.input}
                           placeholder={'Введите название'}
                           autoCapitalize={'none'}
                           autoCorrect={false}
                           maxLength={64}
                           value={title}
                           onChangeText={setTitle}
                />
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button color={THEME.REMOVE}
                                title={"Отменить"}
                                onPress={() => closeModal()}/>
                    </View>
                    <View style={styles.button}>
                        <Button title={"Сохранить"} onPress={() => saveHandler()}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
};

let styles = StyleSheet.create({
    block: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN,
        borderBottomWidth: 2,
        width: '80%',
        color: '#000',
        textDecorationLine: 'none'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginTop: 20
    },
    button: {
        width: '45%'
    }
});