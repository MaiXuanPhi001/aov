import React from 'react'
import Box from '@commom/Box'
import { styled } from '@theme/styled'
import Btn from '@commom/Btn'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'
import { useAppSelector } from '@hooks/index'
import { timeWinGoSelector } from '@selector/wingoSelector'
import { minuteSecond } from '@method/date'
import { Keyboard, Platform, View } from 'react-native'

type Order = {
    value: string,
    order: string,
    leftColor: string,
    rightColor: string,
    type: number,
}

type PropsNumber = {
    onOpenBottomSheet: Function,
    bottomSheetRef: any,
}

const Number = ({ onOpenBottomSheet, bottomSheetRef }: PropsNumber) => {
    const colors: Order[] = [
        {
            value: 'Xanh',
            order: 'green',
            leftColor: theme.colors.green3,
            rightColor: theme.colors.green3,
            type: 1,
        },
        {
            value: 'Tím',
            order: 'violet',
            leftColor: theme.colors.purple,
            rightColor: theme.colors.purple,
            type: 1,
        },
        {
            value: 'Đỏ',
            order: 'red',
            leftColor: theme.colors.textRed,
            rightColor: theme.colors.textRed,
            type: 1,
        },
    ]

    const numbers: Order[] = [
        {
            value: '0',
            order: '0',
            leftColor: theme.colors.textRed,
            rightColor: theme.colors.purple,
            type: 2,
        },
        {
            value: '1',
            order: '1',
            leftColor: theme.colors.green3,
            rightColor: theme.colors.green3,
            type: 2,
        },
        {
            value: '2',
            order: '2',
            leftColor: theme.colors.textRed,
            rightColor: theme.colors.textRed,
            type: 2,
        },
        {
            value: '3',
            order: '3',
            leftColor: theme.colors.green3,
            rightColor: theme.colors.green3,
            type: 2,
        },
        {
            value: '4',
            order: '4',
            leftColor: theme.colors.textRed,
            rightColor: theme.colors.textRed,
            type: 2,
        },
        {
            value: '5',
            order: '5',
            leftColor: theme.colors.green3,
            rightColor: theme.colors.purple,
            type: 2,
        },
        {
            value: '6',
            order: '6',
            leftColor: theme.colors.textRed,
            rightColor: theme.colors.textRed,
            type: 2,
        },
        {
            value: '7',
            order: '7',
            leftColor: theme.colors.green3,
            rightColor: theme.colors.green3,
            type: 2,
        },
        {
            value: '8',
            order: '8',
            leftColor: theme.colors.textRed,
            rightColor: theme.colors.textRed,
            type: 2,
        },
        {
            value: '9',
            order: '9',
            leftColor: theme.colors.green3,
            rightColor: theme.colors.green3,
            type: 2,
        },
    ]

    const time = useAppSelector(timeWinGoSelector)
    const oclock = minuteSecond(time)

    if (time === 4) {
        if (bottomSheetRef?.current) {
            bottomSheetRef.current.close()
            Keyboard.dismiss()
        }
    }

    return (
        <Box
            backgroundColor={'white'}
            style={styled.shadow}
            marginTop={15}
            radius={10}
            padding={10}
        >
            {/* Đặt cược */}
            <Box>
                {/* Xanh / Tim / do */}
                <Box
                    row
                    justifySpaceAround
                >
                    {colors.map((color: Order) =>
                        <Color
                            key={color.value}
                            color={color}
                            onPenBottomSheet={onOpenBottomSheet}
                        />
                    )}
                </Box>
                {/* Xanh / Tim / do END */}

                {/* 0 1 2 3 4 */}
                <Box
                    row
                    justifySpaceAround
                    marginTop={10}
                >
                    {numbers.slice(0, 5).map((number: Order) =>
                        <NumberView
                            key={number.value}
                            number={number}
                            onPenBottomSheet={onOpenBottomSheet}
                        />
                    )}
                </Box>
                {/* 0 1 2 3 4 END */}

                {/* 5 6 7 8 9 */}
                <Box
                    row
                    justifySpaceAround
                    marginTop={10}
                >
                    {numbers.slice(5, 10).map((number: Order) =>
                        <NumberView
                            key={number.value}
                            number={number}
                            onPenBottomSheet={onOpenBottomSheet}
                        />
                    )}
                </Box>
                {/* 5 6 7 8 9 END */}

                {/* Lớn nhỏ */}
                <Box
                    row
                    justifyCenter
                    flex={2}
                    height={40}
                    marginTop={10}
                    width={'95%'}
                    alignSelf={'center'}
                >
                    <Btn
                        onPress={
                            () => onOpenBottomSheet({
                                value: 'Lớn',
                                order: 'big',
                                leftColor: theme.colors.big,
                                rightColor: theme.colors.big,
                                type: 3,
                            })
                        }
                        backgroundColor={theme.colors.big}
                        flex={1}
                        borderTopLeftRadius={20}
                        borderBottomLeftRadius={20}
                    >
                        <Txt color={'white'} bold>Lớn</Txt>
                    </Btn>

                    <Btn
                        onPress={
                            () => onOpenBottomSheet({
                                value: 'Nhỏ',
                                order: 'small',
                                leftColor: theme.colors.small,
                                rightColor: theme.colors.small,
                                type: 3,
                            })
                        }
                        backgroundColor={theme.colors.small}
                        flex={1}
                        borderTopRightRadius={20}
                        borderBottomRightRadius={20}
                    >
                        <Txt color={'white'} bold>Nhỏ</Txt>
                    </Btn>
                </Box>
                {/* Lớn nhỏ END */}
            </Box>
            {/* Đặt cược END */}

            {/* 4 giây đếm ngược */}
            {time <= 4 &&
                <>
                    <Box
                        backgroundColor={'black'}
                        absolute
                        row
                        radius={10}
                        width={'106%'}
                        alignSelf={'center'}
                        height={'110%'}
                        opacity={0.6}
                        alignCenter
                        justifyCenter
                    />
                    <Box
                        row
                        absolute
                        radius={10}
                        width={'106%'}
                        alignSelf={'center'}
                        height={'110%'}
                        alignCenter
                        justifyCenter
                    >
                        <Box
                            backgroundColor={theme.colors.textRed}
                            width={100}
                            height={140}
                            margin={10}
                            alignCenter
                            justifyCenter
                            radius={10}
                        >
                            <Txt color={'white'} bold size={80}>0</Txt>
                        </Box>

                        <Box
                            backgroundColor={theme.colors.textRed}
                            width={100}
                            height={140}
                            margin={10}
                            alignCenter
                            justifyCenter
                            radius={10}
                        >
                            <Txt color={'white'} bold size={80}>{oclock.slice(-1)}</Txt>
                        </Box>
                    </Box>
                </>
            }
            {/* 4 giây đếm ngược END */}
        </Box>
    )
}

