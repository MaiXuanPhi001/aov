import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from '@util/routes'
import Account from '@screen/Account'
import ChangePassword from '@screen/ChangePassword'
import Tutorial from '@screen/Tutorial'
import CSKH from '@screen/CSKH'
import HistoryDepositVnd from '@screen/HistoryDepositVnd'
import WithdrawVND from '@screen/WithdrawVND'
import WithdrawVNDHistory from '@screen/WithdrawVNDHistory'
import DepositVND from '@screen/DepositVND'

const Stack = createNativeStackNavigator()

const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.Account} component={Account} />
        <Stack.Screen name={routes.CHANGE_PASSWORD} component={ChangePassword} />
        <Stack.Screen name={routes.TUTORIAL} component={Tutorial} />
        <Stack.Screen name={routes.CSKH} component={CSKH} />
        <Stack.Screen name={routes.HISTORY_DEPOSIT_VND} component={HistoryDepositVnd} />
        <Stack.Screen name={routes.WITHDRAW_VND} component={WithdrawVND} />
        <Stack.Screen name={routes.WITHDRAW_VND_HISTORY} component={WithdrawVNDHistory} />
        <Stack.Screen name={routes.DEPOSIT_VND} component={DepositVND} />
    </Stack.Navigator>
  )
}

export default AccountStack