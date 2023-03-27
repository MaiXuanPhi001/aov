import Btn from "@commom/Btn"
import Txt from "@commom/Txt"
import { numberWithCommas } from "@method/format"
import { theme } from "@theme/index"

const Price = ({ price, choose, onChangeAmount }:
    { price: number, choose: boolean, onChangeAmount: Function }
) => {
    return (
        <Btn
            onPress={() => onChangeAmount(price)}
            backgroundColor={choose ? theme.colors.purpleOrder : theme.colors.gray3}
            marginLeft={5}
            paddingHorizontal={5}
            height={30}
            alignCenter
            justifyCenter
        >
            <Txt color={choose ? 'white' : 'black'}>
                {numberWithCommas(price)}
            </Txt>
        </Btn>
    )
}

export default Price