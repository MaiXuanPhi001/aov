import React, { useState } from 'react'
import Box from '@commom/Box'
import Img from '@commom/Img'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'
import InputVND from './InputVND'
import Btn from '@commom/Btn'
import { Banking } from '@interface/withdraw'
import { banking } from '@util/banking'
import LoadingWhite from '@reuse/LoadingWhite'
import { withdrawVND } from '@service/withdrawService'
import { Alert } from 'react-native'
import { useAppDispatch } from '@hooks/index'
import { getProfileThunk } from '@asyncThunk/userAsyncThunk'
import { numberWithCommas } from '@method/format'

type Props = {
    bankingUser: Banking,
    setSuccess: Function,
}

const FormWithdraw = ({ bankingUser, setSuccess }: Props) => {
    const dispatch = useAppDispatch()

    const [amount, setAmount] = useState<string>('')
    const [checkForm, setCheckForm] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const bank = banking.filter(bank => bank.name === bankingUser.name_banking)[0]

    const handleWithdraw = async () => {
        if (amount.trim() === '') {
            return setCheckForm(true)
        }
        setLoading(true)
        const res = await withdrawVND(Number(amount))
        if (!res.status) {
            Alert.alert(res.message)
        } else {
            await dispatch(getProfileThunk())
            setSuccess(true)
        }
        setLoading(false)
    }

    return (
        <>
            <Box
                row
                alignCenter
            >
                <Img
                    source={require('@images/account/wallet.png')}
                    width={20}
                    height={20}
                    marginRight={10}
                />
                <Txt color={theme.colors.textRed} bold>THÔNG TIN RÚT TIỀN</Txt>
            </Box>

            <Box
                marginTop={15}
                row
                padding={10}
                borderWidth={1}
                borderColor={theme.colors.gray2}
                radius={5}
            >
                <Img
                    source={bank?.image}
                    width={40}
                    height={40}
                    marginRight={10}
                />
                <Box>
                    <Txt size={16}>{bankingUser.name_banking}</Txt>
                    <Txt bold marginVertical={5}>{bankingUser.number_banking}</Txt>
                    <Txt bold>{bankingUser.owner_banking}</Txt>
                </Box>
            </Box>

            <InputVND
                title='Số tiền cần rút'
                value={amount}
                setValue={setAmount}
                error={checkForm && amount.trim() === ''}
                messError={'Vui lòng nhập số tiền cần rút'}
            />
            <InputVND
                title='Số tiền thực tế nhận được (lệ phí 3%)'
                value={numberWithCommas(+(Number(amount) * 97 / 100).toFixed(0))}
                setValue={setAmount}
                editable={false}
            />

            <Btn
                onPress={handleWithdraw}
                disabled={loading}
                backgroundColor={theme.colors.textRed}
                width={130}
                height={40}
                radius={5}
                alignSelf={'center'}
                marginTop={20}
            >
                {loading ?
                    <LoadingWhite /> :
                    <Txt color={'white'} bold>Rút tiền</Txt>
                }
            </Btn>
        </>
    )
}

export default FormWithdraw