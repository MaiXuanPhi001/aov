import { ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import Img from '@commom/Img'
import Btn from '@commom/Btn'
import { styled } from '@theme/styled'
import { navigate } from '@navigation/navigationRef'
import routes from '@util/routes'

const WinGO = () => {
    return (
        <Box style={styled.gameCardHome}>
            <ImageBackground
                source={require('@images/home/bg_wingo.png')}
                resizeMode={'cover'}
                imageStyle={{ borderRadius: 10 }}
                style={styles.image}
            >
                <Txt bold color={'white'} size={20}>WIN GO</Txt>
                <Txt
                    bold
                    color={'white'}
                    marginVertical={10}
                    numberOfLines={2}
                >
                    Đoán màu xanh / tím / đỏ để giành chiến thắng
                </Txt>
                <Btn
                    onPress={() => navigate(routes.Win_Go)}
                    backgroundColor={'#2b5dfe'}
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
            <Img
                source={require('@images/home/logo_wingo.png')}
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

export default WinGO

const styles = StyleSheet.create({
    image: {
        height: 160,
        padding: 20,
    }
})