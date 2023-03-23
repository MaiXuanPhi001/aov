import React from 'react'
import Box from '@commom/Box'
import { theme } from '@theme/index'
import { StyleSheet, Text, View } from 'react-native'

const HeaderTable = () => {
    return (
        <Box
            row
            alignCenter
            justifyCenter
            height={50}
            backgroundColor={theme.colors.gray1}
            borderBottomWidth={0.5}
            borderColor={theme.colors.gray2}
            marginTop={10}
        >
            <Box
                width={'45%'}
                style={styles.container}
            >
                <View />
                <Text style={styles.text}>Thời gian</Text>
                <View style={styles.line} />
            </Box>
            <Box
                width={'30%'}
                style={styles.container}
            >
                <View />
                <Box>
                    <Text style={styles.text}>Số tiền</Text>
                    <Text style={styles.text}>(VNĐ)</Text>
                </Box>
                <View style={styles.line} />
            </Box>
            <Box
                width={'25%'}
                style={styles.container}
            >
                <View />
                <Text style={styles.text}>Chi tiết</Text>
                <View />
            </Box>
        </Box>
    )
}

export default HeaderTable

const styles = StyleSheet.create({
    container: {
        height: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 13,
    },
    line: {
        backgroundColor: theme.colors.gray2,
        width: 1,
        height: 10,
    }
})