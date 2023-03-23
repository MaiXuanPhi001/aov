import { ImageBackground } from 'react-native'
import React from 'react'
import Img from '@commom/Img'

const HeaderApp = ({ }) => {
  return (
    <ImageBackground
      source={require('@images/Header-Bar.png')}
      style={{
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Img
        resizeMode={'contain'}
        width={'100%'}
        height={50}
        source={require('@images/Logo-Text.png')}
      />
    </ImageBackground>
  )
}

export default HeaderApp