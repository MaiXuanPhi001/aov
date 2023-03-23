import React from 'react'
import Box from '@commom/Box'
import Img from '@commom/Img'
import { styled } from '@theme/styled'
import Txt from '@commom/Txt'
import Btn from '@commom/Btn'
import { useAppSelector } from '@hooks/index'
import { gameHistoryWinGoSelector, timeLimitWinGoSelector, timeWinGoSelector } from '@selector/wingoSelector'
import Oclock from './Oclock'
import { minuteSecond } from '@method/date'
import { navigate } from '@navigation/navigationRef'
import routes from '@util/routes'

const Countdown = () => {
    const timeLimit = useAppSelector(timeLimitWinGoSelector)
    const time = useAppSelector(timeWinGoSelector)
    const gameHistory = useAppSelector(gameHistoryWinGoSelector)

    const historyItem: {id: number} = gameHistory.data.slice(0, 1)[0]

    const oclock = minuteSecond(time)

    return (
        <Box
            backgroundColor={'#f94b55'}
            marginTop={20}
            height={120}
            alignCenter
            justifyCenter
            style={styled.shadow}
            radius={10}
        >
            <Img
                source={require('@images/wingo/bannertimeout.png')}
                resizeMode={'contain'}
                width={120}
                height={'100%'}
                absolute
            />

            <Box
                row
                width={'100%'}
                height={'100%'}
                justifySpaceBetween
                paddingVertical={15}
                paddingHorizontal={20}
                flex={2}
            >
                <Box
                    flex={1}
                    alignStart
                >
                    <Box
                        radius={10}
                        borderColor={'white'}
                        borderWidth={1}
                        alignSelf={'flex-start'}
                    >
                        <Txt
                            paddingVertical={5}
                            paddingHorizontal={10}
                            bold
                            size={12}
                            color={'white'}
                        >
                            {timeLimit + ' phút'}
                        </Txt>
                    </Box>
                    <Txt
                        color={'white'}
                        bold
                        size={16}
                        marginVertical={10}
                    >
                        {historyItem?.id}
                    </Txt>
                    <Btn onPress={() => navigate(routes.TUTORIAL)}>
                        <Txt bold color={'white'}>Xem hướng dẫn</Txt>
                    </Btn>
                </Box>

                <Box
                    flex={1}
                    alignCenter
                    marginLeft={30}
                    justifyCenter
                >
                    <Txt bold color={'white'}>{time > 4 ? 'ĐẶT CƯỢC' : 'CHỜ ĐẶT CƯỢC'}</Txt>
                    <Oclock oclock={oclock} />
                </Box>
            </Box>

            <Box
                alignCenter
                absolute
                height={'100%'}
            >
                <Box
                    width={10}
                    height={10}
                    radius={50}
                    backgroundColor={'white'}
                    marginTop={-5}
                />
                <Box
                    width={2}
                    height={110}
                    backgroundColor={'white'}
                />
                <Box
                    width={10}
                    height={10}
                    radius={50}
                    backgroundColor={'white'}
                />
            </Box>
        </Box>
    )
}

export default Countdown
