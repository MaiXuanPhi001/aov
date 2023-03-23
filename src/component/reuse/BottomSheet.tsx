import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import React, { forwardRef, useCallback, useImperativeHandle } from 'react'
import Animated, { interpolate, runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { height } from '@util/responsive'
import { PanGestureHandler } from 'react-native-gesture-handler'

type Props = {
    activeHeight: number,
    activeHeightFocus: number,
    backDropColor: string,
    backgroundColor: string,
    children: JSX.Element | JSX.Element[],
    onOpendBottomSheet?: Function, 
}

type CTX = {
    startY: number
}

const BottomSheet = forwardRef(({ 
    activeHeight, 
    activeHeightFocus, 
    backDropColor, 
    backgroundColor, 
    children,
    onOpendBottomSheet,
}: Props, ref) => {
    const topAnimation = useSharedValue(height)
    const newActiveHeight = height - activeHeight
    const newActiveHeightFocus = height - activeHeightFocus

    const animationStyle = useAnimatedStyle(() => {
        const top = topAnimation.value
        return {
            top,
        }
    })

    const backDropAnimation = useAnimatedStyle(() => {
        const opacity = interpolate(
            topAnimation.value,
            [height, newActiveHeight],
            [0, 0.5]
        )

        const display = opacity === 0 ? 'none' : 'flex'

        return {
            opacity,
            display,
        }
    })

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx: CTX) => {
            ctx.startY = topAnimation.value
        },
        onActive: (event, ctx) => {
            if (event.translationY < 0) {
                topAnimation.value = withSpring(newActiveHeight, {
                    damping: 100,
                    stiffness: 400,
                })
            } else {
                topAnimation.value = withSpring(ctx.startY + event.translationY, {
                    damping: 100,
                    stiffness: 400,
                })
            }
        },
        onEnd: () => {
            runOnJS(Keyboard.dismiss)()
            if (topAnimation.value > newActiveHeight + 50) {
                topAnimation.value = withSpring(height, {
                    damping: 100,
                    stiffness: 400,
                })
            } else {
                topAnimation.value = withSpring(newActiveHeight, {
                    damping: 100,
                    stiffness: 400,
                })
            }
        }
    })

    const open = useCallback(() => {
        'worklet'
        onOpendBottomSheet && onOpendBottomSheet()
        topAnimation.value = withSpring(newActiveHeight, {
            damping: 100,
            stiffness: 400,
        })
    }, [])

    const onPenInputFocus = useCallback(() => {
        'worklet'
        topAnimation.value = withSpring(newActiveHeightFocus, {
            damping: 100,
            stiffness: 400,
        })
    }, [])

    const closeInputBlur = useCallback(() => {
        'worklet'
        topAnimation.value = withSpring(newActiveHeight, {
            damping: 100,
            stiffness: 400,
        })
    }, [])

    const close = useCallback(() => {
        'worklet'
        Keyboard.dismiss()
        topAnimation.value = withSpring(height, {
            damping: 100,
            stiffness: 400,
        })
    }, [])

    useImperativeHandle(
        ref,
        () => ({
            open,
            close,
            onPenInputFocus,
            closeInputBlur,
        }),
        [open, close, onPenInputFocus, closeInputBlur]
    )

    return (
        <>
            <TouchableWithoutFeedback
                onPress={close}
            >
                <Animated.View
                    style={[
                        styles.backDrop,
                        backDropAnimation,
                        { backgroundColor: backDropColor }
                    ]}
                />
            </TouchableWithoutFeedback>
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View
                    style={[styles.container, animationStyle, {
                        height: activeHeightFocus,
                        backgroundColor: backgroundColor,
                        zIndex: 100,
                    }]}
                >
                    <View style={styles.lineContainer}>
                        <View style={styles.line} />
                    </View>
                    {children}
                </Animated.View>
            </PanGestureHandler>
        </>
    )
})

export default BottomSheet

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    lineContainer: {
        marginVertical: 10,
        alignItems: 'center',
    },
    line: {
        width: 50,
        height: 4,
        backgroundColor: 'black',
        borderRadius: 20,
    },
    backDrop: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
})