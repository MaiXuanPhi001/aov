import { StyleSheet } from 'react-native'
import React from 'react'
import Box from '@commom/Box'
import ItemOption from './ItemOption'
import Btn from '@commom/Btn'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'
import { useAppDispatch } from '@hooks/index'
import AsyncStorage from '@react-native-async-storage/async-storage'
import contants from '@util/contants'
import userSlice from '@slice/userSlice'
import { useNavigation } from '@react-navigation/native'
import routes from '@util/routes'

const Option = () => {
    const dispatch = useAppDispatch()

    const navigation = useNavigation<any>()

    const handleLogout = async () => {
        await AsyncStorage.removeItem(contants.TOKEN)
        dispatch(userSlice.actions.signOut())
    }

    return (
        <Box
            marginTop={35}
            paddingHorizontal={10}
        >
            <ItemOption
                icon={require('@images/account/padlock-unlock.png')}
                title={'Đổi mật khẩu'}
                onPress={() => navigation.navigate(routes.CHANGE_PASSWORD)}
            />
            <ItemOption
                icon={require('@images/account/wallet.png')}
                title={'Lịch sử nạp tiền'}
                onPress={() => navigation.navigate(routes.HISTORY_DEPOSIT_VND)}
            />
            <ItemOption
                icon={require('@images/account/credit-card.png')}
                title={'Lịch sử rút tiền'}
                onPress={() => navigation.navigate(routes.WITHDRAW_VND_HISTORY)}
            />
            <ItemOption
                icon={require('@images/account/question.png')}
                title={'Hướng dẫn sử dụng'}
                onPress={() => navigation.navigate(routes.TUTORIAL)}
            />
            <ItemOption
                icon={require('@images/account/headphones.png')}
                title={'CSKH trực tuyến 24/7'}
                onPress={() => navigation.navigate(routes.CSKH)}
            />

            <Btn
                onPress={handleLogout}
                backgroundColor={theme.colors.textRed}
                paddingVertical={10}
                width={180}
                alignSelf={'center'}
                radius={5}
                marginTop={10}
            >
                <Txt color={'white'} bold size={16}>Đăng xuất</Txt>
            </Btn>
        </Box>
    )
}

export default Option

const styles = StyleSheet.create({})