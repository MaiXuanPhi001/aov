import React from 'react'
import Box from '@commom/Box'
import { theme } from '@theme/index'
import Txt from '@commom/Txt'
import { ItemGetParent } from '@interface/marketing'

interface Props {
    item: ItemGetParent,
    index: number,
}

const TableUserF1 = ({ item, index }: Props) => {
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
                width={50}
            >
                <Txt size={sizeText}>{index + 1}</Txt>
            </Box>

            <Box
                paddingHorizontal={5}
                width={200}
            >
                <Txt size={sizeText} numberOfLines={10}>{item.userName}</Txt>
            </Box>

            <Box
                paddingHorizontal={5}
                width={200}
            >
                <Txt size={sizeText}>{item.email}</Txt>
            </Box>

            <Box
                alignCenter
                width={150}
            >
                <Txt size={sizeText}>{item.referral}</Txt>
            </Box>

            <Box
                alignCenter
                width={70}
            >
                <Txt size={sizeText}>{item.level}</Txt>
            </Box>

            <Box
                alignCenter
                width={120}
            >
                <Txt size={sizeText} numberOfLines={10}>{item.commissionBalance}</Txt>
            </Box>

            <Box
                alignCenter
                width={200}
            >
                <Txt size={sizeText}>{item.created_at}</Txt>
            </Box>
        </Box>
    )
}

export default TableUserF1