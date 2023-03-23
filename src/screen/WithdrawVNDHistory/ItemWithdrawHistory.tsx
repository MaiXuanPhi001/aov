import React from 'react'
import { ItemHistoryWithdraw } from '@interface/withdraw'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import Img from '@commom/Img'
import { theme } from '@theme/index'
import { numberWithCommas } from '@method/format'
import { styled } from '@theme/styled'

interface Props {
    historyItem: ItemHistoryWithdraw,
}

const ItemWithdrawHistory = ({ historyItem }: Props) => {
    const status: string =
        historyItem.type === 2 ? 'ĐANG CHỜ XEM XÉT' :
            historyItem.type === 1 ? 'RÚT TIỀN THÀNH CÔNG' : 'GIAO DỊCH BỊ TỪ CHỐI'

    return (
        <Box style={styled.itemHistory}>
            <Box
                borderWidth={1}
                alignSelf={'flex-start'}
                paddingHorizontal={5}
                paddingVertical={2}
                radius={5}
                backgroundColor={
                    historyItem.type === 2 ? theme.colors.blue4 :
                        historyItem.type === 1 ? theme.colors.green5 : theme.colors.red4
                }
                borderColor={
                    historyItem.type === 2 ? theme.colors.blue3 :
                        historyItem.type === 1 ? theme.colors.green4 : theme.colors.red3
                }
            >
                <Txt
                    bold
                    size={12}
                    color={
                        historyItem.type === 2 ? theme.colors.blue2 :
                            historyItem.type === 1 ? theme.colors.green3 : theme.colors.red2
                    }
                >
                    {status}
                </Txt>
            </Box>
            <Box
                row
                alignCenter
            >
                <Img
                    source={historyItem?.image}
                    width={30}
                    height={30}
                    marginTop={10}
                    marginRight={10}
                    marginBottom={10}
                />
                <Box>
                    <Txt>Ngân hàng: {historyItem?.nameBanking}</Txt>
                    <Txt>STK: {historyItem?.numberBanking} ({historyItem?.ownerBanking})</Txt>
                </Box>
            </Box>
            <Txt bold marginBottom={3}>{numberWithCommas(historyItem?.amount)} VNĐ</Txt>
            <Txt>{historyItem?.created_at}</Txt>
        </Box>
    )
}

export default ItemWithdrawHistory