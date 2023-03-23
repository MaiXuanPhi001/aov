import React from 'react'
import Modality from '@reuse/Modality'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'

interface Props {
    show: boolean,
    setShow: Function,
    setModalFailTransfer: Function,
    reason: string,
}

const ModalFailTransfer = ({
    show,
    setShow,
    reason,
}: Props) => {
    return (
        <Modality
            show={show}
            setShow={setShow}
            animation={'slide'}
            onPress={() => setShow(false)}
        >
            <Box
                backgroundColor={'white'}
                width={'80%'}
            >
                <Box
                    padding={10}
                    backgroundColor={theme.colors.textRed}
                >
                    <Txt bold color={'white'}>Lý do giao dịch bị từ chối</Txt>
                </Box>

                <Box padding={10}>
                    <Txt numberOfLines={100}>{reason}</Txt>
                </Box>
            </Box>
        </Modality>
    )
}

export default ModalFailTransfer