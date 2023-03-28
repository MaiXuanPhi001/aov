import React from 'react'
import Modality from '@reuse/Modality'
import Box from '@commom/Box'
import PlaceABetDetailComponent from './PlaceABetDetailComponent'
import { useAppSelector } from '@hooks/index'
import { historyOrderWinGoSelector } from '@selector/wingoSelector'
import { useDispatch } from 'react-redux'
import wingoSlice from '@slice/wingoSlice'
import { DataHistoryOrder } from '@interface/winGo'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'
import { Platform } from 'react-native'
import { bet, leftColor, rightColor } from './method'
import { numberWithCommas } from '@method/format'

const ModalPlaceABetDetail = () => {
    const dispatch = useDispatch()

    const historyOrder = useAppSelector<any>(historyOrderWinGoSelector)
    const detail: DataHistoryOrder = historyOrder.detail

    const handleCloseModal = () => {
        dispatch(wingoSlice.actions.setShowModalDetail(false))
    }

    const status: string =
        detail.status === 'PENDING' ? 'PENDING' :
            detail.profit > 0 ? 'THẮNG' : 'THUA'

    const profit: string =
        detail.profit === null ? 'PENDING' :
            detail.profit > 0 ? `+${numberWithCommas(detail.profit)}` :
                `-${numberWithCommas(detail.amount * detail.balance)}`

    const RADIUS = 50

    return (
        <Modality
            show={historyOrder.showModalDetail}
            setShow={() => { }}
            animation={'fade'}
            onPress={handleCloseModal}
        >
            <Box
                backgroundColor={'white'}
                width={'90%'}
                radius={5}
            >
                <PlaceABetDetailComponent
                    title='ID'
                    value={detail.id}
                />
                <PlaceABetDetailComponent
                    title='Kỳ xổ'
                    value={detail.idChartLottery}
                />
                <PlaceABetDetailComponent
                    title='Số lượng mua'
                    value={detail.amount}
                />
                <PlaceABetDetailComponent
                    title='Số tiền mua'
                    value={numberWithCommas(detail.balance)}
                />
                <PlaceABetDetailComponent
                    title='Thuế'
                    value={(detail.amount * detail.balance) - (detail.amount * detail.balance * 98 / 100)}
                />
                <PlaceABetDetailComponent
                    title='Số tiền sau thuế'
                    value={numberWithCommas(detail.amount * detail.balance * 98 / 100)}
                />
                <Box
                    row
                    height={40}
                    width={'100%'}
                    borderBottomWidth={1}
                    alignCenter
                    borderColor={theme.colors.gray3}
                >
                    <Box
                        flex={1}
                        paddingHorizontal={10}
                        borderRightWidth={1}
                        height={'100%'}
                        justifyCenter
                        borderColor={theme.colors.gray3}
                        backgroundColor={'#fafafa'}
                    >
                        <Txt>Đặt cược</Txt>
                    </Box>

                    <Box
                        flex={1}
                        paddingHorizontal={10}
                        height={'100%'}
                        justifyCenter
                    >
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
                                backgroundColor={leftColor(detail.order)}
                                radius={RADIUS}
                                overflow={Platform.OS === 'android' ? false : true}
                                style={{ transform: [{ rotate: '45deg' }] }}
                            >
                                <Box
                                    width={'50%'}
                                    height={'100%'}
                                    backgroundColor={leftColor(detail.order)}
                                    borderTopLeftRadius={RADIUS}
                                    borderBottomLeftRadius={RADIUS}
                                />
                                <Box
                                    width={'50%'}
                                    height={'100%'}
                                    backgroundColor={rightColor(detail.order)}
                                    borderTopRightRadius={RADIUS}
                                    borderBottomRightRadius={RADIUS}
                                />
                                <Box
                                    absolute
                                    style={{ transform: [{ rotate: '-45deg' }] }}
                                >
                                    <Txt color={'white'} bold size={12}>{bet(detail.order)}</Txt>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <PlaceABetDetailComponent
                    title={'Trạng thái'}
                    value={status}
                    bold
                    color={status === 'THẮNG' ? '#008001' : status === 'THUA' ? theme.colors.textRed : 'black'} 
                />
                <PlaceABetDetailComponent
                    title='Số tiền'
                    color={status === 'THẮNG' ? '#008001' : status === 'THUA' ? theme.colors.textRed : 'black'} 
                    value={profit}
                    bold
                />
                <PlaceABetDetailComponent
                    title='Thời gian'
                    value={detail.created_at}
                />
            </Box>
        </Modality>
    )
}

export default ModalPlaceABetDetail