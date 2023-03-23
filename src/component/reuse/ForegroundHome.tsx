import { Image, StyleSheet } from 'react-native'
import React from 'react'
import { width } from '@util/responsive'

const ForegroundHome = ({ height = 250 }) => {
    return (
        <Image
            source={require('@images/home/bg_home.png')}
            style={[styles.image, {height: height}]}
            resizeMode={'cover'}
        />
    )
}

export default ForegroundHome

const styles = StyleSheet.create({
    image: {
        width: width,
        position: 'absolute',
        zIndex: -1,
        marginTop: 50
    }
})