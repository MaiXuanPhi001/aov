import Box from '@commom/Box';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import Balance from './Balance';
import Container from './Container';
import Marquee from './Marquee';
import TabBar from './TabBar';
import { styles } from '@navigation/TabNavigator'
import TimeLimit from './TimeLimit';
import Countdown from './Countdown';
import Characters from './Characters';

const Aov = () => {
  const navigation = useNavigation()
  const toastTopRef = useRef<any>(null)
  const bottomSheetRef = useRef<any>(null)

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } })
    return () => {
      navigation.getParent()?.setOptions({ tabBarStyle: styles.container })
    }
  }, [])

  return (
    <Container
      toastTopRef={toastTopRef}
      bottomSheetRef={bottomSheetRef}
    >
      <TabBar />
      <Box paddingHorizontal={10}>
        <Balance />
        <Marquee />
        <TimeLimit />
        <Countdown />
        <Characters />
      </Box>
    </Container>
  )
}

export default Aov