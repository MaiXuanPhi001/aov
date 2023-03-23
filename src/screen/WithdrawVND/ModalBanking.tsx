import React from 'react'
import Modality from '@reuse/Modality'
import Box from '@commom/Box'
import Scroll from '@commom/Scroll'
import Txt from '@commom/Txt'
import Btn from '@commom/Btn'
import { theme } from '@theme/index'
import { Bank, banking } from '@util/banking'
import Img from '@commom/Img'

type Props = {
    show: boolean,
    setShow: Function,
    onSetBank: Function,
}

const ModalBanking = ({ show, setShow, onSetBank }: Props) => {
    return (
        <Modality
            show={show}
            setShow={setShow}
            animation={'none'}
        >
            <Box
                backgroundColor={'white'}
                width={'90%'}
                height={'80%'}
                padding={20}
            >
                <Scroll paddingBottom={30}>
                    {banking.map((bank: Bank) =>
                        <BankItem
                            key={bank.id}
                            bank={bank}
                            onSetBank={onSetBank}
                        />
                    )}
                </Scroll>
                <Btn
                    onPress={() => setShow(false)}
                    backgroundColor={theme.colors.textRed}
                    width={90}
                    height={40}
                    radius={10}
                >
                    <Txt color={'white'} bold>Huỷ</Txt>
                </Btn>
            </Box>
        </Modality>
    )
}

const BankItem: React.FunctionComponent<{ bank: Bank, onSetBank: Function }> =
    ({ bank, onSetBank }) => {
        return (
            <Btn
                onPress={() => onSetBank(bank)}
                row
                borderWidth={1}
                borderColor={theme.colors.gray3}
                marginVertical={5}
                height={50}
                padding={5}
                justifyStart
            >
                <Img 
                    source={bank.image}
                    width={40}
                    height={40}
                    marginRight={10}
                />
                <Txt bold>{bank.name}</Txt>
            </Btn>
        )
    }

export default ModalBanking