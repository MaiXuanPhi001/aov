import React from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import { G, Line, Svg } from 'react-native-svg'
import { Platform } from 'react-native'
import { width } from '@util/responsive'
import { theme } from '@theme/index'

type Props = {
    item: NumberObject,
    index: number,
    dataGameHistory: NumberObject[],
}

type NumberObject = {
    id: number,
    number: number,
}

const ItemNumberChart = ({ item, index, dataGameHistory }: Props) => {
    const PERCENT: number = 5.841121495327103
    const NUMBER: number = width * 0.33364485981308408 / 100

    const numberArray: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <Box row>
            <Box width={'35%'}>
                <Txt>{item.id}</Txt>
            </Box>
            <Box width={'65%'}>
                <Box row justifySpaceAround>
                    {numberArray.map((number: number) =>
                        <Number
                            key={number}
                            number={number}
                            numberResult={item.number}
                        />
                    )}
                </Box>
                {index < 9 &&
                    <Svg width={'90%'} height={30} style={{ alignSelf: 'center' }}>
                        <Line
                            x1={dataGameHistory[index + 1].number * (width * PERCENT / 100 - NUMBER)}
                            y1={29}
                            x2={item.number * (width * PERCENT / 100 - NUMBER)}
                            y2={1}
                            stroke={theme.colors.gray2}
                            strokeWidth="1"
                        />
                    </Svg>
                }
            </Box>
        </Box>
    )
}

type PropsNumber = {
    number: number,
    numberResult: number,
}

const Number = ({ number, numberResult }: PropsNumber) => {
    const choose: boolean = numberResult === number

    const leftColor: string =
        numberResult === 0 ? theme.colors.textRed :
            numberResult === 5 ? theme.colors.green3 :
                numberResult % 2 === 0 ? theme.colors.textRed : theme.colors.green3

    const rightColor: string =
        numberResult === 0 || numberResult === 5 ?
            theme.colors.purple : leftColor

    return (
        <Box
            borderWidth={choose ? 0 : 0.5}
            width={18}
            height={18}
            radius={50}
            overflow={Platform.OS === 'android' ? false : true}
            style={{ transform: [{ rotate: '45deg' }] }}
            alignCenter
            justifyCenter
            marginHorizontal={10}
            backgroundColor={choose ? leftColor: 'white'} 
            row
        >
            <Box
                width={8}
                height={'100%'}
                backgroundColor={choose ? leftColor : 'white'}
                borderTopLeftRadius={50}
                borderBottomLeftRadius={50}
            />
            <Box
                width={8}
                height={'100%'}
                backgroundColor={choose ? rightColor : 'white'}
                borderTopRightRadius={50}
                borderBottomRightRadius={50}
            />

            <Box
                absolute
                style={{ transform: [{ rotate: '-45deg' }] }}
            >
                <Txt size={13} color={choose && 'white'}>{number}</Txt>
            </Box>
        </Box>
    )
}

export default ItemNumberChart