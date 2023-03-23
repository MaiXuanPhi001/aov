import React from 'react'
import Box from '@commom/Box'
import { styled } from '@theme/styled'
import Img from '@commom/Img'
import { theme } from '@theme/index'
import Txt from '@commom/Txt'

const PaymentMethod = () => {
    return (
        <Box
            backgroundColor={'white'}
            radius={10}
            padding={20}
            marginTop={15}
            style={styled.shadow}
        >
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
                <Txt color={theme.colors.textRed} bold>PHƯƠNG THỨC THANH TOÁN</Txt>
            </Box>

            <Box
                row
                justifySpaceBetween
                marginTop={10}
            >
                <Box
                    backgroundColor={theme.colors.textRed}
                    alignCenter
                    width={'47%'}
                    padding={10}
                    radius={5}
                >
                    <Img
                        source={require('@images/account/transfer.png')}
                        width={20}
                        height={20}
                        marginBottom={10}
                    />
                    <Txt bold color={'white'}>Chuyển khoản</Txt>
                </Box>

                <Box
                    backgroundColor={'#fafafa'}
                    alignCenter
                    width={'47%'}
                    padding={10}
                    radius={5}
                >
                    <Img
                        source={require('@images/account/credit-card-black.png')}
                        width={20}
                        height={20}
                        marginBottom={10}
                    />
                    <Txt bold>Thẻ cào</Txt>
                </Box>
            </Box>
        </Box>
    )
}

export default PaymentMethod