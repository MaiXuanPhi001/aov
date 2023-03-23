import { Image, StyleSheet } from 'react-native'
import React from 'react'
import { width } from '@util/responsive'

const Foreground = ({ height= 300 }) => {
    return (
        <Image
            source={require('@images/wingo/bg_top_red.png')}
            style={[styles.image, { height: height }]}
            resizeMode={'stretch'}
        />
    )
}

export default Foreground

const styles = StyleSheet.create({
    image: {
        width: width,
        position: 'absolute',
        zIndex: -1,
    }
})