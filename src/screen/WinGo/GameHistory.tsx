import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'
import ItemGameHistory from './ItemGameHistory'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import { gameHistoryWinGoSelector, timeLimitWinGoSelector } from '@selector/wingoSelector'
import Pagination from '@reuse/Pagination'
import { getChartLoteryThunk } from '@asyncThunk/winGoAsyncThunk'
import { Alert } from 'react-native'

type History = {
    id: number,
    number: number,
    type: string,
    color: string[],
}

const GameHistory = () => {
    const dispatch = useAppDispatch()

    const gameHistory = useAppSelector(gameHistoryWinGoSelector)
    const timeLimit = useAppSelector(timeLimitWinGoSelector)

    const handleGetChartLotteryByPage = async (page: number) => {
        const { payload } = await dispatch(
            getChartLoteryThunk({
                time: timeLimit,
                limit: 10,
                page,
            })
        )
        !payload.status && Alert.alert(payload.message)
    }

    return (
        <Box>
            <HeaderTable />

            <Box>
                {gameHistory.data.map((history: History, index: number) => {
                    if (index === 0) return
                    return (
                        <ItemGameHistory
                            key={history.id}
                            history={history}
                        />
                    )
                })}
            </Box>
            <Pagination
                indexPage={gameHistory.indexPage}
                total={gameHistory.total}
                onBack={() => handleGetChartLotteryByPage(gameHistory.indexPage - 1)}
                onNext={() => handleGetChartLotteryByPage(gameHistory.indexPage + 1)}
            />
        </Box>
    )
}

const HeaderTable = () => {
    return (
        <Box
            row
            justifySpaceBetween
            width={'100%'}
            backgroundColor={'#fafafa'}
            marginTop={10}
            padding={10}
            borderBottomWidth={1}
            borderColor={theme.colors.gray3}
        >
            <Box
                width={'40%'}
                alignCenter
                justifyCenter
                borderRightWidth={1}
                borderColor={theme.colors.gray3}
            >
                <Txt bold>Kỳ xổ</Txt>
            </Box>

            <Box
                width={'60%'}
                alignCenter
                justifyCenter
            >
                <Txt bold marginBottom={20}>Kết quả</Txt>
                <Box
                    row
                    justifySpaceBetween
                    width={'100%'}
                    flex={3}
                >
                    <Box
                        flex={1}
                        alignCenter
                    >
                        <Txt bold>Số</Txt>
                    </Box>
                    <Box
                        borderRightWidth={1}
                        borderLeftWidth={1}
                        borderColor={theme.colors.gray3}
                        flex={1}
                        alignCenter
                    >
                        <Txt bold>Loại</Txt>
                    </Box>
                    <Box
                        borderColor={theme.colors.gray3}
                        flex={1}
                        alignCenter
                    >
                        <Txt bold>Màu</Txt>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default GameHistory