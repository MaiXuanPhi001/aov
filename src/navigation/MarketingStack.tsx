import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from '@util/routes'
import Marketing from '@screen/Marketing'

const Stack = createNativeStackNavigator()

const MarketingStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={routes.MARKETING} component={Marketing} />
        </Stack.Navigator>
    )
}

export default MarketingStack