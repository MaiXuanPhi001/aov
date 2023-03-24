import Box from '@commom/Box'
import Btn from '@commom/Btn'
import Img from '@commom/Img'
import Txt from '@commom/Txt'
import { navigate } from '@navigation/navigationRef'
import { styled } from '@theme/styled'
import routes from '@util/routes'
import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

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
                <Btn
                    onPress={() => navigate(routes.Aov)}
                    backgroundColor={'#2b1d75'}
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