import Btn from "@commom/Btn"
import Txt from "@commom/Txt"
import { theme } from "@theme/index"

const Multiplication = ({ number, choose, onChangeMultiplication }:
    { number: number, choose: boolean, onChangeMultiplication: Function }
) => {
    return (
        <Btn
            onPress={() => onChangeMultiplication(number)}
            backgroundColor={choose ? theme.colors.purpleOrder : theme.colors.gray3}
            marginLeft={5}
            paddingHorizontal={5}
            height={30}
            alignCenter
            justifyCenter
        >
            <Txt color={choose ? 'white' : 'black'}>
                x{number}
            </Txt>
        </Btn>
    )
}

export default Multiplication