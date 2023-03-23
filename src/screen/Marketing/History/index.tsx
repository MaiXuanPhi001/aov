import React, { useEffect, useState } from 'react'
import Box from '@commom/Box'
import Pagination from '@reuse/Pagination'
import { historyCommissionTransfer } from '@service/marketingService'
import { Alert } from 'react-native'
import HeaderTable from './HeaderTable'
import ItemHistory from './ItemHistory'
import LoadingRed from '@reuse/LoadingRed'
import { useAppDispatch } from '@hooks/index'
import { formatDateYMD } from '@method/date'
import { TAB } from '..'
import marketingSlice from '@slice/marketingSlice'

export interface History {
  id: number,
  userid: number,
  userName: string,
  balance: number,
  created_at: string,
  timeEnd: number,
  timeStart: number,
}

const History = ({ setTab }: { setTab: Function }) => {
  const dispatch = useAppDispatch()

  const [historys, setHistorys] = useState<History[]>([])
  const [page, setPage] = useState<number>(1)
  const [total, setTotal] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    handleHistoryCommissionTransfer()
  }, [page])

  const handleHistoryCommissionTransfer = async () => {
    setLoading(true)
    const res = await historyCommissionTransfer({
      limit: 10,
      page: page,
    })
    if (res.status) {
      setHistorys(res.data.array)
      setTotal(res.data.total)
      setLoading(false)
    }
    if (res.error) {
      Alert.alert(res.message)
    }
  }

  const handleViewDetail = async (history: History) => {
    const date = history.created_at.split(' ').slice(0, -1).join(' ')
    dispatch(marketingSlice.actions.setDateChoose(formatDateYMD(date)))
    setTab(TAB.STATISTICAL)
  }

  return (
    <Box
      padding={10}
    >
      {loading ? (
        <LoadingRed />
      ) : (
        <>
          <Pagination
            marginTop={0}
            indexPage={page}
            total={total}
            onNext={() => setPage(page + 1)}
            onBack={() => setPage(page - 1)}
          />
          <HeaderTable />
          {historys.map((history: History) =>
            <ItemHistory
              key={history.id}
              history={history}
              onViewDetail={handleViewDetail}
            />
          )}
        </>
      )}
    </Box>
  )
}

export default History