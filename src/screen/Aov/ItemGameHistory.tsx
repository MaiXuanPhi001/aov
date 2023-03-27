import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'
import Img from '@commom/Img'
import { converNumberToImages } from './data'

type History = {
    id: number,
    number: number,
    type: string,
    color: string[],
}

const ItemGameHistory = ({ history }: { history: History }) => {
    const IMG = 40

    return (
        <Box
            row
            alignCenter
            borderBottomWidth={1}
            borderColor={theme.colors.gray3}
            height={50}
        >
            <Box width={'40%'} alignCenter>
                <Txt>{history?.id}</Txt>
            </Box>

            <Box width={'30%'} alignCenter>
                <Img
                    source={converNumberToImages(history.number)}
                    width={IMG}
                    height={IMG}
                />
            </Box>

            <Box width={'30%'} alignCenter>
                <Img
                    source={require('@images/aov/ad2.png')}
                    width={IMG}
                    height={IMG}
                />
            </Box>
        </Box>
    )
}

export default ItemGameHistory