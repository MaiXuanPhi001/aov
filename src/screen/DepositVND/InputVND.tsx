import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'
import { TextInput } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import TextError from '@reuse/TextError'

type Props = {
    value: string,
    setValue: Function,
    inputColor?: string,
    error?: boolean,
    messError?: string,
}

const InputVND = ({
    value,
    setValue,
    error = false,
    messError,
}: Props) => {
    return (
        <Box
            marginTop={20}
        >
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
                    style={styles.input}
                    keyboardType={'number-pad'}
                    placeholder={'Nhập số tiền chuyển khoản'}
                    placeholderTextColor={theme.colors.gray2}
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
        backgroundColor: 'white',
        paddingHorizontal: 10,
        color: 'black'
    }
})