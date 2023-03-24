import Btn from '@commom/Btn'
import Img from '@commom/Img'
import { goBack } from '@navigation/navigationRef'
import React from 'react'
import { Image, ImageBackground, StyleSheet, Text } from 'react-native'

const TabBar = () => {
    return (
        <ImageBackground
            source={require('@images/Header-Bar.png')}
            style={styles.imageBackgroundContainer}
        >
            <Btn
                onPress={() => goBack()}
                marginLeft={10}
            >
                <Img
                    resizeMode={'contain'}
                    width={25}
                    height={25}
                    source={require('@images/back-white.png')}
                />
            </Btn>
            <Image
                style={styles.imageLogo}
                source={require('@images/Logo-Text.png')}
            />
            <Btn>
                <ImageBackground
                    source={require('@images/aov/bg-adsp.png')}
                    style={styles.imageBackgroundAov}
                    resizeMode='contain'
                >
                    <Text style={styles.txtAov}>CÀY THUÊ</Text>
                    <Text style={styles.txtAov}>LIÊN QUÂN</Text>
                </ImageBackground>
            </Btn>
        </ImageBackground>
    )
}

export default TabBar

const styles = StyleSheet.create({
    imageLogo: {
        resizeMode: 'contain',
        height: 50,
        width: '50%',
    },
    txtAov: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 10,
    },
    imageBackgroundAov: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 120,
        right: 10,
    },
    imageBackgroundContainer: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
})