import React, { useContext } from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { Navbar } from './components/Navbar'
import { MainScreen } from './screens/MainScreen'
import { TodoScreen } from './screens/TodoScreen'
import { THEME } from './THEME'
import { ScreenContext } from './context/screen/screenContext'

export const MainLayout = () => {
    const statusBar = <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} />
    const { todoId } = useContext(ScreenContext)

    return (
        <View style={styles.container}>
            {statusBar}
            <Navbar />
            <View style={styles.wrapper}>{todoId ? <TodoScreen /> : <MainScreen />}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: 10,
        flex: 1,
        marginBottom: 10,
    },
})
