import Box from '@commom/Box'
import Scroll from '@commom/Scroll'
import { styles } from '@navigation/TabNavigator'
import { useNavigation } from '@react-navigation/native'
import ToastTop from '@reuse/ToastTop'
import React, { useEffect } from 'react'
import { ImageBackground, KeyboardAvoidingView, Platform, SafeAreaView, StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import PlaceABetBottomSheet from './PlaceABetBottomSheet'

interface Props {
  children: JSX.Element | JSX.Element[],
  toastTopRef: React.MutableRefObject<any>,
  bottomSheetRef: React.MutableRefObject<any>,
  onOrder: Function,
}

const Container: React.FC<Props> = ({ children, toastTopRef, bottomSheetRef, onOrder }) => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } })
    return () => {
      navigation.getParent()?.setOptions({ tabBarStyle: styles.container })
    }
  }, [])

  return (
    <ImageBackground
      source={require('@images/aov/bg.png')}
      resizeMode={'stretch'}
      style={{ flex: 1 }}
    >
      <StatusBar
        barStyle={'light-content'}
      />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ToastTop ref={toastTopRef} />
        <KeyboardAvoidingView
          keyboardVerticalOffset={Platform.OS === 'android' ? -1000 : 0}
          behavior='padding'
          enabled
          style={{ flex: 1 }}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <Box flex={1}>
              <Scroll
                flexGrow={1}
                paddingBottom={0}
              >
                {children}
              </Scroll>
            </Box>
          </SafeAreaView>
        </KeyboardAvoidingView>
        <PlaceABetBottomSheet
          bottomSheetRef={bottomSheetRef}
          onOrder={onOrder}
        />
      </GestureHandlerRootView>
    </ImageBackground>
  )
}

export default Container