import { Alert, Text } from 'react-native'
import React, { useEffect } from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import HeaderTable from './HeaderTable'
import Table from './Table'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import {
    dateChooseStatisticalMarketingSelector,
    historyStatisticalMarketingSelector,
    pageStatisticalMarketingSelector,
    totalAmountReceiveStatisticalMarketingSelector,
    totalAmountStatisticalMarketingSelector,
    totalStatisticalMarketingSelector,
} from '@selector/marketingSelector'
import { historyCommissionThunk } from '@asyncThunk/marketingAsyncThunk'
import { getTimeStamp, getYesterday } from '@method/date'
import { ItemHistoryCommission } from '@interface/marketing'
import Pagination from '@reuse/Pagination'
import { numberWithCommas } from '@method/format'
import Nodata from '@reuse/Nodata'

const Infomation = () => {
    const dispatch = useAppDispatch()
    const history = useAppSelector(historyStatisticalMarketingSelector)
    const dayChoose = useAppSelector(dateChooseStatisticalMarketingSelector)
    const page = useAppSelector(pageStatisticalMarketingSelector)
    const total = useAppSelector(totalStatisticalMarketingSelector)
    const totalAmount = useAppSelector(totalAmountStatisticalMarketingSelector)
    const totalAmountReceive = useAppSelector(totalAmountReceiveStatisticalMarketingSelector)

    useEffect(() => {
        handleHistoryCommission(1)
    }, [])

    const handleHistoryCommission = async (page: number) => {
        if (dayChoose) {
            const timeStart = getTimeStamp(getYesterday(dayChoose + ' 00:00:00'))
            const timeEnd = getTimeStamp(dayChoose + ' 23:59:59')
            const { payload } = await dispatch(historyCommissionThunk({
                limit: 10,
                page: page,
                timeStart: timeStart,
                timeEnd: timeEnd,
            }))

            !payload.status && Alert.alert(payload.message)
        }
    }

    return (
        <Box marginTop={15}>
            {dayChoose &&
                <>
                    <Text>Tổng số tiền đặt cược: <Txt bold>{numberWithCommas(totalAmount)}</Txt> VND</Text>
                    <Txt marginTop={5}>Tổng số tiền hoa hồng: <Txt bold>{numberWithCommas(totalAmountReceive)}</Txt> VND</Txt>
                </>
            }
            <HeaderTable />
            {history.length > 0 ?
                <>
                    {history.map((history: ItemHistoryCommission, index: number) =>
                        <Table
                            key={history.id}
                            history={history}
                            index={index}
                        />
                    )}
                </> :
                <Nodata />
            }
            {history.length > 0 &&
                <Pagination
                    indexPage={page}
                    total={total}
                    onNext={() => handleHistoryCommission(page + 1)}
                    onBack={() => handleHistoryCommission(page - 1)}
                />
            }
        </Box>
    )
}

export default Infomation