import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'

type Props = {
    title: string,
    value: string | number,
    bold?: boolean,
    color?: string,
}

const PlaceABetDetailComponent = ({ title, value, bold = false, color = 'black' }: Props) => {
    return (
        <Box
            row
            height={40}
            width={'100%'}
            borderBottomWidth={1}
            alignCenter
            borderColor={theme.colors.gray3}
        >
            <Box
                flex={1}
                paddingHorizontal={10}
                borderRightWidth={1}
                height={'100%'}
                justifyCenter
                borderColor={theme.colors.gray3}
                backgroundColor={'#fafafa'}
            >
                <Txt>{title}</Txt>
            </Box>

            <Box
                flex={1}
                paddingHorizontal={10}
                height={'100%'}
                justifyCenter
            >
                <Txt bold={bold} color={color}>{value}</Txt>
            </Box>
        </Box>
    )
}

export default PlaceABetDetailComponent