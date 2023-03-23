import React from 'react'
import Txt from '@commom/Txt'

const TextError: React.FunctionComponent<{ text: string }> = ({ text }) => {
    return (
        <Txt
            color={'red'}
            marginTop={10}
            alignSelf={'flex-start'}
        >
            {text}
        </Txt>
    )
}

export default TextError