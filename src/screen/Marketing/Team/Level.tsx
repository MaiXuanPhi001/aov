import React from 'react'
import Img from '@commom/Img'
import { theme } from '@theme/index'
import Txt from '@commom/Txt'
import Btn from '@commom/Btn'
import Box from '@commom/Box'
import { styled } from '@theme/styled'
import Scroll from '@commom/Scroll'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { height } from '@util/responsive'

interface Props {
    level: number,
    setLevel: Function,
}

const Level = ({ level, setLevel }: Props) => {
    const levels: number[] = [0, 1, 2, 3, 4, 5]
    const heightLevel = useSharedValue(0)

    const animationStyle = useAnimatedStyle((): any => {
        return {
            height: heightLevel.value,
        }
    })

    const handleOpenLevel = () => {
        heightLevel.value = withSpring(heightLevel.value > 0 ? 0 : 240, {
            damping: 100,
            stiffness: 400,
        })
    }

    const handleSetlevel = (item: number) => {
        setLevel(item)
        handleOpenLevel()
    }

    return (
        <View>
            <Btn
                onPress={handleOpenLevel}
                row
                alignCenter
                backgroundColor={'white'}
                borderColor={theme.colors.gray2}
                padding={3}
                radius={5}
                borderWidth={1}
            >
                <Txt marginHorizontal={5}>Level {level}</Txt>
                <Img
                    source={require('@images/marketing/down-arrow.png')}
                    width={20}
                    height={20}
                />
            </Btn>

            <Animated.View
                style={[styles.view, animationStyle]}
            >
                <ScrollView>
                    {levels.map((item: number) =>
                        <ItemLevel
                            key={item}
                            item={item}
                            level={level}
                            onSetLevel={handleSetlevel}
                        />
                    )}
                </ScrollView>
            </Animated.View>
        </View>
    )
}

interface PropsItemLevel {
    item: number,
    level: number,
    onSetLevel: Function,
}

const ItemLevel = ({ item, level, onSetLevel }: PropsItemLevel) => {
    return (
        <TouchableOpacity
            onPress={() => onSetLevel(item)}
            style={[styles.button, {backgroundColor: item === level ? theme.colors.gray3 : 'white'}]}
        >
            <Text>Level {item}</Text>
        </TouchableOpacity>
    )
}

export default Level

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    view: {
        position: 'absolute',
        top: 35,
        width: '100%',
        backgroundColor: 'white',
        ...styled.shadow,
    }
})