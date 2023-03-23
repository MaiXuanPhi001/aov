import { StyleSheet } from 'react-native'
import React from 'react'
import { width } from '@util/responsive'
import Box from '@commom/Box'
import Img from '@commom/Img'
import Txt from '@commom/Txt'

type Props = {
    icon: string,
    title: string,
    titleColor?: string,
    backgroundColor?: string,
    borderLeftRadius?: number,
    borderRightRadius?: number,
}

const TabCustom = ({
    icon,
    title,
    titleColor = 'black',
    backgroundColor,
    borderLeftRadius = 0,
    borderRightRadius = 0,
}: Props) => {
    const WIDTH_TAB = width - 40

    return (
        <Box
            backgroundColor={backgroundColor}
            width={WIDTH_TAB / 3}
            height={65}
            alignCenter
            justifyCenter
            borderTopLeftRadius={borderLeftRadius}
            borderBottomLeftRadius={borderLeftRadius}
            borderTopRightRadius={borderRightRadius}
            borderBottomRightRadius={borderRightRadius}
            absolute
            left={0}
            top={0}
        >
            <Img
                source={icon}
                width={20}
                height={20}
                marginBottom={5}
            />
            <Txt bold size={12} color={titleColor}>{title}</Txt>
        </Box>
    )
}

export default TabCustom

const styles = StyleSheet.create({})