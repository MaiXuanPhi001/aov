import { ImageBackground } from 'react-native'
import React from 'react'
import Btn from '@commom/Btn'
import Img from '@commom/Img'

interface Props {
    onBack: Function,
}

const BackHome = ({ onBack }: Props) => {
    return (
        <ImageBackground
            source={require('@images/Header-Bar.png')}
            style={{
                width: '100%',
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
            }}
        >
            <Btn
                onPress={onBack}
                absolute
                left={10}
                zIndex={1}
            >
                <Img
                    resizeMode={'contain'}
                    width={25}
                    height={25}
                    source={require('@images/back-white.png')}
                />
            </Btn>
            <Img
                resizeMode={'contain'}
                width={'100%'}
                height={50}
                source={require('@images/Logo-Text.png')}
            />
        </ImageBackground>
    )
}

export default BackHome