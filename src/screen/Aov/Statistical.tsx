import { getAovLoteryThunk, historyOrderAovThunk } from '@asyncThunk/aovAsyncThunk'
import Box from '@commom/Box'
import Btn from '@commom/Btn'
import Txt from '@commom/Txt'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import LoadingRed from '@reuse/LoadingRed'
import { loadingStatisticalAovSelector, timeLimitAovSelector } from '@selector/aovSelector'
import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import CharacterChart from './CharacterChart'
import GameHistory from './GameHistory'
import ModalPlaceABetDetail from './ModalPlaceABetDetail'
import PlaceABetHistory from './PlaceABetHistory'

const Statistical = () => {
    const dispatch = useAppDispatch()
    const timeLimit = useAppSelector(timeLimitAovSelector)
    const loading = useAppSelector(loadingStatisticalAovSelector)

    const [tab, setTab] = useState(0)

    useEffect(() => {
        handlegetAovLoteryThunk()
    }, [timeLimit])

    const handlegetAovLoteryThunk = async () => {
        await dispatch(
            getAovLoteryThunk({
                time: timeLimit,
                limit: 10,
                page: 1,
            })
        )
    }

    const handleHistoryOrderAovThunk = async () => {
        setTab(2)
        dispatch(
            historyOrderAovThunk({
                time: timeLimit,
                limit: 10,
                page: 1,
            })
        )
    }

    return (
        <ImageBackground
            source={require('@images/aov/backg.png')}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 10 }}
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
                    onSetTab={handleHistoryOrderAovThunk}
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
                            <CharacterChart /> : <PlaceABetHistory />
                    }
                </>
            }
            <ModalPlaceABetDetail />
        </ImageBackground>
    )
}

type Props = {
    title: string,
    choose: boolean,
    onSetTab: Function,
    marginHorizontal?: number,
}

const ButtonTab = ({ title, choose, onSetTab, marginHorizontal }: Props) => {
    return (
        <Btn
            onPress={onSetTab}
            backgroundColor={choose ? '#2b1d75' : '#eeeaff'}
            borderWidth={choose ? 2 : 0}
            borderColor={'white'}
            flex={1}
            marginHorizontal={marginHorizontal}
            height={35}
            radius={10}
        >
            <Txt color={choose ? 'white' : '#3f3283'} bold>
                {title}
            </Txt>
        </Btn>
    )
}

export default Statistical

const styles = StyleSheet.create({
    imageBackground: {
        marginTop: 15,
        padding: 20,
    }
})