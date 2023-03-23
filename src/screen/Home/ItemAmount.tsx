import React from 'react'
import Box from '@commom/Box'
import Img from '@commom/Img'
import Txt from '@commom/Txt'

type Props = {
    amount: number | string,
    textFirst: string,
    textSecond: string,
    icon: string,
}

const ItemAmount = ({amount, textFirst, textSecond, icon}: Props) => {
    return (
        <Box alignCenter>
            <Img
                source={icon}
                resizeMode={'contain'}
                width={25}
                height={25}
            />
            <Txt color={'white'} bold marginVertical={10}>{amount}</Txt>
            <Txt color={'white'}>{textFirst}</Txt>
            <Txt color={'white'}>{textSecond}</Txt>
        </Box>
    )
}

export default ItemAmount