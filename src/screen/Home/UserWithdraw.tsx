import React from 'react'
import Box from '@commom/Box'
import Img from '@commom/Img'
import { theme } from '@theme/index'
import Txt from '@commom/Txt'
import { width } from '@util/responsive'
type Props = {
    user: {
        id: number,
        name: string,
        amount: string,
        time: string,
    }
}

const UserWithdraw = ({ user }: Props) => {
    const AVATAR = 25
    const WIDTH = width - 80

    return (
        <Box
            row
            marginVertical={7}
            alignCenter
            justifySpaceBetween
        >
            <Box
                row
                alignCenter
            >
                <Box
                    borderWidth={1}
                    borderColor={theme.colors.gray3}
                    padding={5}
                    radius={50}
                    marginRight={10}
                >
                    <Img
                        source={require('@images/account/avatar.png')}
                        width={AVATAR}
                        height={AVATAR}
                        radius={50}
                    />
                </Box>
                <Txt width={WIDTH / 3}>{user.name}</Txt>
            </Box>
            <Txt width={WIDTH / 3} color={theme.colors.textRed} bold>{user.amount}</Txt>
            <Txt>{user.time}</Txt>
        </Box>
    )
}

export default UserWithdraw