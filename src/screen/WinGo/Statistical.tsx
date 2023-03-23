import React, { useEffect, useState } from 'react'
import Box from '@commom/Box'
import { styled } from '@theme/styled'
import Btn from '@commom/Btn'
import Txt from '@commom/Txt'
import { width } from '@util/responsive'
import GameHistory from './GameHistory'
import NumberChart from './NumberChart'
import PlaceABetHistory from './PlaceABetHistory'
import { getChartLoteryThunk, historyOrderThunk } from '@asyncThunk/winGoAsyncThunk'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import { loadingStatisticalWinGoSelector, timeLimitWinGoSelector } from '@selector/wingoSelector'
import LoadingRed from '@reuse/LoadingRed'
import ModalPlaceABetDetail from './ModalPlaceABetDetail'

const Statistical = () => {
    const dispatch = useAppDispatch()
    const timeLimit = useAppSelector(timeLimitWinGoSelector)
    const loading = useAppSelector(loadingStatisticalWinGoSelector)

    const [tab, setTab] = useState(0)

    useEffect(() => {
        handleGetChartLottery()
    }, [timeLimit])

    const handleGetChartLottery = async () => {
        await dispatch(
            getChartLoteryThunk({
                time: timeLimit,
                limit: 10,
                page: 1,
            })
        )
    }

    const handleHistoryOrderThunk = async () => {
        setTab(2)
        dispatch(
            historyOrderThunk({
                time: timeLimit,
                limit: 10,
                page: 1,
            })
        )
    }

    return (
        <Box
            backgroundColor={'white'}
            style={styled.shadow}
            marginTop={15}
            radius={10}
            padding={20}
        >
            <Box row justifySpaceBetween>
                <ButtonTab
                    title='Lịch sử game'
                    choose={tab === 0}
                    onSetTab={() => setTab(0)}
                />
                <ButtonTab
                    title='Biểu đồ'
                    choose={tab === 1}
                    marginHorizontal={5}
                    onSetTab={() => setTab(1)}
                />
                <ButtonTab
                    title='Lịch sử cược'
                    choose={tab === 2}
                    onSetTab={handleHistoryOrderThunk}
                />
            </Box>

            {loading ?
                <Box height={1000}>
                    <LoadingRed />
                </Box>
                :
                <>
                    {tab === 0 ?
                        <GameHistory /> : tab === 1 ?
                            <NumberChart /> : <PlaceABetHistory />
                    }
                </>
            }
            <ModalPlaceABetDetail />
        </Box>
    )
}

type Props = {
    title: string,
    choose: boolean,
    onSetTab: Function,
    marginHorizontal?: number,
}

const ButtonTab = ({ title, choose, onSetTab, marginHorizontal }: Props) => {
    const PADDING_HOZ = 80
    const ITEM_NUMBER = 3
    const WIDTH = (width - PADDING_HOZ) / ITEM_NUMBER

    return (
        <Btn
            onPress={onSetTab}
            backgroundColor={choose ? '#808080' : '#ebebeb'}
            // width={WIDTH}
            flex={1}
            marginHorizontal={marginHorizontal}
            height={35}
            radius={10}
        >
            <Txt color={choose ? 'white' : 'black'}>
                {title}
            </Txt>
        </Btn>
    )
}

export default Statistical