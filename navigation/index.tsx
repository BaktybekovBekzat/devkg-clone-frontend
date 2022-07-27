import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider as ReduxProvider } from 'react-redux'
import store from '../store'
import Vacancies from '../screens/Vacancies'
import Header from '../components/Header'

const Navigation: FC = () => {
    const Stack = createNativeStackNavigator()

    const screenOptions = {
        headerShown: false,
        contentStyle: {
            backgroundColor: '#fff',
        },
    }

    return (
        <ReduxProvider store={store}>
            <Header />
            <NavigationContainer>
                <Stack.Navigator screenOptions={screenOptions}>
                    <Stack.Screen name='Home' component={Vacancies} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    )
}

export default Navigation
