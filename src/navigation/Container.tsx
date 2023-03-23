import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from './navigationRef'
import routes from '@util/routes'
import Hello from '@screen/Hello'
import MainNavigation from './MainNavigation'

const Stack = createNativeStackNavigator()

const Container = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={routes.HELLO} component={Hello} />
                <Stack.Screen name={routes.MAIN_NAVIGATION} component={MainNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Container