import React from 'react'
import Box from '@commom/Box'
import { theme } from '@theme/index'
import Txt from '@commom/Txt'
import { ItemGetParent } from '@interface/marketing'

interface Props {
    item: ItemGetParent,
    index: number,
}

const ItemAccountManager = ({ item, index }: Props) => {
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
                width={'30%'}
                paddingHorizontal={5}
            >
                <Txt size={sizeText} numberOfLines={10}>{item.userName}</Txt>
            </Box>

            <Box
                paddingHorizontal={5}
                width={'30%'}
            >
                <Txt size={sizeText} numberOfLines={10}>{item.userNameParent}</Txt>
            </Box>

            <Box
                alignCenter
                paddingHorizontal={5}
                width={'25%'}
            >
                <Txt size={sizeText} numberOfLines={10}>{item.commissionBalance}</Txt>
            </Box>
        </Box>
    )
}

export default ItemAccountManager