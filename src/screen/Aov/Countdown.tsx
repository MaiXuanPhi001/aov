import Box from '@commom/Box'
import Txt from '@commom/Txt'
import { useAppSelector } from '@hooks/index'
import { minuteSecond } from '@method/date'
import { gameHistoryAovSelector, timeAovSelector, timeLimitAovSelector } from '@selector/aovSelector'
import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import Oclock from './Oclock'

const Countdown = () => {
    const timeLimit = useAppSelector(timeLimitAovSelector)
    const time = useAppSelector(timeAovSelector)
    const gameHistory = useAppSelector(gameHistoryAovSelector)

    const historyItem: { id: number } = gameHistory.data.slice(0, 1)[0]

    const oclock = minuteSecond(time)

    return (
        <ImageBackground
            source={require('@images/aov/bg-info.png')}
            resizeMode={'stretch'}
            style={styles.imageBackground}
        >
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
                    alignCenter
                    justifyCenter
                >
                    <Box
                        radius={10}
                        borderColor={'white'}
                        borderWidth={2}
                        alignCenter
                    >
                        <Txt
                            paddingVertical={5}
                            paddingHorizontal={10}
                            bold
                            size={16}
                            color={'white'}
                        >
                            {timeLimit + ' phút'}
                        </Txt>
                    </Box>
                    <Txt
                        color={'white'}
                        bold
                        size={20}
                        marginVertical={10}
                    >
                        {historyItem?.id}
                    </Txt>
                </Box>

                <Box
                    flex={1}
                    alignCenter
                    marginLeft={30}
                    justifyCenter
                >
                    <Txt bold color={'white'} size={16}>{time > 4 ? 'ĐẶT CƯỢC' : 'CHỜ ĐẶT CƯỢC'}</Txt>
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
        </ImageBackground>
    )
}

export default Countdown

const styles = StyleSheet.create({
    imageBackground: {
        marginTop: 20,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    }
})