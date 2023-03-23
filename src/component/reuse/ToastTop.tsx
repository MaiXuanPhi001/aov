import { StyleSheet } from 'react-native'
import React, { forwardRef, useCallback, useImperativeHandle } from 'react'
import Animated, { useAnimatedProps, useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated'
import Img from '@commom/Img'
import { TextInput } from 'react-native-gesture-handler'
import Box from '@commom/Box'
import { styled } from '@theme/styled'

const ToastTop = forwardRef((_, ref) => {
    const topStart = -80
    const topAnimation = useSharedValue<number>(topStart)

    const opacityImageCheck = useSharedValue<number>(0)
    const opacityImageRemove = useSharedValue<number>(0)

    const messageToast = useSharedValue<string>('')

    const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

    const animationStyle = useAnimatedStyle((): any => {
        return {
            top: topAnimation.value,
        }
    })

    const slideDown = useCallback((text: string, status: boolean) => {
        'worklet'
        messageToast.value = text

        status ? [opacityImageCheck.value, opacityImageRemove.value] = [1, 0] :
            [opacityImageCheck.value, opacityImageRemove.value] = [0, 1]

        topAnimation.value = withSpring(55, {
            damping: 100,
            stiffness: 400,
        }, () => {
            topAnimation.value = withDelay(2000, withSpring(topStart))
        })
    }, [])

    useImperativeHandle(
        ref,
        () => ({
            slideDown,
        }),
        [slideDown]
    )

    const maxLabelText = useAnimatedProps((): Partial<{}> => {
        return {
            text: `${messageToast.value}`,
        }
    })

    const imgCheckAnimated = useAnimatedStyle(() => {
        return {
            opacity: opacityImageCheck.value
        }
    })

    const imgRemoveAnimated = useAnimatedStyle(() => {
        return {
            opacity: opacityImageRemove.value
        }
    })

    return (
        <Animated.View
            style={[
                styles.animated,
                animationStyle,
            ]}
        >
            <Box
                width={35}
                height={50}
                alignCenter
                justifyCenter
                marginRight={10}
            >
                <Animated.View
                    style={[styles.animatedImage, imgCheckAnimated]}
                >
                    <Img
                        source={require('@images/wingo/check.png')}
                        width={35}
                        height={35}
                    />
                </Animated.View>
                <Animated.View
                    style={[styles.animatedImage, imgRemoveAnimated]}
                >
                    <Img
                        source={require('@images/wingo/remove.png')}
                        width={35}
                        height={35}
                    />
                </Animated.View>
            </Box>

            <AnimatedTextInput
                style={styles.labelText}
                defaultValue='0'
                animatedProps={maxLabelText}
                editable={false}
            />
        </Animated.View>
    )
})

export default ToastTop

const styles = StyleSheet.create({
    animated: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignSelf: 'center',
        position: 'absolute',
        zIndex: 10,
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 5,
        ...styled.shadow,
    },
    labelText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
    },
    animatedImage: {
        position: 'absolute',
    }
})