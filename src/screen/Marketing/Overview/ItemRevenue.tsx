import React from 'react'
import { Revenue } from './dataOverview'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'

interface Props {
    revenue: Revenue,
}

const ItemRevenue = ({ revenue }: Props) => {
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
                width={'21%'}
            >
                <Txt size={sizeText}>Thành viên</Txt>
                <Txt size={sizeText}>Cấp {revenue.level}</Txt>
            </Box>

            <Box
                alignCenter
                width={'19%'}
            >
                <Txt size={sizeText}>{revenue.people}</Txt>
            </Box>

            <Box
                alignCenter
                width={'30%'}
            >
                <Txt size={sizeText}>{revenue.teamRevenue}</Txt>
            </Box>

            <Box
                alignCenter
                width={'30%'}
            >
                <Txt size={sizeText}>{revenue.teamDeposit}</Txt>
            </Box>
        </Box>
    )
}

export default ItemRevenue