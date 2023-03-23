import React from 'react'
import Box from '@commom/Box'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import BackHeader from '@reuse/BackHeader'
import { height, width } from '@util/responsive'
import Img from '@commom/Img'
import Telegram from './Telegram'

const CSKH = () => {
    const percent = 66.666666666666666666666
    const HEIGHT = width * percent / 100
    const BORDER = 30

    return (
        <KeyBoardSafe paddingBottom={0}>
            <BackHeader />
            <Img
                resizeMode={'contain'}
                width={'100%'}
                height={HEIGHT}
                source={require('@images/customerservice.png')}
                backgroundColor={'red'}
            />

            <Box>
                <Box
                    width={width}
                    height={height}
                    backgroundColor={'white'}
                    alignCenter
                    absolute
                    top={-35}
                    borderTopLeftRadius={BORDER}
                    borderTopRightRadius={BORDER}
                    paddingHorizontal={20}
                >
                    <Telegram />
                </Box>
            </Box>
        </KeyBoardSafe>
    )
}

export default CSKH