import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'
import { TextInput } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import TextError from '@reuse/TextError'

type Props = {
    title: string,
    value: string,
    setValue: Function,
    editable?: boolean,
    inputColor?: string,
    error?: boolean,
    messError?: string,
}

const InputVND = ({
    title,
    value,
    setValue,
    editable = true,
    error = false,
    messError,
}: Props) => {
    return (
        <Box
            marginTop={20}
        >
            <Txt marginBottom={5}>{title}</Txt>
            <Box
                row
                borderWidth={1}
                borderColor={theme.colors.gray3}
                radius={5}
                paddingHorizontal={1}
            >
                <TextInput
                    value={value}
                    onChangeText={text => setValue(text)}
                    editable={editable}
                    style={[styles.input, {backgroundColor: editable ? 'white' : theme.colors.gray4}]}
                    keyboardType={'number-pad'}
                />
                <Box
                    width={'20%'}
                    alignCenter
                    justifyCenter
                    backgroundColor={theme.colors.gray5}
                >
                    <Txt>VND</Txt>
                </Box>
            </Box>
            {error && <TextError text={messError || ''} />}
        </Box>
    )
}

export default InputVND

const styles = StyleSheet.create({
    input: {
        height: 45,
        width: '80%',
        backgroundColor: theme.colors.gray4,
        paddingHorizontal: 10,
        color: 'black'
    }
})