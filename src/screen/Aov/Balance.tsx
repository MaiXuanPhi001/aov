import Box from '@commom/Box'
import Btn from '@commom/Btn'
import Img from '@commom/Img'
import Txt from '@commom/Txt'
import { useAppSelector } from '@hooks/index'
import { Profile } from '@interface/user'
import { numberWithCommas } from '@method/format'
import { navigate } from '@navigation/navigationRef'
import LoadingRed from '@reuse/LoadingRed'
import { loadingUserSelector, profileSelector } from '@selector/userSelector'
import { theme } from '@theme/index'
import routes from '@util/routes'
import React from 'react'
import { ImageBackground } from 'react-native'
const RADIUS = 10
const IMG = 30
const QUANHUY = 25

const Balance = () => {
    const profile: Profile = useAppSelector<any>(profileSelector)
    const loading = useAppSelector<boolean>(loadingUserSelector)

    return (
        <ImageBackground
            source={require('@images/aov/bg-full.png')}
            imageStyle={{ borderRadius: RADIUS, opacity: 0.4 }}
            style={{ marginTop: 15 }}
        >
            <Box
                padding={10}
                radius={RADIUS}
                borderWidth={4}
                borderColor={theme.colors.purple2}
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
                        <Txt bold size={15} color={'white'}>Số dư</Txt>
                    </Box>

                    {loading ?
                        <LoadingRed size={30} /> :
                        <Box row alignCenter>
                            <Txt bold size={20} color={'white'}>{numberWithCommas(profile.balance)}</Txt>
                            <Img
                                source={require('@images/aov/quanhuy.png')}
                                width={QUANHUY}
                                height={QUANHUY}
                                marginLeft={10}
                            />
                        </Box>
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
        </ImageBackground>
    )
}

export default Balance