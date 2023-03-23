import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Box from '@commom/Box'
import { theme } from '@theme/index'

const HeaderTableAccountManager = () => {
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
                width={'15%'}
                style={styles.container}
            >
                <View />
                <Text style={styles.text}>STT</Text>
                <View style={styles.line} />
            </Box>

            <Box
                width={'30%'}
                style={styles.container}
            >
                <View />
                <Text style={styles.text}>Username</Text>
                <View style={styles.line} />
            </Box>

            <Box
                width={'30%'}
                style={styles.container}
            >
                <View />
                <Box alignCenter>
                    <Text style={styles.text}>Parent</Text>
                    <Text style={styles.text}>username</Text>
                </Box>
                <View style={styles.line} />
            </Box>

            <Box
                width={'25%'}
                style={styles.container}
            >
                <View />
                <Box alignCenter>
                    <Text style={styles.text}>Commission</Text>
                    <Text style={styles.text}>balance</Text>
                </Box>
                <View />
            </Box>
        </Box>
    )
}

export default HeaderTableAccountManager

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