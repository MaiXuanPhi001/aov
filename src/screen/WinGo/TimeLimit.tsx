import React, { useEffect } from 'react'
import Box from '@commom/Box'
import ItemTimeLimit from './ItemTimeLimit'
import { styled } from '@theme/styled'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import { historyOrderWinGoSelector, timeLimitWinGoSelector, timeTypeWinGoSelector } from '@selector/wingoSelector'
import wingoSlice from '@slice/wingoSlice'
import io from 'socket.io-client'
import contants from '@util/contants'
import { getChartLoteryThunk, historyOrderThunk } from '@asyncThunk/winGoAsyncThunk'
import { getProfileThunk } from '@asyncThunk/userAsyncThunk'

type Time = {
    number: number,
    timeType: string,
}

const TimeLimit = () => {
    const dispatch = useAppDispatch()

    const timeLimit = useAppSelector(timeLimitWinGoSelector)
    const timeType = useAppSelector(timeTypeWinGoSelector)
    const historyOrder = useAppSelector(historyOrderWinGoSelector)

    const times: Time[] = [
        {
            number: 1,
            timeType: 'TIME',
        },
        {
            number: 3,
            timeType: 'TIME3',
        },
        {
            number: 5,
            timeType: 'TIME5',
        },
        {
            number: 10,
            timeType: 'TIME10',
        },
    ]

    const handleChangeTimeLimit = async (time: Time) => {
        dispatch(wingoSlice.actions.setTimeLimit(time))

        await dispatch(
            historyOrderThunk({
                limit: 10,
                time: time.number,
                page: 1,
            })
        )
    }

    useEffect((): any => {
        const newSocket = io(contants.HOSTING)
        newSocket.on(timeType, second => {
            const time = (timeLimit * 60) - second
            dispatch(wingoSlice.actions.setTime(time))

            if (time === (timeLimit * 60 - 1)) {
                handleReloadStatistical()
            }
        })

        return () => newSocket.close();
    }, [timeLimit, timeType])

    const handleReloadStatistical = async () => {
        await dispatch(
            getChartLoteryThunk({
                time: timeLimit,
                limit: 10,
                page: 1,
            })
        )

        await dispatch(
            historyOrderThunk({
                limit: 10,
                time: timeLimit,
                page: historyOrder.indexPage,
            })
        )
        
        await dispatch(historyOrderThunk({
            limit: 10,
            time: timeLimit,
            page: 1,
        }))

        await dispatch(getProfileThunk())
    }

    return (
        <Box
            marginTop={15}
            backgroundColor={'white'}
            radius={10}
            style={styled.shadow}
            paddingVertical={20}
        >
            <Box
                width={'100%'}
                height={5}
                backgroundColor={'#c3c3c3'}
            />

            <Box
                row
                justifySpaceAround
                marginTop={-10}
                paddingHorizontal={20}
            >
                {times.map((time: Time) => (
                    <ItemTimeLimit
                        key={time.timeType}
                        time={time}
                        timeLimit={timeLimit}
                        onChangeTimeLimit={handleChangeTimeLimit}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default TimeLimit