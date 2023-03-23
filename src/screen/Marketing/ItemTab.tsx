import React from 'react'
import Btn from '@commom/Btn'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'

interface Data {
    titleTop: string,
    titleDown: string,
    value: string,
}

interface Props {
    item: Data,
    tab: string,
    setTab: Function,
}

const ItemTab = ({ item, tab, setTab }: Props) => {
    const choose = tab === item.value

    return (
        <Btn
            onPress={() => setTab(item.value)}
        >
            <Txt
                color={choose ? theme.colors.red : 'black'}
                bold={choose}
                numberOfLines={2}
                size={13}
            >
                {item.titleTop}
            </Txt>
            <Txt
                color={choose ? theme.colors.red : 'black'}
                bold={choose}
                numberOfLines={2}
                size={13}
            >
                {item.titleDown}
            </Txt>
        </Btn>
    )
}

export default ItemTab