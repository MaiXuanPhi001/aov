import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'
import Btn from '@commom/Btn'
import Img from '@commom/Img'
import { DataHistoryOrder } from '@interface/winGo'
import { Platform } from 'react-native'
import { bet, leftColor, rightColor } from './method'

type Props = {
    item: DataHistoryOrder,
    onShowModalDetail: Function,
}

const ItemHistoryPlaceABet = ({ item, onShowModalDetail }: Props) => {
    const RADIUS = 50

    return (
        <Box
            paddingVertical={10}
            borderBottomWidth={0.5}
            borderTopWidth={0.5}
            borderColor={theme.colors.gray3}
            row
        >
            <Box
                width={'34%'}
                alignCenter
            >
                <Txt bold>{item?.idChartLottery}</Txt>
                <Txt marginVertical={5}>{item?.created_at?.split(' ').slice(0, -1).join(' ')}</Txt>
                <Txt>{item?.created_at?.split(' ').slice(-1).join(' ')}</Txt>
            </Box>

            <Box
                width={'24%'}
                justifyCenter
                alignCenter
            >
                <Box
                    width={35}
                    height={35}
                    row
                    alignCenter
                    justifyCenter
                    backgroundColor={leftColor(item.order)}
                    radius={RADIUS}
                    overflow={Platform.OS === 'android' ? false : true}
                    style={{ transform: [{ rotate: '45deg' }] }}
                >
                    <Box
                        width={'50%'}
                        height={'100%'}
                        backgroundColor={leftColor(item.order)}
                        borderTopLeftRadius={RADIUS}
                        borderBottomLeftRadius={RADIUS}
                    />
                    <Box
                        width={'50%'}
                        height={'100%'}
                        backgroundColor={rightColor(item.order)}
                        borderTopRightRadius={RADIUS}
                        borderBottomRightRadius={RADIUS}
                    />
                    <Box
                        absolute
                        style={{ transform: [{ rotate: '-45deg' }] }}
                    >
                        <Txt color={'white'} bold size={12}>{bet(item.order)}</Txt>
                    </Box>
                </Box>
            </Box>

            <Box
                width={'27%'}
                justifyCenter
                alignCenter
            >
                {item.status === 'PENDING' ?
                    <Txt bold>PENDING</Txt> :
                    <>
                        <Txt
                            bold
                            color={item.profit === 0 ? 'red' : '#008001'}
                        >
                            {item.profit === 0 ? 'THUA' : 'THẮNG'}
                        </Txt>
                        <Txt color={item.profit === 0 ? 'red' : '#008001'}>
                            {item.profit === 0 ? `-${item.amount * item.balance}` : `+${item.profit}`}
                        </Txt>
                    </>
                }
            </Box>

            <Box
                width={'15%'}
                alignCenter
                justifyCenter
            >
                <Btn
                    onPress={() => onShowModalDetail(item)}
                >
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