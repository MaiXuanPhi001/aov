import React from 'react'
import Btn from '@commom/Btn'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'
import { Denomination } from './Payment'

interface Props {
    denomination: Denomination,
    amount: number,
    setAmount: Function,
}

const Denominations = ({ denomination, amount, setAmount }: Props) => {
    const choosed: boolean = amount === denomination.value

    return (
        <Btn
            onPress={() => setAmount(denomination.value.toString())}
            width={'30%'}
            borderWidth={1}
            radius={5}
            height={30}
            marginVertical={5}
            borderColor={choosed ? 'red' : theme.colors.gray3}
        >
            <Txt color={choosed ? 'red' : 'black'}>{denomination.title}</Txt>
        </Btn>
    )
}

export default Denominations