type Props = {
    color: Order,
    onPenBottomSheet: Function,
}

const Color = ({ color, onPenBottomSheet }: Props) => {
    return (
        <Btn
            onPress={() => onPenBottomSheet(color)}
            // width={100}
            flex={1}
            marginHorizontal={5}
            height={40}
            backgroundColor={color.leftColor}
            radius={20}
        >
            <Txt color={'white'} bold>
                {color.value}
            </Txt>
        </Btn>
    )
}

type NumberView = {
    number: Order,
    onPenBottomSheet: Function,
}

const NumberView = ({ number, onPenBottomSheet }: NumberView) => {
    const BOX = 50
    const CHILD = 25

    return (
        <Btn
            onPress={() => onPenBottomSheet(number)}
            width={BOX}
            height={BOX}
            row
            backgroundColor={number.leftColor}
            radius={50}
            overflow={Platform.OS === 'android' ? false : true}
            style={{ transform: [{ rotate: '45deg' }] }}
        >
            <Box
                width={CHILD}
                height={'100%'}
                backgroundColor={number.leftColor}
                borderTopLeftRadius={50}
                borderBottomLeftRadius={50}
            />
            <Box
                width={CHILD}
                height={'100%'}
                backgroundColor={number.rightColor}
                borderTopRightRadius={50}
                borderBottomRightRadius={50}
            />
            <Box
                absolute
                style={{ transform: [{ rotate: '-45deg' }] }}
            >
                <Txt color={'white'} bold>{number.value}</Txt>
            </Box>
        </Btn>
    )
}

export default Number