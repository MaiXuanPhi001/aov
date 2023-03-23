import { StyleSheet, Text } from 'react-native'
import React from 'react'
import MarqueeView from 'react-native-marquee-view';
import Box from '@commom/Box';
import Img from '@commom/Img';

const Marquee = ({
    text = 'Welcome to AOV Money! Wish you good luck!'
}) => {
    return (
        <Box
            row
            paddingHorizontal={20}
            backgroundColor={'#fffbe8'}
            radius={7}
            height={35}
            alignCenter
            marginTop={15}
        >
            <Img
                source={require('@images/home/bell.png')}
                width={20}
                height={20}
                marginRight={10}
            />
            <MarqueeView
                style={{ height: 17 }}
                speed={0.1}
            >
                <Text style={{ color: '#ff7a2d' }}>{text}</Text>
            </MarqueeView>
        </Box>
    )
}

export default Marquee

const styles = StyleSheet.create({})