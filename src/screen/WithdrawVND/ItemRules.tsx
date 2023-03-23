import React from 'react'
import Box from '@commom/Box'
import Img from '@commom/Img'
import Txt from '@commom/Txt'

type Props = {
    icon: string,
    text: string,
    textBold: string,
}

const ItemRules = ({ icon, text, textBold }: Props) => {
    return (
        <Box
            row
            alignCenter
            marginVertical={5}
            wrap
        >
            <Img
                source={icon}
                width={32}
                height={32}
                marginRight={10}
            />
            <Txt>{text}</Txt> 
            <Txt bold size={12}>{textBold}</Txt>
        </Box>
    )
}

export default ItemRules