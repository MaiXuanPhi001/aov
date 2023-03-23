import React from 'react'
import Box from '@commom/Box'
import Img from '@commom/Img'
import Txt from '@commom/Txt'
import Btn from '@commom/Btn'
import { theme } from '@theme/index'

type Props = {
    userName: string,
    email: string,
    onOpenBottomSheet: Function,
}

const User = ({ userName, email, onOpenBottomSheet }: Props) => {
    const AVATAR = 50
    const EDIT = 20

    return (
        <Box
            row
            backgroundColor={'white'}
            marginTop={10}
            padding={20}
            radius={10}
            justifySpaceBetween
            alignCenter
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

                <Box>
                    <Txt bold size={15}>{userName}</Txt>
                    <Txt color={theme.colors.gray}>{email}</Txt>
                </Box>
            </Box>

            <Btn
                onPress={onOpenBottomSheet}
                borderWidth={1}
                padding={7}
                radius={50}
                borderColor={theme.colors.gray3}
            >
                <Img
                    source={require('@images/account/edit.png')}
                    width={EDIT}
                    height={EDIT}
                />
            </Btn>
        </Box>
    )
}

export default User