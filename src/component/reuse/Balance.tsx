import { StyleSheet } from 'react-native'
import React from 'react'
import Box from '@commom/Box'
import Img from '@commom/Img'
import Txt from '@commom/Txt'
import Btn from '@commom/Btn'
import { styled } from '@theme/styled'
import { theme } from '@theme/index'
import { numberWithCommas } from '@method/format'
import LoadingRed from '@reuse/LoadingRed'
import { Profile } from '@interface/user'
import { loadingUserSelector, profileSelector } from '@selector/userSelector'
import { useAppSelector } from '@hooks/index'
import { navigate } from '@navigation/navigationRef'
import routes from '@util/routes'

const Balance = () => {
    const profile: Profile = useAppSelector<any>(profileSelector)
    const loading = useAppSelector<boolean>(loadingUserSelector)

    const IMG = 30

    return (
        <Box
            backgroundColor={'white'}
            padding={20}
            radius={10}
            marginTop={15}
            style={styled.shadow}
        >
            <Box
                row
                justifySpaceBetween
            >
                <Box
                    row
                    alignCenter
                >
                    <Img
                        source={require('@images/account/icon_wallet.png')}
                        width={IMG}
                        height={IMG}
                        marginRight={5}
                    />
                    <Txt bold size={15}>Số dư</Txt>
                </Box>

                {loading ?
                    <LoadingRed size={30} /> :
                    <Txt bold size={20}>{numberWithCommas(profile.balance)} đ</Txt>
                }

            </Box>

            <Box
                row
                justifySpaceBetween
                marginTop={10}
            >
                <Btn
                    onPress={() => navigate(routes.WITHDRAW_VND)}
                    backgroundColor={'#ffce21'}
                    paddingVertical={10}
                    paddingHorizontal={40}
                    radius={20}
                >
                    <Txt bold>RÚT TIỀN</Txt>
                </Btn>

                <Btn
                    onPress={() => navigate(routes.DEPOSIT_VND)}
                    backgroundColor={theme.colors.textRed}
                    paddingVertical={10}
                    paddingHorizontal={40}
                    radius={20}
                >
                    <Txt bold color={'white'}>NẠP TIỀN</Txt>
                </Btn>
            </Box>
        </Box>
    )
}

export default Balance

const styles = StyleSheet.create({})