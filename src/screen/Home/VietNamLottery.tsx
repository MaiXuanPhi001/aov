import { ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import Img from '@commom/Img'
import Btn from '@commom/Btn'
import { styled } from '@theme/styled'

const VietNamLottery = () => {
    return (
        <Box style={styled.gameCardHome}>
            <ImageBackground
                source={require('@images/home/bg_vietnam_lottery.png')}
                resizeMode={'cover'}
                imageStyle={{ borderRadius: 10 }}
                style={styles.image}
            >
                <Txt bold color={'white'} size={20}>VIETNAM LOTTERY</Txt>
                <Txt bold color={'white'} marginVertical={15}>Xổ số Việt Nam</Txt>
                <Btn
                    disabled={true}
                    style={styled.comingSoonButton}
                >
                    <Txt color={'white'} bold size={16}>Coming soon</Txt>
                </Btn>
            </ImageBackground>
            <Img
                source={require('@images/home/logo-Vlottery.png')}
                resizeMode={'contain'}
                width={100}
                height={100}
                absolute
                top={-30}
                right={-15}
            />
        </Box>
    )
}

export default VietNamLottery

const styles = StyleSheet.create({
    image: {
        height: 160,
        padding: 20,
    }
})