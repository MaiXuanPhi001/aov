import React from 'react'
import Box from '@commom/Box'
import { theme } from '@theme/index'
import Txt from '@commom/Txt'
import { ItemHistoryCommission } from '@interface/marketing'
import { numberWithCommas } from '@method/format'

interface Props {
    history: ItemHistoryCommission,
    index: number,
}

const Table = ({ history, index }: Props) => {
    const sizeText = 13

    return (
        <Box
            row
            backgroundColor={'white'}
            alignCenter
            height={45}
            borderBottomWidth={0.5}
            borderColor={theme.colors.gray2}
        >
            <Box
                alignCenter
                width={'15%'}
            >
                <Txt size={sizeText}>{index + 1}</Txt>
            </Box>

            <Box
                paddingHorizontal={5}
                width={'35%'}
            >
                <Txt size={sizeText} numberOfLines={10}>{history.email}</Txt>
            </Box>

            <Box
                alignCenter
                width={'25%'}
            >
                <Txt size={sizeText}>{numberWithCommas(history.amountReceive)}</Txt>
            </Box>

            <Box
                alignCenter
                width={'25%'}
            >
                <Txt size={sizeText}>{history?.created_at?.split(' ').slice(0, -1).join(' ')}</Txt>
                <Txt size={sizeText}>{history?.created_at?.split(' ').slice(-1).join(' ')}</Txt>
            </Box>
        </Box>
    )
}

export default Table