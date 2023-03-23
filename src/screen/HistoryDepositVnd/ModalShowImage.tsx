import React from 'react'
import Modality from '@reuse/Modality'
import Img from '@commom/Img'
import contants from '@util/contants'
import Box from '@commom/Box'

interface Props {
    show: boolean,
    setShow: Function,
    urlImg: string,
}

const ModalShowImage = ({ show, setShow, urlImg }: Props) => {
    return (
        <Modality
            show={show}
            setShow={setShow}
            animation={'slide'}
            onPress={() => setShow(false)}
        >
            <Box
                width={'80%'}
                height={300}
                backgroundColor={'white'}
                alignCenter
                justifyCenter
            >
                <Img
                    source={{ uri: contants.HOSTING + '/' + urlImg }}
                    width={'90%'}
                    height={300}
                    resizeMode={'contain'}
                />
            </Box>
        </Modality>
    )
}

export default ModalShowImage