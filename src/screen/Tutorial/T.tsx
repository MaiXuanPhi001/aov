import React from 'react'
import Txt from '@commom/Txt'

interface Props {
    text: string,
    bold?: boolean,
    marginBottom?: number,
}

const T = ({
    text,
    bold = false,
    marginBottom = 20,
}: Props) => {
    return (
        <Txt
            marginBottom={marginBottom}
            numberOfLines={10}
            bold={bold}
        >
            {text}
        </Txt>
    )
}

export default T