import React from 'react'
import Box from '@commom/Box'
import Img from '@commom/Img'
import Txt from '@commom/Txt'
import { styled } from '@theme/styled'
import { numberWithCommas } from '@method/format'
import { useAppSelector } from '@hooks/index'
import { loadingUserSelector, profileSelector } from '@selector/userSelector'
import { Profile } from '@interface/user'
import LoadingRed from './LoadingRed'

const BalanceBasic = () => {
    const profile: Profile = useAppSelector<any>(profileSelector)
    const loading = useAppSelector<boolean>(loadingUserSelector)

    return (
        <Box
            row
            alignCenter
            marginTop={15}
            style={styled.shadow}
            backgroundColor={'white'}
            radius={10}
            padding={20}
            justifySpaceBetween
        >
            <Box
                row
                alignCenter
            >
                <Img
                    source={require('@images/account/icon_wallet.png')}
                    width={40}
                    height={40}
                    marginRight={5}
                />
                <Txt bold size={15}>Số dư</Txt>
            </Box>
            {loading ?
                <LoadingRed /> :
                <Txt bold size={20}>{numberWithCommas(profile?.balance)} đ</Txt>
            }
        </Box>
    )
}

export default BalanceBasic