import { historyOrderAovThunk, orderAovThunk } from '@asyncThunk/aovAsyncThunk';
import { getProfileThunk } from '@asyncThunk/userAsyncThunk';
import Box from '@commom/Box';
import { useAppDispatch } from '@hooks/index';
import { Order } from '@interface/winGo';
import BackHeader from '@reuse/BackHeader';
import aovSlice from '@slice/aovSlice';
import React, { useRef } from 'react';
import { ImageSourcePropType } from 'react-native';
import Balance from './Balance';
import Characters from './Characters';
import Container from './Container';
import Countdown from './Countdown';
import Marquee from './Marquee';
import Statistical from './Statistical';
import TimeLimit from './TimeLimit';

type Data = {
  image: ImageSourcePropType,
  order: string,
  type: number,
}

const Aov = () => {
  const dispatch = useAppDispatch()

  const toastTopRef = useRef<any>(null)
  const bottomSheetRef = useRef<any>(null)

  const handleOpenBottomSheet = (data: Data) => {
    dispatch(aovSlice.actions.order({
      order: data.order,
      type: data.type,
      image: data.image,
    }))
    bottomSheetRef?.current?.open()
  }

  const handleOrder = async (order: Order) => {
    const { payload } = await dispatch(orderAovThunk(order))

    toastTopRef.current.slideDown(payload.message, payload.status)
    bottomSheetRef.current.close()
    await dispatch(historyOrderAovThunk({
      time: order.time,
      limit: 10,
      page: 1,
    }))
    await dispatch(getProfileThunk())
  }

  return (
    <Container
      toastTopRef={toastTopRef}
      bottomSheetRef={bottomSheetRef}
      onOrder={handleOrder}
    >
      <BackHeader />
      <Box paddingHorizontal={10}>
        <Balance />
        <Marquee />
        <TimeLimit />
        <Countdown />
        <Characters
          onOpenBottomSheet={handleOpenBottomSheet}
          bottomSheetRef={bottomSheetRef}
        />
        <Statistical />
      </Box>
    </Container>
  )
}

export default Aov