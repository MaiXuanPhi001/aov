import React from 'react'
import Img from '@commom/Img'
import { GetBanking } from '@interface/deposite'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'
import Btn from '@commom/Btn'

interface Props {
    bank: GetBanking,
    bankChoosed: GetBanking | undefined,
    setBankchoosed: Function,
}

const ItemBanking = ({ bank, bankChoosed, setBankchoosed }: Props) => {
    return (
        <Btn
            onPress={() => setBankchoosed(bank)}
            row
            alignCenter
            borderWidth={1}
            marginRight={10}
            paddingRight={10}
            marginVertical={5}
            radius={5}
            height={50}
            borderColor={bankChoosed?.name_banking === bank.name_banking ? theme.colors.textRed : theme.colors.gray3}
            padding={5}
            justifyStart
        >
            <Img
                source={bank.image}
                width={40}
                height={40}
                marginRight={5}
            />
            <Txt color={bankChoosed?.name_banking === bank.name_banking ? theme.colors.textRed : 'black'}>
                {bank.name_banking}
            </Txt>
        </Btn>
    )
}

export default ItemBanking