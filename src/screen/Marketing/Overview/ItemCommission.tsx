import React from 'react'
import { Commission } from './dataOverview'
import Box from '@commom/Box'
import { theme } from '@theme/index'
import Txt from '@commom/Txt'

interface Props {
    commission: Commission
}

const ItemCommission = ({ commission }: Props) => {
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
                width={'30%'}
            >
                <Txt size={sizeText}>Thành viên</Txt>
                <Txt size={sizeText}>Cấp {commission.level}</Txt>
            </Box>

            <Box
                alignCenter
                width={'17%'}
            >
                <Txt size={sizeText}>{commission.level1}</Txt>
            </Box>

            <Box
                alignCenter
                width={'17%'}
            >
                <Txt size={sizeText}>{commission.level2}</Txt>
            </Box>

            <Box
                alignCenter
                width={'17%'}
            >
                <Txt size={sizeText}>{commission.level3}</Txt>
            </Box>

            <Box
                alignCenter
                width={'17%'}
            >
                <Txt size={sizeText}>{commission.level4}</Txt>
            </Box>
        </Box>
    )
}

export default ItemCommission