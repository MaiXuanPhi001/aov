import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'
import Img from '@commom/Img'

type Props = {
    title: string,
    value: string | number,
    bold?: boolean,
    color?: string,
    qh?: boolean,
}

const PlaceABetDetailComponent = ({
    title,
    value,
    bold = false,
    color = 'black',
    qh = false,
}: Props) => {
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
                row
                flex={1}
                alignCenter
                paddingHorizontal={10}
                height={'100%'}
                justifyStart
            >
                <Txt bold={bold} color={color}>{value}</Txt>
                {qh &&
                    <Img
                        source={require('@images/aov/quanhuy.png')}
                        width={20}
                        height={20}
                        marginLeft={5}
                    />
                }
            </Box>
        </Box>
    )
}

export default PlaceABetDetailComponent