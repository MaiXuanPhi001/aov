import React from 'react'
import Box from '@commom/Box'
import Img from '@commom/Img'
import Txt from '@commom/Txt'
import { width } from '@util/responsive'

const Nodata = () => {
    return (
        <Box
            width={width}
            alignCenter
            marginTop={20}
        >
            <Img
                source={require('@images/marketing/empty-box.png')}
                width={50}
                height={50}
            />
            <Txt>Không có dữ liệu</Txt>
        </Box>
    )
}

export default Nodata