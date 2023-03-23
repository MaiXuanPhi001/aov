import React from 'react'
import Box from '@commom/Box'
import ItemNumberChart from './ItemNumberChart'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import { gameHistoryWinGoSelector, timeLimitWinGoSelector } from '@selector/wingoSelector'
import Pagination from '@reuse/Pagination'
import { getChartLoteryThunk } from '@asyncThunk/winGoAsyncThunk'

type Data = {
    id: number,
    number: number,
}

const NumberChart = () => {
    const dispatch = useAppDispatch()

    const gameHistory = useAppSelector(gameHistoryWinGoSelector)
    const timeLimit = useAppSelector(timeLimitWinGoSelector)

    const handleGetChartLotteryByPage = async (page: number) => {
        await dispatch(
            getChartLoteryThunk({
                time: timeLimit,
                limit: 10,
                page,
            })
        )
    }

    return (
        <Box marginTop={20}>
            {gameHistory.data.map((item: Data, index: number) => {
                if (index === 0) return
                return (
                    <ItemNumberChart
                        key={item.id}
                        item={item}
                        dataGameHistory={gameHistory.data}
                        index={index}
                    />
                )
            })}
            
            <Pagination 
                indexPage={gameHistory.indexPage}
                total={gameHistory.total}
                onBack={() => handleGetChartLotteryByPage(gameHistory.indexPage - 1)}
                onNext={() => handleGetChartLotteryByPage(gameHistory.indexPage + 1)}
            />
        </Box>
    )
}

export default NumberChart