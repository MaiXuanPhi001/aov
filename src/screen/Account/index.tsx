import React, { useCallback, useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import HeaderApp from '@reuse/HeaderApp'
import ForegroundHome from '@reuse/ForegroundHome'
import { profileSelector } from '@selector/userSelector'
import User from './User'
import Box from '@commom/Box'
import { Profile } from '@interface/user'
import Balance from '@reuse/Balance'
import Option from './Option'
import { getProfileThunk } from '@asyncThunk/userAsyncThunk'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomChangeName from './BottomChangeName'

const Account = ({ navigation }: any) => {
  const dispatch = useAppDispatch()

  const bottomSheetRef = useRef<any>(null)

  const profile: Profile = useAppSelector<any>(profileSelector)

  useEffect(() => {
    const willFocusSubscription = navigation.addListener('focus', () => {
      handleGetProfile()
    })
    return willFocusSubscription
  }, [])

  const handleGetProfile = async () => {
    await dispatch(getProfileThunk())
  }

  const handleOpenBottomSheet = useCallback(() => {
    bottomSheetRef.current.open()
  }, [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <KeyBoardSafe paddingBottom={120}>
        <HeaderApp />
        <ForegroundHome height={230} />
        <Box paddingHorizontal={10}>
          <User
            userName={profile.userName}
            email={profile.email}
            onOpenBottomSheet={handleOpenBottomSheet}
          />
          <Balance />
          <Option />
        </Box>
      </KeyBoardSafe>
      
      <BottomChangeName
        bottomSheetRef={bottomSheetRef}
        onGetProfile={handleGetProfile}
      />
    </GestureHandlerRootView>
  )
}

export default Account