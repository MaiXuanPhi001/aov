import React, { useEffect, useState } from 'react'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import BackHeader from '@reuse/BackHeader'
import Balance from '../../component/reuse/BalanceBasic'
import AddBanking from './AddBanking'
import Rules from './Rules'
import Box from '@commom/Box'
import WithdrawVNDInfomation from './WithdrawVNDInfomation'
import { getBankingUser } from '@service/withdrawService'
import { Alert } from 'react-native'
import LoadingRed from '@reuse/LoadingRed'
import _ from 'lodash'
import { Banking } from '@interface/withdraw'

const WithdrawVND = () => {
    const [bankingUser, setBankingUser] = useState<Banking>()
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        handleGetBankingUser()
    }, [])

    const handleGetBankingUser = async () => {
        setLoading(true)
        const res = await getBankingUser()
        res.error && Alert.alert(res.message)
        if (!res.error) {
            res.status && setBankingUser(res.data)
            setLoading(false)
        }
    }

    return (
        <KeyBoardSafe paddingBottom={80}>
            <BackHeader />
            <Box paddingHorizontal={20}>
                <Balance />
                {loading ?
                    <Box marginTop={20}>
                        <LoadingRed />
                    </Box>
                    :
                    <>
                        {_.isEmpty(bankingUser) ?
                            <AddBanking onGetBankingUser={handleGetBankingUser} /> :
                            <WithdrawVNDInfomation bankingUser={bankingUser}/>
                        }
                        <Rules />
                    </>
                }
            </Box>
        </KeyBoardSafe>
    )
}

export default WithdrawVND