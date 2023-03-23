import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Box from '@commom/Box'
import { theme } from '@theme/index'

const HeaderTable = () => {
  return (
    <Box
      row
      height={45}
      alignCenter
      justifyCenter
      marginTop={10}
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
        width={'35%'}
        style={styles.container}
      >
        <View />
        <Text style={styles.text}>Email</Text>
        <View style={styles.line} />
      </Box>

      <Box
        width={'25%'}
        style={styles.container}
      >
        <View />
        <Text style={styles.text}>Doanh thu</Text>
        <View style={styles.line} />
      </Box>

      <Box
        width={'25%'}
        style={styles.container}
      >
        <View />
        <Text style={styles.text}>Thời gian</Text>
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
      height: 20,
  }
})