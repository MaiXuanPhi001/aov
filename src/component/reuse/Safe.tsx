import { SafeAreaView } from 'react-native'
import React from 'react'
import Box from '@commom/Box'

const Safe: React.FunctionComponent<{
    children?: JSX.Element | JSX.Element[],
    bg?: string,
    paddingHorizontal?: number | string,
}> = ({
    children,
    bg = 'white',
    paddingHorizontal = 0,
}): JSX.Element => {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: bg }}>
                <Box
                    flex={1}
                    // isPaddingAdnroid
                    paddingHorizontal={paddingHorizontal}
                >
                    {children}
                </Box>
            </SafeAreaView>
        )
    }

export default Safe