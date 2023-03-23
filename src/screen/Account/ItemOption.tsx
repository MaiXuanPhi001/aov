import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box from '@commom/Box'
import Btn from '@commom/Btn'
import Img from '@commom/Img'
import Txt from '@commom/Txt'

type Props = {
    icon: string,
    title: string,
    onPress: Function,
}

const ItemOption = ({ icon, title, onPress }: Props) => {
    return (
        <Btn
            onPress={onPress}
            row
            alignCenter
            justifySpaceBetween
            height={25}
            marginVertical={15}
        >
            <Box
                row
                alignEnd
            >
                <Img
                    source={icon}
                    width={25}
                    height={25}
                    marginRight={10}
                />
                <Txt bold size={16}>{title}</Txt>
            </Box>

            <Img
                source={require('@images/account/next.png')}
                height={15}
                width={15}
            />
        </Btn>
    )
}

export default ItemOption

const styles = StyleSheet.create({})