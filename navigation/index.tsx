import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider as ReduxProvider } from 'react-redux'
import store from '../store'
import Vacancies from '../screens/Vacancies'

const Navigation: FC = () => {
    const Stack = createNativeStackNavigator()

    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Home' component={Vacancies} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    )
}

export default Navigation
