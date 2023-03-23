import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Box from '@commom/Box'
import { theme } from '@theme/index'

const HeaderCommissionTable = () => {
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
                width={'30%'}
                style={styles.container}
            >
                <View />
                <Box alignCenter>
                    <Text style={styles.text}>Cấp bậc</Text>
                    <Text>Tỷ lệ hoàn trả</Text>
                </Box>

                <View style={styles.line} />
            </Box>

            <Box
                width={'17%'}
                style={styles.container}
            >
                <View />
                <Box alignCenter>
                    <Text style={styles.text}>Bậc 1</Text>
                    <Text>(%)</Text>
                </Box>
                <View style={styles.line} />
            </Box>

            <Box
                width={'17%'}
                style={styles.container}
            >
                <View />
                <Box alignCenter>
                    <Text style={styles.text}>Bậc 2</Text>
                    <Text>(%)</Text>
                </Box>
                <View style={styles.line} />
            </Box>

            <Box
                width={'17%'}
                style={styles.container}
            >
                <View />
                <Box alignCenter>
                    <Text style={styles.text}>Bậc 3</Text>
                    <Text>(%)</Text>
                </Box>
                <View style={styles.line} />
            </Box>

            <Box
                width={'17%'}
                style={styles.container}
            >
                <View />
                <Box alignCenter>
                    <Text style={styles.text}>Bậc 4</Text>
                    <Text>(%)</Text>
                </Box>
                <View />
            </Box>
        </Box>
    )
}

export default HeaderCommissionTable

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