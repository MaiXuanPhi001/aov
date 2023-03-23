import { getHistoryWithdrawThunk } from '@asyncThunk/withdrawAsyncThunk'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import { ItemHistoryWithdraw } from '@interface/withdraw'
import BackHeader from '@reuse/BackHeader'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import LoadingRed from '@reuse/LoadingRed'
import Pagination from '@reuse/Pagination'
import { loadingWithdrawSelector, withdrawSelector } from '@selector/withdrawSelector'
import { WithdrawSlice } from '@slice/withdrawSlice'
import React, { useEffect } from 'react'
import { Alert } from 'react-native'
import ItemWithdrawHistory from './ItemWithdrawHistory'

const WithdrawVNDHistory = () => {
  const dispatch = useAppDispatch()

  const withdraw = useAppSelector<WithdrawSlice>(withdrawSelector)
  const loading = useAppSelector(loadingWithdrawSelector)

  useEffect(() => {
    handleWithdrawHistory(1)
  }, [])

  const handleWithdrawHistory = async (page: number) => {
    const { payload } = await dispatch(
      getHistoryWithdrawThunk({
        limit: 10,
        page,
      })
    )

    !payload.status && Alert.alert(payload.message)
  }

  return (
    <KeyBoardSafe paddingBottom={100}>
      <BackHeader />
      <Box paddingHorizontal={20}>
        <Box
          row
          alignCenter
          justifySpaceBetween
          marginVertical={10}
        >
          <Txt bold size={16}>LỊCH SỬ RÚT TIỀN</Txt>
          <Pagination
            alignSefl='center'
            marginTop={0}
            indexPage={withdraw.page}
            total={withdraw.total}
            onNext={() => handleWithdrawHistory(withdraw.page + 1)}
            onBack={() => handleWithdrawHistory(withdraw.page - 1)}
          />
        </Box>
        {loading ? (
          <LoadingRed />
        ) : (
          <>
            {withdraw.history.map((historyItem: ItemHistoryWithdraw) =>
              <ItemWithdrawHistory
                key={historyItem?.id}
                historyItem={historyItem}
              />
            )}
          </>
        )}
      </Box>
    </KeyBoardSafe>
  )
}

export default WithdrawVNDHistory