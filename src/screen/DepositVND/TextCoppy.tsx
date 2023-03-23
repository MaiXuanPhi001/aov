import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import Img from '@commom/Img'
import Btn from '@commom/Btn'
import Clipboard from '@react-native-clipboard/clipboard';

interface Props {
    title: string,
    value: string | undefined | null,
    copy?: boolean,
}

const TextCoppy = ({ title, value, copy = true }: Props) => {
    return (
        <Box
            row
            alignCenter
            justifySpaceBetween
            paddingHorizontal={10}
            marginVertical={5}
        >
            <Txt>{title}</Txt>
            <Box
                row
                alignCenter
            >
                <Txt bold>{value}</Txt>
                {copy && (
                    <Btn
                        onPress={() => Clipboard.setString(value || '')}
                    >
                        <Img
                            source={require('@images/account/copy.png')}
                            width={15}
                            height={15}
                            resizeMode={'contain'}
                            marginLeft={5}
                        />
                    </Btn>
                )}
            </Box>
        </Box>
    )
}

export default TextCoppy