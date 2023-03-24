import Box from '@commom/Box'
import Scroll from '@commom/Scroll'
import ToastTop from '@reuse/ToastTop'
import PlaceABetBottomSheet from '@screen/WinGo/PlaceABetBottomSheet'
import React from 'react'
import { ImageBackground, KeyboardAvoidingView, Platform, SafeAreaView, StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

interface Props {
  children: JSX.Element | JSX.Element[],
  toastTopRef: React.MutableRefObject<any>,
  bottomSheetRef: React.MutableRefObject<any>,
}

const Container: React.FC<Props> = ({ children, toastTopRef, bottomSheetRef }) => {
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
        />
      </GestureHandlerRootView>
    </ImageBackground>
  )
}

export default Container