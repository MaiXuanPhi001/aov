import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import { useAppSelector } from '@hooks/index'
import { profileSelector } from '@selector/userSelector'
import { Profile } from '@interface/user'
import { styled } from '@theme/styled'
import { theme } from '@theme/index'
import { numberWithCommas } from '@method/format'
import { StyleSheet, View } from 'react-native'

const Commission = () => {
    const profile: Profile = useAppSelector<any>(profileSelector)

    return (
        <Box paddingHorizontal={10}>
            <Box
                backgroundColor={'#80807f'}
                alignCenter
                justifyCenter
                alignSelf={'flex-end'}
                paddingHorizontal={20}
                height={30}
                radius={5}
                marginVertical={10}
            >
                <Txt bold color={'white'}>Thành viên cấp {profile.level}</Txt>
            </Box>

            <Box
                alignCenter
                borderWidth={1}
                backgroundColor={'#fef8f9'}
                borderColor={theme.colors.red}
                padding={10}
                style={styled.shadow}
            >
                <Txt bold size={15} marginVertical={10}>Hoa hồng hôm nay</Txt>
                <Txt bold size={16} color={'red'}>{numberWithCommas(profile.commissionBalance + profile.commissionTeam)} đồng</Txt>
                
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Txt>Hoa hồng trực tiếp</Txt>
                        <Txt bold>{numberWithCommas(profile.commissionBalance)} đồng</Txt>
                    </View>
                    <View style={styles.content}>
                        <Txt>Hoa hồng đội</Txt>
                        <Txt bold>{numberWithCommas(profile.commissionTeam)} đồng</Txt>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.content}>
                        <Txt>Doanh thu đội</Txt>
                        <Txt bold>{numberWithCommas(profile.revenueTeam)} VNĐ</Txt>
                    </View>
                    <View style={styles.content}>
                        <Txt>Tiền nạp đội</Txt>
                        <Txt bold>{numberWithCommas(profile.rechargeTeam)} VNĐ</Txt>
                    </View>
                </View>
            </Box>
        </Box>
    )
}

export default Commission

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        justifyContent: 'space-around',
        marginVertical: 5,
    },
    content: {
        alignItems: 'center',
        padding: 10,
    }
})