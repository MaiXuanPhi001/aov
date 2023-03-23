import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Img from '@commom/Img'
import { styled } from '@theme/styled'
import Btn from '@commom/Btn'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import { dateChooseStatisticalMarketingSelector, loadingStatisticalMarketingSelector } from '@selector/marketingSelector'
import { formatDate, getTimeStamp, getYesterday } from '@method/date'
import { historyCommissionThunk } from '@asyncThunk/marketingAsyncThunk'
import LoadingWhite from '@reuse/LoadingWhite'

const Search = ({ bottomSheetRef }: any) => {
    const dispatch = useAppDispatch()
    const dateChoose = useAppSelector(dateChooseStatisticalMarketingSelector)
    const loading = useAppSelector(loadingStatisticalMarketingSelector)

    const handleHistoryCommission = async () => {
        if (dateChoose) {
            const timeStart = getTimeStamp(getYesterday(dateChoose + ' 00:00:00'))
            const timeEnd = getTimeStamp(dateChoose + ' 23:59:59')
            
            const { payload } = await dispatch(historyCommissionThunk({
                limit: 10,
                page: 1,
                timeStart: timeStart,
                timeEnd: timeEnd,
            }))

            !payload.status && Alert.alert(payload.message)
        }
    }

    return (
        <Box>
            <Box
                backgroundColor={theme.colors.gray4}
                padding={10}
            >
                <Txt size={15}>Đội trực tiếp (0 người)</Txt>
            </Box>
            <Box>
                <TouchableOpacity
                    onPress={() => bottomSheetRef.current.open()}
                    style={styles.button}
                >
                    <Text>{dateChoose ? formatDate(dateChoose) : 'Chọn ngày'}</Text>
                    <Img
                        source={require('@images/marketing/calendar.png')}
                        width={20}
                        height={20}
                    />
                </TouchableOpacity>
            </Box>

            <Btn
                onPress={handleHistoryCommission}
                disabled={loading}
                style={[styled.redButton2, { width: 120 }]}
                alignSelf={'center'}
                paddingHorizontal={20}
            >
                {loading ?
                    <LoadingWhite /> :
                    <Txt color={'white'} bold>Tìm kiếm</Txt>
                }
            </Btn>
        </Box>
    )
}

export default Search

export const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        padding: 10,
        borderColor: theme.colors.gray3,
        marginVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})