import React, { useEffect, useRef } from 'react'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import BackHeader from '@reuse/BackHeader'
import Balance from '@reuse/Balance'
import Box from '@commom/Box'
import Foreground from './Foreground'
import Marquee from '@reuse/Marquee'
import TimeLimit from './TimeLimit'
import Countdown from './Countdown'
import Number from './Number'
import Statistical from './Statistical'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import PlaceABetBottomSheet from './PlaceABetBottomSheet'
import { useAppDispatch } from '@hooks/index'
import wingoSlice from '@slice/wingoSlice'
import { historyOrderThunk, orderWinGoThunk } from '@asyncThunk/winGoAsyncThunk'
import ToastTop from '@reuse/ToastTop'
import { getProfileThunk } from '@asyncThunk/userAsyncThunk'
import { Order } from '@interface/winGo'
import { useNavigation } from '@react-navigation/native'
import { styles } from '@navigation/TabNavigator'

type Data = {
  value: string,
  order: string,
  title: string,
  leftColor: string,
  rightColor: string,
  onPress: Function,
  type: number,
}

const WinGo = () => {
  const dispatch = useAppDispatch()
  const navigation = useNavigation()

  const bottomSheetRef = useRef<any>(null)
  const toastTopRef = useRef<any>(null)

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } })
    return () => {
      navigation.getParent()?.setOptions({ tabBarStyle: styles.container })
    }
  }, [])

  const handleOpenBottomSheet = (data: Data) => {
    dispatch(wingoSlice.actions.order({
      color: {
        left: data.leftColor,
        right: data.rightColor,
      },
      choose: data.value,
      order: data.order,
      type: data.type,
    }))
    bottomSheetRef.current.open()
  }

  const handleOrder = async (order: Order) => {
    const { payload } = await dispatch(orderWinGoThunk(order))

    toastTopRef.current.slideDown(payload.message, payload.status)
    bottomSheetRef.current.close()
    await dispatch(historyOrderThunk({
      time: order.time,
      limit: 10,
      page: 1,
    }))
    await dispatch(getProfileThunk())
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ToastTop ref={toastTopRef} />
      <KeyBoardSafe paddingBottom={10}>
        <BackHeader />
        <Foreground />
        <Box paddingHorizontal={10}>
          <Balance />
          <Marquee />
          <TimeLimit />
          <Countdown />
          <Number
            onOpenBottomSheet={handleOpenBottomSheet}
            bottomSheetRef={bottomSheetRef}
          />
          <Statistical />
        </Box>
      </KeyBoardSafe>

      <PlaceABetBottomSheet
        bottomSheetRef={bottomSheetRef}
        onOrder={handleOrder}
      />
    </GestureHandlerRootView>
  )
}

export default WinGo