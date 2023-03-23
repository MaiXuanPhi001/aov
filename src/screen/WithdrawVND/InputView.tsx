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
  error: boolean,
  messError: string,
  keyBoardType: string,
  autoCapitalize?: string,
}

const InputView = ({ 
  title, 
  value, 
  setValue, 
  error, 
  messError, 
  keyBoardType,
  autoCapitalize = 'none'
}: Props) => {
  return (
    <Box>
      <Txt marginTop={20} marginBottom={5}>{title}</Txt>
      <Input
        value={value}
        onChangeText={setValue}
        borderWidth={1}
        borderColor={theme.colors.gray3}
        height={45}
        radius={5}
        paddingHorizontal={10}
        keyboardType={keyBoardType}
        autoCapitalize={autoCapitalize}
      />
      {error && <TextError text={messError} />}
    </Box>
  )
}

export default InputView