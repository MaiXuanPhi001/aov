import React from 'react'
import { History } from '.'
import Box from '@commom/Box'
import { theme } from '@theme/index'
import Txt from '@commom/Txt'
import Btn from '@commom/Btn'
import { numberWithCommas } from '@method/format'

interface Props {
    history: History,
    onViewDetail: Function,
}

const ItemHistory = ({ history, onViewDetail }: Props) => {
    const sizeText = 14

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
                width={'45%'}
            >
                <Txt size={sizeText}>{history.created_at}</Txt>
            </Box>

            <Box
                alignCenter
                width={'30%'}
            >
                <Txt size={sizeText} bold>{numberWithCommas(history.balance)}</Txt>
            </Box>

            <Box
                alignCenter
                width={'25%'}
            >
                <Btn
                    onPress={() => onViewDetail(history)}
                    padding={5}
                    radius={5}
                    backgroundColor={theme.colors.green3}
                >
                    <Txt bold color={'white'}>Chi tiết</Txt>
                </Btn>
            </Box>
        </Box>
    )
}

export default ItemHistory