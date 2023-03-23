import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Box from '@commom/Box'
import { theme } from '@theme/index'

const HeaderTableUserF1 = () => {
    return (
        <Box
            row
            height={60}
            alignCenter
            justifyCenter
            backgroundColor={theme.colors.gray1}
            borderBottomWidth={0.5}
            borderColor={theme.colors.gray2}
        >
            <Box
                width={50}
                style={styles.container}
            >
                <View />
                <Text style={styles.text}>STT</Text>
                <View style={styles.line} />
            </Box>

            <Box
                width={200}
                style={styles.container}
            >
                <View />
                <Text style={styles.text}>Username</Text>
                <View style={styles.line} />
            </Box>

            <Box
                width={200}
                style={styles.container}
            >
                <View />
                <Text style={styles.text}>Email</Text>
                <View style={styles.line} />
            </Box>

            <Box
                width={150}
                style={styles.container}
            >
                <View />
                <Text style={styles.text}>Mã giới thiệu</Text>
                <View style={styles.line} />
            </Box>

            <Box
                width={70}
                style={styles.container}
            >
                <View />
                <Text style={styles.text}>Level</Text>
                <View style={styles.line} />
            </Box>

            <Box
                width={120}
                style={styles.container}
            >
                <View />
                <Box alignCenter>
                    <Text style={styles.text}>Commission</Text>
                    <Text style={styles.text}>balance</Text>
                </Box>
                <View style={styles.line} />
            </Box>

            <Box
                width={200}
                style={styles.container}
            >
                <View />
                <Text style={styles.text}>Thời gian</Text>
                <View />
            </Box>
        </Box>
    )
}

export default HeaderTableUserF1

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
        height: 20,
    }
})