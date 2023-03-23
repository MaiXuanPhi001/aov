import React from 'react'
import Box from '@commom/Box'
import { StyleSheet, Text, View } from 'react-native'
import { theme } from '@theme/index'

const HeaderRevenueRable = () => {
    return (
        <Box
            row
            alignCenter
            justifyCenter
            borderBottomWidth={0.5}
            borderColor={theme.colors.gray2}
        >
            <Box
                width={'21%'}
                style={styles.container}
            >
                <View />
                <Text style={styles.text}>Cấp đại lý</Text>
                <View style={styles.line} />
            </Box>
            <Box
                width={'19%'}
                style={styles.container}
            >
                <View />
                <Text style={styles.text}>Số người</Text>
                <View style={styles.line} />
            </Box>
            <Box
                width={'30%'}
                style={styles.container}
            >
                <View />
                <Text style={styles.text}>Doanh thu đội</Text>
                <View style={styles.line} />
            </Box>
            <Box
                width={'30%'}
                style={styles.container}
            >
                <View />
                <Text style={styles.text}>Tiền nạp đội</Text>
                <View />
            </Box>
        </Box>
    )
}

export default HeaderRevenueRable

const styles = StyleSheet.create({
    container: {
        height: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.colors.gray1,
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