import React, { useState } from 'react'
import Box from '@commom/Box'
import { styled } from '@theme/styled'
import { Banking } from '@interface/withdraw'
import FormWithdraw from './FormWithdraw'
import WithdrawSuccess from './WithdrawSuccess'

type Props = {
    bankingUser: Banking,
}

const WithdrawVNDInfomation = ({ bankingUser }: Props) => {
    const [success, setSuccess] = useState<boolean>(false)

    return (
        <Box
            backgroundColor={'white'}
            style={styled.shadow}
            padding={20}
            marginTop={15}
            radius={10}
        >
            {!success ?
                <FormWithdraw
                    bankingUser={bankingUser}
                    setSuccess={setSuccess}
                /> :
                <WithdrawSuccess />
            }
        </Box>
    )
}

export default WithdrawVNDInfomation