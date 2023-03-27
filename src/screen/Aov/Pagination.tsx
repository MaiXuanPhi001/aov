import React from 'react'
import Box from '@commom/Box'
import Btn from '@commom/Btn'
import Img from '@commom/Img'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'

type Props = {
    indexPage: number,
    total: number,
    onNext: Function,
    onBack: Function,
    alignSefl?: string,
    marginTop?: number,
    color?: string,
    borderColor?: string,
}

const Pagination = ({ 
    indexPage, 
    total, 
    onNext, 
    onBack,
    marginTop = 20,
    alignSefl = 'flex-end',
    borderColor = '#4B4E5B',
}: Props) => {
    return (
        <Box
            row
            alignCenter
            marginTop={marginTop}
            alignSelf={alignSefl}
        >
            <Btn
                onPress={onBack}
                disabled={indexPage < 2}
                opacity={indexPage < 2 ? .5 : 1}
                borderColor={borderColor}
                borderWidth={1}
                height={30}
                width={30}
                alignCenter
                justifyCenter
                radius={5}
            >
                <Txt color={'white'}>{'<'}</Txt>
            </Btn>

            <Box
                borderColor={'#090040'}
                borderWidth={1}
                height={32}
                width={32}
                alignCenter
                justifyCenter
                radius={5}
                backgroundColor={'#eeeaff'}
                marginHorizontal={2}
            >
                <Txt color={'#3e3182'}>{indexPage}</Txt>
            </Box>

            <Btn
                onPress={onNext}
                disabled={!(total >= 1 + indexPage * 10)}
                opacity={!(total >= 1 + indexPage * 10) ? .5 : 1}
                borderColor={borderColor}
                borderWidth={1}
                height={30}
                width={30}
                alignCenter
                justifyCenter
                radius={5}
            >
              <Txt color={'white'} bold>{'>'}</Txt>
            </Btn>
        </Box>
    )
}

export default Pagination