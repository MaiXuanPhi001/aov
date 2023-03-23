import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'

const Oclock = ({ oclock }: { oclock: string }) => {
    return (
        <Box
            row
            alignCenter
        >
            <Item number={oclock.slice(0, 1)} />
            <Item number={oclock.slice(1, 2)} />
            <Txt bold color={'white'} size={20}>:</Txt>
            <Item number={oclock.slice(3, 4)} />
            <Item number={oclock.slice(4, 5)} />
        </Box>
    )
}

const Item = ({ number }: { number: string }) => {
    return (
        <Box
            width={20}
            height={30}
            backgroundColor={'#c73c45'}
            opacity={0.9}
            justifyCenter
            alignCenter
            marginHorizontal={3}
            radius={5}
            marginTop={5}
        >
            <Txt bold color={'white'} size={16}>{number}</Txt>
        </Box>
    )
}

export default Oclock