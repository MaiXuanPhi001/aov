import Box from '@commom/Box'
import Btn from '@commom/Btn'
import Txt from '@commom/Txt'
import { useAppSelector } from '@hooks/index'
import { minuteSecond } from '@method/date'
import { timeAovSelector } from '@selector/aovSelector'
import { width } from '@util/responsive'
import React from 'react'
import { ImageBackground, Keyboard, StyleSheet, Text } from 'react-native'
import { Character, charaters } from './data'
import ItemCharacter from './ItemCharacter'

type Props = {
    onOpenBottomSheet: Function,
    bottomSheetRef: React.MutableRefObject<any>,
}

const Characters = ({ onOpenBottomSheet, bottomSheetRef }: Props) => {
    const time = useAppSelector(timeAovSelector)
    const oclock = minuteSecond(time)

    if (time === 4) {
        if (bottomSheetRef?.current) {
            bottomSheetRef.current.close()
            Keyboard.dismiss()
        }
    }

    return (
        <ImageBackground
            source={require('@images/aov/bg-info.png')}
            resizeMode={'stretch'}
            style={{ marginTop: 20, padding: 15 }}
        >
            <Box>
                <Box row justifySpaceAround alignCenter marginTop={20}>
                    {charaters.slice(0, 5).map((character: Character) =>
                        <ItemCharacter
                            key={character.order}
                            character={character}
                            onOpenBottomSheet={onOpenBottomSheet}
                        />
                    )}
                </Box>

                <Box row justifySpaceAround alignCenter marginTop={15}>
                    {charaters.slice(5, 10).map((character: Character) =>
                        <ItemCharacter
                            key={character.order}
                            character={character}
                            onOpenBottomSheet={onOpenBottomSheet}
                        />
                    )}
                </Box>
            </Box>

            <Box row justifySpaceBetween alignCenter marginTop={20} marginBottom={40}>
                <Btn onPress={() => onOpenBottomSheet({
                    type: 3,
                    order: 'big',
                    image: require('@images/aov/imgSPP.png'),
                })}
                >
                    <ImageBackground
                        source={require('@images/aov/bg-adsp.png')}
                        resizeMode='stretch'
                        style={styles.imageBackground}
                    >
                        <Txt color={'white'} bold size={20}>SP</Txt>
                    </ImageBackground>
                </Btn>

                <Btn onPress={() => onOpenBottomSheet({
                    type: 3,
                    order: 'small',
                    image: require('@images/aov/imgADD.png'),
                })}
                >
                    <ImageBackground
                        source={require('@images/aov/bg-adsp.png')}
                        resizeMode='stretch'
                        style={styles.imageBackground}
                    >
                        <Txt color={'white'} bold size={20}>AD</Txt>
                    </ImageBackground>
                </Btn>
            </Box>

            {/* 4 giây đếm ngược */}
            {time <= 4 &&
                <>
                    <Box style={styles.oclockContainer} />
                    <Box style={styles.oclockContent}>
                        <Box style={styles.oclock}>
                            <Text style={styles.textOclock}>0</Text>
                        </Box>

                        <Box style={styles.oclock}>
                            <Text style={styles.textOclock}>{oclock.slice(-1)}</Text>
                        </Box>
                    </Box>
                </>
            }
            {/* 4 giây đếm ngược END */}
        </ImageBackground>
    )
}

export default Characters

const styles = StyleSheet.create({
    textOclock: {
        fontSize: 140,
        fontFamily: 'Luke-Medium300',
        color: 'black',
    },
    oclock: {
        backgroundColor: 'white',
        width: 120,
        height: 190,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 3,
    },
    oclockContent: {
        flexDirection: 'row',
        position: 'absolute',
        borderRadius: 10,
        width: '106%',
        alignSelf: 'center',
        height: '110%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    oclockContainer: {
        backgroundColor: 'white',
        position: 'absolute',
        flexDirection: 'row',
        borderTopLeftRadius: 45,
        borderBottomRightRadius: 45,
        width: '106%',
        alignItems: 'center',
        height: '110%',
        opacity: 0.9,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    imageBackground: {
        paddingVertical: 20,
        width: width * 42 / 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
})