import { ImageBackground, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import routes from '@util/routes'
import Img from '@commom/Img'
import { width } from '@util/responsive'
import { useAppDispatch } from '@hooks/index'
import AsyncStorage from '@react-native-async-storage/async-storage'
import contants from '@util/contants'
import { getProfileThunk } from '@asyncThunk/userAsyncThunk'

const Hello = ({ navigation }: any) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const timer: number = setTimeout(async () => {
      const token: string = await AsyncStorage.getItem(contants.TOKEN) || ''
      if (token) {
        await dispatch(getProfileThunk())
      }
      navigation.replace(routes.MAIN_NAVIGATION)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const percent = 66.666666666666666666666
  const HEIGHT = width * percent / 100

  return (
    <ImageBackground
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      source={require('@images/Hello-Screen.png')}
    >
      <Img
        height={70}
        resizeMode={'contain'}
        source={require('@images/Logo-Text.png')}
      />
      <Img
        width={'100%'}
        absolute
        height={HEIGHT}
        bottom={0}
        resizeMode={'contain'}
        source={require('@images/Banner.png')}
      />
    </ImageBackground>
  )
}

export default Hello