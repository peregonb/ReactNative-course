import React from 'react'
import { Alert, Modal, StyleSheet, TextInput, View } from 'react-native'
import { THEME } from '../THEME'
import { AppButton } from './ui/AppButton'
import { withUpdatesOnRotation } from './hoc/withUpdatesOnRotation'

const EditModalContent = ({ visible, closeModal, value, onSave, vw }) => {
    const [title, setTitle] = React.useState(value)

    const saveHandler = () => {
        const titleLength = 3
        if (title.trim().length < titleLength) {
            Alert.alert('Ошибка!', `Название меньше ${titleLength} символов.`)
        } else {
            onSave(title)
        }
    }

    const cancelHandler = () => {
        setTitle(value)
        closeModal()
    }

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
            width: 80 * vw,
            color: '#000',
            textDecorationLine: 'none',
        },
        buttons: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 80 * vw,
            marginTop: 20,
        },
        button: {
            width: '45%',
        },
    })

    return (
        <Modal style={styles.modal} visible={visible} animationType={'slide'} transparent={false}>
            <View style={styles.block}>
                <TextInput
                    style={styles.input}
                    placeholder={'Введите название'}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    maxLength={64}
                    value={title}
                    onChangeText={setTitle}
                />
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <AppButton color={THEME.REMOVE} onPress={() => cancelHandler()}>
                            Отменить
                        </AppButton>
                    </View>
                    <View style={styles.button}>
                        <AppButton onPress={() => saveHandler()}>Сохранить</AppButton>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export const EditModal = withUpdatesOnRotation(EditModalContent)
