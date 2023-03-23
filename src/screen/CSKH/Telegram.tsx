import React from 'react'
import Box from '@commom/Box'
import Img from '@commom/Img'
import Txt from '@commom/Txt'
import Btn from '@commom/Btn'
import { Linking } from 'react-native'

const Telegram = () => {
    return (
        <Btn
            onPress={() => Linking.openURL('https://t.me/SP92LOTTERY')}
            row
            width={'100%'}
            alignCenter
            justifySpaceBetween
            marginVertical={20}
        >
            <Box 
                row
                alignCenter
            >
                <Img
                    source={require('@images/account/telegram.png')}
                    height={30}
                    width={30}
                    marginRight={10}
                />
                <Txt bold size={16}>Telegram</Txt>
            </Box>

            <Img
                source={require('@images/account/next.png')}
                height={15}
                width={15}
            />
        </Btn>
    )
}

export default Telegram