import Box from '@commom/Box'
import Img from '@commom/Img'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'
import { width } from '@util/responsive'
import React from 'react'
import { Line, Svg } from 'react-native-svg'
import { converNumberToImages } from './data'

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
                <Txt color={'white'} bold>{item.id}</Txt>
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

    return (
        <Box
            borderWidth={choose ? 0 : 0.5}
            width={18}
            height={18}
            radius={50}
            alignCenter
            justifyCenter
            marginHorizontal={10}
            row
        >
            <Img 
                source={converNumberToImages(number)}
                width={'100%'}
                height={'100%'}
            />
        </Box>
    )
}

export default ItemNumberChart