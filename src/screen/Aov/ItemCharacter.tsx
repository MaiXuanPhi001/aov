import Btn from '@commom/Btn'
import Img from '@commom/Img'
import { width } from '@util/responsive'
import React from 'react'
import { Character } from './data'
const BTN = width * 15 / 100
const IMG = width * 13.5 / 100

interface Props {
    character: Character,
    onOpenBottomSheet: Function,
}

const ItemCharacter: React.FC<Props> = ({ character, onOpenBottomSheet }) => {
    return (
        <Btn
            onPress={() => onOpenBottomSheet({...character, type: 2})}
            width={BTN}
            height={BTN}
            backgroundColor={'white'}
            radius={50}
        >
            <Img
                source={character.image}
                width={IMG}
                height={IMG}
            />
        </Btn>
    )
}

export default ItemCharacter