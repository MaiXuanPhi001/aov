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
import { historyOrderAovSelector } from '@selector/aovSelector'
import aovSlice from '@slice/aovSlice'
import Img from '@commom/Img'
import { converOrderToImages } from './data'
import { numberWithCommas } from '@method/format'


const ModalPlaceABetDetail = () => {
    const dispatch = useDispatch()

    const historyOrder = useAppSelector<any>(historyOrderAovSelector)
    const detail: DataHistoryOrder = historyOrder.detail

    const handleCloseModal = () => {
        dispatch(aovSlice.actions.setShowModalDetail(false))
    }

    const status: string =
        detail.status === 'PENDING' ? 'PENDING' :
            detail.profit > 0 ? 'THẮNG' : 'THUA'

    const profit: string =
        detail.profit === null ? 'PENDING' :
            detail.profit > 0 ? `+${numberWithCommas(detail.profit)}` :
                `-${numberWithCommas(detail.amount * detail.balance)}`

    return (
        <Modality
            show={historyOrder.showModalDetail}
            setShow={() => { }}
            animation={'fade'}
            onPress={handleCloseModal}
        >
            <Box backgroundColor={'white'} width={'90%'} radius={5} >
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
                    qh={true}
                />
                <PlaceABetDetailComponent
                    title='Thuế'
                    value={(detail.amount * detail.balance) - (detail.amount * detail.balance * 98 / 100)}
                    qh={true}
                />
                <PlaceABetDetailComponent
                    title='Số tiền sau thuế'
                    value={numberWithCommas(detail.amount * detail.balance * 98 / 100)}
                    qh={true}
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
                        <Img
                            source={converOrderToImages(detail.order)}
                            width={35}
                            height={35}
                        />
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
                    qh={true}
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