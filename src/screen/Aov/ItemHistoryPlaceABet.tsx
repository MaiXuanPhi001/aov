import Box from '@commom/Box'
import Btn from '@commom/Btn'
import Img from '@commom/Img'
import Txt from '@commom/Txt'
import { DataHistoryOrder } from '@interface/winGo'
import { numberWithCommas } from '@method/format'
import { theme } from '@theme/index'
import React from 'react'
import { converOrderToImages } from './data'

type Props = {
    item: DataHistoryOrder,
    onShowModalDetail: Function,
}

const ItemHistoryPlaceABet = ({ item, onShowModalDetail }: Props) => {
    return (
        <Box
            row
            alignCenter
            paddingVertical={10}
            borderBottomWidth={0.5}
            borderTopWidth={0.5}
            borderColor={theme.colors.gray3}
        >
            <Box width={'34%'} alignCenter>
                <Txt>{item.idChartLottery}</Txt>
            </Box>

            <Box width={'24%'} justifyCenter alignCenter>
                <Img
                    source={converOrderToImages(item.order)}
                    width={40}
                    height={40}
                />
            </Box>

            <Box width={'27%'} justifyCenter alignCenter>
                {item.status === 'PENDING' ?
                    <Txt bold>PENDING</Txt> :
                    <>
                        <Txt bold color={item.profit === 0 ? 'red' : '#008001'}>
                            {item.profit === 0 ? 'THUA' : 'THẮNG'}
                        </Txt>
                        <Box row alignCenter marginTop={2}>
                            <Txt color={item.profit === 0 ? 'red' : '#008001'}>
                                {item.profit === 0 ? `-${numberWithCommas(item.amount * item.balance)}` : `+${numberWithCommas(item.profit)}`}
                            </Txt>
                            <Img
                                source={require('@images/aov/quanhuy.png')}
                                width={20}
                                height={20}
                            />
                        </Box>
                    </>
                }
            </Box>

            <Box width={'15%'} alignCenter justifyCenter>
                <Btn onPress={() => onShowModalDetail(item)}>
                    <Img
                        source={require('@images/wingo/right-arrow.png')}
                        width={20}
                        height={20}
                    />
                </Btn>
            </Box>
        </Box>
    )
}

export default ItemHistoryPlaceABet