import { getAovLoteryThunk } from '@asyncThunk/aovAsyncThunk'
import Box from '@commom/Box'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import Pagination from '@reuse/Pagination'
import { gameHistoryAovSelector, timeLimitAovSelector } from '@selector/aovSelector'
import React from 'react'
import { Alert } from 'react-native'
import ItemGameHistory from './ItemGameHistory'

type History = {
    id: number,
    number: number,
    type: number,
    color: string[],
}

const GameHistory = () => {
    const dispatch = useAppDispatch()

    const gameHistory = useAppSelector(gameHistoryAovSelector)
    const timeLimit = useAppSelector(timeLimitAovSelector)

    const handleGetChartLotteryByPage = async (page: number) => {
        const { payload } = await dispatch(
            getAovLoteryThunk({
                time: timeLimit,
                limit: 10,
                page,
            })
        )
        !payload.status && Alert.alert(payload.message)
    }

    return (
        <Box backgroundColor={'white'} marginTop={10} radius={10}>
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
            <Box margin={10}>
                <Pagination
                    indexPage={gameHistory.indexPage}
                    total={gameHistory.total}
                    onBack={() => handleGetChartLotteryByPage(gameHistory.indexPage - 1)}
                    onNext={() => handleGetChartLotteryByPage(gameHistory.indexPage + 1)}
                />
            </Box>
        </Box>
    )
}

export default GameHistory