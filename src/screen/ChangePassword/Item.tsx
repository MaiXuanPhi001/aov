import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import Input from '@commom/Input'
import { theme } from '@theme/index'
import TextError from '@reuse/TextError'

type Props = {
    title: string,
    value: string,
    setValue: Function,
    onPress: Function,
    security: boolean,
    error: boolean,
    errorMessage: string,
}

const Item = ({
    title,
    value,
    setValue,
    onPress,
    security,
    error,
    errorMessage,
}: Props) => {
    return (
        <Box width={'100%'}>
            <Txt marginTop={20} bold>{title}</Txt>
            <Input
                value={value}
                onChangeText={setValue}
                security={security}
                onPress={onPress}
                iconOne={require('@images/padlock.png')}
                iconTwo={security ?
                    require('@images/eye-open.png') :
                    require('@images/eye-close.png')
                }
                width={'100%'}
                borderColor={theme.colors.grayBorderInput}
                borderWidth={1}
                height={45}
                radius={5}
                paddingHorizontal={45}
                marginTop={5}
            />
            {error && <TextError text={errorMessage} />}
        </Box>
    )
}

export default Item