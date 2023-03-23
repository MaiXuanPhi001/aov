import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'
import Img from '@commom/Img'

const Warning = ({ text }: { text: string }) => {
    return (
        <Box
            row
            padding={10}
            backgroundColor={theme.colors.yellowInfo}
            alignCenter
            marginVertical={3}
        >
            <Img
                source={require('@images/account/infoyellow.png')}
                width={20}
                height={20}
                marginRight={10}
            />
            <Box marginRight={30}>
                <Txt numberOfLines={10}>{text}</Txt>
            </Box>
        </Box>
    )
}

export default Warning