import { historyOrderAovThunk } from '@asyncThunk/aovAsyncThunk'
import Box from '@commom/Box'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import { DataHistoryOrder } from '@interface/winGo'
import Pagination from '@reuse/Pagination'
import { historyOrderAovSelector, timeLimitAovSelector } from '@selector/aovSelector'
import aovSlice from '@slice/aovSlice'
import React from 'react'
import { Alert } from 'react-native'
import ItemHistoryPlaceABet from './ItemHistoryPlaceABet'

const PlaceABetHistory = () => {
    const dispatch = useAppDispatch()

    const historyOrder = useAppSelector(historyOrderAovSelector)
    const timeLimit = useAppSelector(timeLimitAovSelector)

    const hanleChangePageHistoryOrderAov = async (page: number) => {
        const { payload } = await dispatch(historyOrderAovThunk({
            limit: 10,
            time: timeLimit,
            page,
        }))
        !payload.status && Alert.alert(payload.message)
    }

    const handleShowModalDetail = (historyItem: DataHistoryOrder) => {
        dispatch(aovSlice.actions.setHistoryDetail(historyItem))
    }

    return (
        <Box backgroundColor={'white'} marginTop={10} radius={10}>
            {historyOrder.data.map((item: DataHistoryOrder) =>
                <ItemHistoryPlaceABet
                    key={Math.random()}
                    item={item}
                    onShowModalDetail={handleShowModalDetail}
                />
            )}
            <Box margin={10}>
                <Pagination
                    indexPage={historyOrder.indexPage}
                    total={historyOrder.total}
                    onBack={() => hanleChangePageHistoryOrderAov(historyOrder.indexPage - 1)}
                    onNext={() => hanleChangePageHistoryOrderAov(historyOrder.indexPage + 1)}
                />
            </Box>
        </Box>
    )
}

export default PlaceABetHistory