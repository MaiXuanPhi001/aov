import React from 'react'
import Box from '@commom/Box'
import LottieAnimation from './LottieAnimation'

const LoadingRed = ({ size = 40 }) => {
    return (
        <Box alignCenter>
            <LottieAnimation
                source={require('@lotties/Loading-Red.json')}
                size={size}
            />
        </Box>
    )
}

export default LoadingRed