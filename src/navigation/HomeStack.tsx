import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Aov from '@screen/Aov'
import DepositVND from '@screen/DepositVND'
import Home from '@screen/Home'
import Tutorial from '@screen/Tutorial'
import WinGo from '@screen/WinGo'
import WithdrawVND from '@screen/WithdrawVND'
import routes from '@util/routes'
import React from 'react'

const Stack = createNativeStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={routes.HOME} component={Home} />
            <Stack.Screen name={routes.Win_Go} component={WinGo} />
            <Stack.Screen name={routes.Aov} component={Aov} />
            <Stack.Screen name={routes.WITHDRAW_VND} component={WithdrawVND} />
            <Stack.Screen name={routes.TUTORIAL} component={Tutorial} />
            <Stack.Screen name={routes.DEPOSIT_VND} component={DepositVND} />
        </Stack.Navigator>
    )
}

export default HomeStack
