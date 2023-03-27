import React from 'react'
import Box from '@commom/Box'
import ItemNumberChart from './ItemNumberChart'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import Pagination from './Pagination'
import { gameHistoryAovSelector, timeLimitAovSelector } from '@selector/aovSelector'
import { getAovLoteryThunk } from '@asyncThunk/aovAsyncThunk'

type Data = {
    id: number,
    number: number,
}

const CharacterChart = () => {
    const dispatch = useAppDispatch()

    const gameHistory = useAppSelector(gameHistoryAovSelector)
    const timeLimit = useAppSelector(timeLimitAovSelector)

    const handleGetAovLoteryByPage = async (page: number) => {
        await dispatch(
            getAovLoteryThunk({
                time: timeLimit,
                limit: 10,
                page,
            })
        )
    }

    return (
        <Box marginTop={10}>
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
                borderColor={'white'}
                onBack={() => handleGetAovLoteryByPage(gameHistory.indexPage - 1)}
                onNext={() => handleGetAovLoteryByPage(gameHistory.indexPage + 1)}
            />
        </Box>
    )
}

export default CharacterChart