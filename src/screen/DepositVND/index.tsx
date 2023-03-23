import { checkTransactionDepositVndThunk } from '@asyncThunk/depositeAsyncThunk'
import Box from '@commom/Box'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import BackHeader from '@reuse/BackHeader'
import BalanceBasic from '@reuse/BalanceBasic'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import LoadingRed from '@reuse/LoadingRed'
import { stepDepositeSelector } from '@selector/depositeSelector'
import { STEP } from '@slice/depositSlice'
import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import Done from './Done'
import Payment from './Payment'
import PaymentConfirm from './PaymentConfirm'
import PaymentMethod from './PaymentMethod'
import SendImage from './SendImage'

const DepositVND = () => {
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState<boolean>(false)
    const step = useAppSelector(stepDepositeSelector)

    useEffect(() => {
        handleCheckTransactionDepositVnd()
    }, [step])

    const handleCheckTransactionDepositVnd = async () => {
        setLoading(true)
        const { payload } = await dispatch(checkTransactionDepositVndThunk())
        !payload.error && setLoading(false)
        payload.error && Alert.alert(payload.message)
    }

    return (
        <KeyBoardSafe paddingBottom={120}>
            <BackHeader />
            <Box paddingHorizontal={20}>
                <BalanceBasic />
                <PaymentMethod />

                {loading ? (
                    <Box marginTop={50}>
                        <LoadingRed />
                    </Box>
                ) : (
                    step === STEP.DONE ? <Done /> :
                        step === STEP.CONFIRM_TRANSFER ? <PaymentConfirm /> :
                            step === STEP.SUMMIT_IMG ? <SendImage /> : <Payment />
                )}
            </Box>
        </KeyBoardSafe>
    )
}

export default DepositVND