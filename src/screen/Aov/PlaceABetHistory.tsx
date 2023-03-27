import React, { useState } from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'
import ItemHistoryPlaceABet from './ItemHistoryPlaceABet'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import { historyOrderWinGoSelector, timeLimitWinGoSelector } from '@selector/wingoSelector'
import { DataHistoryOrder } from '@interface/winGo'
import Pagination from '@reuse/Pagination'
import { historyOrderThunk } from '@asyncThunk/winGoAsyncThunk'
import wingoSlice from '@slice/wingoSlice'
import { Alert } from 'react-native'

const PlaceABetHistory = () => {
    const dispatch = useAppDispatch()

    const historyOrder = useAppSelector(historyOrderWinGoSelector)
    const timeLimit = useAppSelector(timeLimitWinGoSelector)

    const hanleChangePageHistoryOrder = async (page: number) => {
        const { payload } = await dispatch(historyOrderThunk({
            limit: 10,
            time: timeLimit,
            page,
        }))
        !payload.status && Alert.alert(payload.message)
    }

    const handleShowModalDetail = (historyItem: DataHistoryOrder) => {
        dispatch(wingoSlice.actions.setHistoryDetail(historyItem))
    }

    return (
        <Box>
            <HeaderTable />
            {historyOrder.data.map((item: DataHistoryOrder) =>
                <ItemHistoryPlaceABet
                    key={Math.random()}
                    item={item}
                    onShowModalDetail={handleShowModalDetail}
                />
            )}
            <Pagination
                indexPage={historyOrder.indexPage}
                total={historyOrder.total}
                onBack={() => hanleChangePageHistoryOrder(historyOrder.indexPage - 1)}
                onNext={() => hanleChangePageHistoryOrder(historyOrder.indexPage + 1)}
            />
        </Box>
    )
}

const HeaderTable = () => {
    return (
        <Box
            row
            width={'100%'}
            height={40}
            backgroundColor={'#fafafa'}
            marginTop={10}
            alignCenter
        >
            <Box
                alignCenter
                justifyCenter
                width={'34%'}
                height={20}
                borderRightWidth={1}
                borderColor={theme.colors.gray3}
            >
                <Txt bold>Kỳ xổ</Txt>
            </Box>
            <Box
                alignCenter
                justifyCenter
                width={'24%'}
                height={20}
                borderRightWidth={1}
                borderColor={theme.colors.gray3}
            >
                <Txt bold>Cược</Txt>
            </Box>
            <Box
                alignCenter
                justifyCenter
                width={'27%'}
                height={20}
                borderRightWidth={1}
                borderColor={theme.colors.gray3}
            >
                <Txt bold>Kết quả</Txt>
            </Box>
            <Box width={'15%'} />
        </Box>
    )
}

export default PlaceABetHistory