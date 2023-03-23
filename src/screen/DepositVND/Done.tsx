import React from 'react'
import Box from '@commom/Box'
import { styled } from '@theme/styled'
import { theme } from '@theme/index'
import Img from '@commom/Img'
import Txt from '@commom/Txt'
import Btn from '@commom/Btn'
import { navigate } from '@navigation/navigationRef'
import routes from '@util/routes'

const Done = () => {
    return (
        <Box style={styled.box1}>
            <Box
                row
                backgroundColor={theme.colors.green6}
                padding={10}
            >
                <Img
                    source={require('@images/account/checkmark.png')}
                    width={30}
                    height={30}
                    marginHorizontal={10}
                />
                <Box
                    marginRight={20}
                >
                    <Txt bold marginBottom={5}>Đã xong - Đang chờ duyệt</Txt>
                    <Txt
                        numberOfLines={10}
                        marginRight={30}
                    >
                        Hệ thống sẽ kiểm duyệt giao dịch của bạn và sẽ cập nhật số dư tài khoản trong thời gian sớm nhất. Cản ơn bạn đã giao dịch.
                    </Txt>
                </Box>
            </Box>

            <Btn
                onPress={() => navigate(routes.HISTORY_DEPOSIT_VND)}
                style={styled.redButton}
                width={200}
                alignSelf={'center'}
            >
                <Txt bold color={'white'}>Xem lịch sử giao dịch</Txt>
            </Btn>
        </Box>
    )
}

export default Done