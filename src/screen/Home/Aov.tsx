import { ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import Btn from '@commom/Btn'
import { styled } from '@theme/styled'

const Aov = () => {
    return (
        <Box style={styled.gameCardHome}>
            <ImageBackground
                source={require('@images/home/bg_lq.png')}
                resizeMode={'cover'}
                imageStyle={{ borderRadius: 10 }}
                style={styles.image}
            >
                <Txt bold color={'white'} size={20}>AOV LOTTERY</Txt>
                <Txt
                    bold color={'white'}
                    marginVertical={10}
                    numberOfLines={2}
                >
                    Xổ số Liên Quân Mobile, Thắng Bại Tại Kĩ Năng
                </Txt>
                {/* <Btn
                    backgroundColor={'#5c5093'}
                    row
                    paddingVertical={10}
                    width={120}
                    radius={10}
                >
                    <Txt color={'white'} bold marginRight={10} size={16}>Play</Txt>
                    <Img  
                        source={require('@images/home/chevron.png')}
                        width={25}
                        height={25}
                    />
                </Btn> */}
                <Btn
                    disabled={true}
                    style={styled.comingSoonButton}
                >
                    <Txt color={'white'} bold size={16}>Coming soon</Txt>
                </Btn>
            </ImageBackground>
        </Box>
    )
}

export default Aov

const styles = StyleSheet.create({
    image: {
        height: 160,
        padding: 20,
    }
})