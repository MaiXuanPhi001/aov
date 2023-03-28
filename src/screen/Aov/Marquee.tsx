import Box from '@commom/Box'
import Btn from '@commom/Btn'
import Img from '@commom/Img'
import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text } from 'react-native'
import MarqueeView from 'react-native-marquee-view'
import Sound from 'react-native-sound'
const IMG = 20

const soundPath = require('../../assets/sounds/back_ground_aov.mp3')

Sound.setCategory('Playback')

var speaker = new Sound(soundPath, error => {
    if (error) {
        Alert.alert('failed to load the sound: ', error)
        return
    }
})

const Marquee = ({
    text = 'Welcome to AOV Money! Wish you good luck!'
}) => {
    const [sound, setSound] = useState(true)

    useEffect(() => {
        speaker.setVolume(1)
        speaker.setNumberOfLoops(-1)
        speaker.play()
        return () => {
            speaker.pause()
        }
    }, [])

    const handleControllSpeaker = () => {
        if (sound) speaker.pause()
        else speaker.play()

        setSound(!sound)
    }

    return (
        <Box row marginTop={15}>
            <Box
                flex={1}
                row
                paddingHorizontal={20}
                backgroundColor={'#b7b2d5'}
                radius={7}
                height={35}
                width={100}
                alignCenter
            >
                <MarqueeView
                    style={{ height: 17 }}
                    speed={0.1}
                >
                    <Text style={{ color: '#2b1d75', fontWeight: 'bold' }}>{text}</Text>
                </MarqueeView>
            </Box>

            <Btn
                onPress={handleControllSpeaker}
                row
                backgroundColor={'#b7b2d5'}
                radius={7}
                height={35}
                width={35}
                alignCenter
                justifyCenter
                marginLeft={7}
            >
                <Img
                    source={sound ? require('@images/aov/speaker_open.png') : require('@images/aov/speaker_close.png')}
                    width={IMG}
                    height={IMG}
                />
            </Btn>
        </Box>
    )
}

export default Marquee

const styles = StyleSheet.create({})