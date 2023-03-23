import React from 'react'
import Img from '@commom/Img'
import { width } from '@util/responsive'

const Banner = () => {
    const percent = 66.666666666666666666666
    const HEIGHT = width * percent / 100

    return (
        <Img
            resizeMode={'contain'}
            width={'100%'}
            height={HEIGHT}
            source={require('@images/Banner.png')}
            backgroundColor={'red'}
        />
    )
}

export default Banner