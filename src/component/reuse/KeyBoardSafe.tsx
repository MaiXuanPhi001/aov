import { KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native'
import React from 'react'
import Box from '@commom/Box'
import Scroll from '@commom/Scroll'

interface Props {
    children: JSX.Element | JSX.Element[],
    bg?: string,
    paddingBottom?: number
}

const KeyBoardSafe = ({ children, bg = 'white', paddingBottom = 500 }: Props) => {
    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={Platform.OS === 'android' ? -1000 : 0}
            behavior='padding'
            enabled
            style={{
                flex: 1,
                backgroundColor: bg,
            }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <Box
                    flex={1}
                // isPaddingAdnroid
                >
                    <Scroll
                        flexGrow={1}
                        paddingBottom={paddingBottom}
                    >
                        {children}
                    </Scroll>
                </Box>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default KeyBoardSafe