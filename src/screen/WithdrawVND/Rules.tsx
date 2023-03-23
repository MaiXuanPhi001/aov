import React from 'react'
import Box from '@commom/Box'
import { styled } from '@theme/styled'
import ItemRules from './ItemRules'
import { Profile } from '@interface/user'
import { useAppSelector } from '@hooks/index'
import { profileSelector } from '@selector/userSelector'

type Data = {
    icon: string,
    text: string,
    textBold: string,
}

const Rules = () => {
    const profile: Profile = useAppSelector<any>(profileSelector)

    const data: Data[] = [
        {
            icon: require('@images/account/icon1.png'),
            text: 'Lệ phí: ',
            textBold: '3%',
        },
        {
            icon: require('@images/account/icon2.png'),
            text: 'Tổng cược còn lại: ',
            textBold: '0 đ',
        },
        {
            icon: require('@images/account/icon3.png'),
            text: 'Số lần rút tiền còn lạ: ',
            textBold: profile.numberWithdraw.toString(),
        },
        {
            icon: require('@images/account/icon4.png'),
            text: 'Thời gian rút tiền: ',
            textBold: '00:00 - 23:55',
        },
        {
            icon: require('@images/account/icon5.png'),
            text: 'Phạm vi số tiền rút: ',
            textBold: '50,000 đ - 1,000,000,000 đ',
        },
    ]

    return (
        <Box
            backgroundColor={'white'}
            style={styled.shadow}
            padding={20}
            marginTop={20}
            radius={10}
            marginBottom={20}
        >
            {data.map((db: Data) =>
                <ItemRules
                    key={db.text}
                    icon={db.icon}
                    text={db.text}
                    textBold={db.textBold}
                />
            )}
        </Box>
    )
}

export default Rules