import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import Img from '@commom/Img'
import { theme } from '@theme/index'
import Btn from '@commom/Btn'

type Props = {
    time: {
        number: number,
        timeType: string,
    },
    timeLimit: number,
    onChangeTimeLimit: Function,
}

const ItemTimeLimit = ({ time, timeLimit, onChangeTimeLimit }: Props) => {
    return (
        <Btn onPress={() => onChangeTimeLimit(time)}>
            <Box
                backgroundColor={time.number === timeLimit ? theme.colors.red_oclock : '#008001'}
                width={15}
                height={15}
                alignCenter
                justifyCenter
                radius={50}
            >
                <Txt
                    size={12}
                    color={'white'}
                    bold
                >
                    ?
                </Txt>
            </Box>

            <Img
                source={time.number === timeLimit ?
                    require('@images/wingo/red_oclock.png') :
                    require('@images/wingo/green-oclock.png')}
                width={28}
                height={28}
                marginVertical={10}
            />
            <Txt
                bold
                color={time.number === timeLimit ? theme.colors.red_oclock : 'white'}
                size={12}
            >
                {time.number + ' phút'}
            </Txt>
        </Btn>
    )
}

export default ItemTimeLimit