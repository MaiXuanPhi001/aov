import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'

type History = {
    id: number,
    number: number,
    type: string,
    color: string[],
}

const ItemGameHistory = ({ history }: { history: History }) => {
    const size: string = history.number > 4 ? 'Lớn' : 'Nhỏ'

    const leftColor: string =
        history.number === 0 ? theme.colors.textRed :
            history.number === 5 ? theme.colors.green3 :
                history.number % 2 === 0 ? theme.colors.textRed : theme.colors.green3

    const rightColor: string =
        history.number === 0 || history.number === 5 ?
            theme.colors.purple : ''

    return (
        <Box
            row
            alignCenter
            borderBottomWidth={1}
            borderColor={theme.colors.gray3}
            height={40}
        >
            <Box width={'40%'} alignCenter>
                <Txt>{history.id}</Txt>
            </Box>

            <Box width={'60%'} row flex={3}>
                <Box flex={1} alignCenter>
                    <Txt>{history.number}</Txt>
                </Box>
                <Box flex={1} alignCenter>
                    <Txt>{size}</Txt>
                </Box>
                <Box
                    flex={1}
                    alignCenter
                    row
                    justifyCenter
                >
                    <Box
                        radius={50}
                        height={10}
                        width={10}
                        backgroundColor={leftColor}
                        marginRight={3}
                    />
                    {rightColor &&
                        <Box
                            radius={50}
                            height={10}
                            width={10}
                            backgroundColor={rightColor}
                        />
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default ItemGameHistory