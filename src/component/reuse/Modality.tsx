import { Modal, Pressable } from 'react-native'
import React from 'react'
import Box from '@commom/Box'


const Modality: React.FunctionComponent<{
    show: boolean,
    setShow: Function,
    animation: any,
    children: JSX.Element | JSX.Element[],
    onPress?: () => void,
}> = ({ show, setShow, animation, children, onPress }): JSX.Element => {
    // animation={'slide', 'fade', 'none'}

    return (
        <Modal
            animationType={animation}
            visible={show}
            transparent={true}
            onRequestClose={() => setShow(false)}
        >
            <Pressable
                style={{ flex: 1 }}
                onPress={onPress}
            >
                <Box
                    flex={1}
                    alignCenter
                    justifyCenter
                    backgroundColor={'rgba(0,0,0,0.5)'}
                >
                    {children}
                </Box>
            </Pressable>
        </Modal>
    )
}

export default Modality