import React, { useEffect } from 'react'
import Box from '@commom/Box'
import Commission from './Commission'
import Code from './Code'
import RevenueTable from './RevenueTable'
import CommissionTable from './CommissionTable'
import { getProfileThunk } from '@asyncThunk/userAsyncThunk'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import { loadingUserSelector } from '@selector/userSelector'
import { Alert } from 'react-native'
import LoadingRed from '@reuse/LoadingRed'

const Overview = ({ toastTopRef }: any) => {
  const dispatch = useAppDispatch()

  const loading = useAppSelector(loadingUserSelector)

  useEffect(() => {
    handleGetProfile()
  }, [])

  const handleGetProfile = async () => {
    const { payload } = await dispatch(getProfileThunk())
    payload.error && Alert.alert(payload.message)
  }

  return (
    <Box>
      {loading ? (
        <LoadingRed />
      ) : (
        <>
          <Commission />
          <Code toastTopRef={toastTopRef} />
          <RevenueTable />
          <CommissionTable />
        </>
      )}
    </Box>
  )
}

export default Overview