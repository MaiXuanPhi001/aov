import { createDepositVNDThunk, getBankingThunk } from '@asyncThunk/depositeAsyncThunk'
import Box from '@commom/Box'
import Btn from '@commom/Btn'
import Img from '@commom/Img'
import Txt from '@commom/Txt'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import { GetBanking } from '@interface/deposite'
import LoadingWhite from '@reuse/LoadingWhite'
import TextError from '@reuse/TextError'
import { bankingDepositeSelector, loadingDepositeSelector } from '@selector/depositeSelector'
import { theme } from '@theme/index'
import { styled } from '@theme/styled'
import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import Denominations from './Denominations'
import InputVND from './InputVND'
import ItemBanking from './ItemBanking'
import Warning from './Warning'

export interface Denomination {
    title: string,
    value: number,
}

const Payment = () => {
    const denominations: Denomination[] = [
        {
            title: '100K',
            value: 100_000,
        },
        {
            title: '500K',
            value: 500_000,
        },
        {
            title: '10M',
            value: 10_000_000,
        },
        {
            title: '20M',
            value: 20_000_000,
        },
        {
            title: '100M',
            value: 100_000_000,
        },
        {
            title: '1,000M',
            value: 1_000_000_000,
        },
    ]

    const dispatch = useAppDispatch()

    const banking = useAppSelector(bankingDepositeSelector)
    const loading = useAppSelector(loadingDepositeSelector)

    const [amount, setAmount] = useState<string>('0')
    const [bankChoosed, setBankchoosed] = useState<GetBanking>()
    const [checkForm, setCheckForm] = useState<boolean>(false)

    useEffect(() => {
        handleGetBanking()
    }, [])

    const handleGetBanking = async () => {
        const { payload } = await dispatch(
            getBankingThunk()
        )
        !payload.status && Alert.alert(payload.message)
    }

    const handleContinue = async () => {
        if (Number(amount) <= 0 || amount.trim() === '' || bankChoosed?.name_banking.trim() === '') {
            return setCheckForm(true)
        }
        const { payload } = await dispatch(
            createDepositVNDThunk({
                amount: Number(amount),
                idBanking: bankChoosed?.id,
                message: (Math.floor(100000 + Math.random() * 900000)).toString()
            })
        )


        !payload.status && Alert.alert(payload.message)
    }

    return (
        <Box style={styled.box1}>
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
                <Txt color={theme.colors.textRed} bold>THÔNG TIN CHUYỂN KHOẢN</Txt>
            </Box>

            <InputVND
                value={amount}
                setValue={setAmount}
                error={false}
                messError={'Vui lòng nhập số tiền'}
            />

            {(checkForm && (Number(amount) <= 0 || amount.trim() === '')) &&
                <TextError text={'Vui lòng nhập số tiền'} />}

            <Box
                row
                wrap
                justifySpaceBetween
                marginTop={15}
            >
                {denominations.map((denomination: Denomination) =>
                    <Denominations
                        key={denomination.title}
                        denomination={denomination}
                        amount={Number(amount)}
                        setAmount={setAmount}
                    />
                )}
            </Box>

            <Txt marginVertical={10}>Chọn ngân hàng bạn muốn chuyển khoản đến</Txt>
            <Box
                row
                wrap
            // justifySpaceBetween
            >
                {banking?.map((bank: GetBanking) =>
                    <ItemBanking
                        key={bank.id}
                        bank={bank}
                        bankChoosed={bankChoosed}
                        setBankchoosed={setBankchoosed}
                    />
                )}
            </Box>

            {(checkForm && bankChoosed?.name_banking.trim() === '') &&
                <Box marginBottom={10}>
                    <TextError text={'Vui lòng chọn ngân hàng'} />
                </Box>
            }

            <Warning text={'Quý khách phải chuyển khoản đúng số tiền đã tạo lệnh.'} />
            <Warning text={'Hệ thống sẽ tự động cập nhật số dư.'} />
            <Warning text={'Nếu quý khách chuyển sai số tiền đã tạo lệnh, khoản tiền bị thất thoát chúng tôi sẽ không chịu trách nhiệm.'} />

            <Btn
                onPress={handleContinue}
                disabled={loading}
                backgroundColor={theme.colors.textRed}
                alignSelf={'center'}
                width={150}
                height={40}
                radius={5}
                marginTop={20}
            >
                {loading ? (
                    <LoadingWhite />
                ) : (
                    <Txt bold color={'white'}>Tiếp tục</Txt>
                )}
            </Btn>
        </Box>
    )
}

export default Payment