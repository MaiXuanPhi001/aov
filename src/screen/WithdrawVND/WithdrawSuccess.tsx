import React from 'react'
import Box from '@commom/Box'
import Img from '@commom/Img'
import Txt from '@commom/Txt'
import Btn from '@commom/Btn'
import { theme } from '@theme/index'
import { goBack, navigate } from '@navigation/navigationRef'
import routes from '@util/routes'

const WithdrawSuccess = () => {
    return (
        <>
            <Box
                row
                backgroundColor={theme.colors.green6}
                padding={10}
            >
                <Img
                    source={require('@images/account/checkmark.png')}
                    width={30}
                    height={30}
                />
                <Box
                    padding={10}
                    marginRight={20}
                >
                    <Txt bold marginBottom={5}>Đang chờ duyệt</Txt>
                    <Txt numberOfLines={10}>
                        Quý khách đã gửi yêu cầu rút tiền thành công. Yêu cầu của quý khách sẽ được
                        duyệt trong thời gian sớm nhất. Cảm ơn quý khách đã giao dịch!
                    </Txt>
                </Box>
            </Box>
            <Btn
                onPress={() => goBack()}
                backgroundColor={theme.colors.textRed}
                marginVertical={20}
                height={40}
                width={150}
                radius={5}
                alignSelf={'center'}
            >
                <Txt bold color={'white'}>Tiếp tục</Txt>
            </Btn>

            <Btn
                onPress={() => navigate(routes.WITHDRAW_VND_HISTORY)}
                height={40}
                width={150}
                radius={5}
                alignSelf={'center'}
                borderWidth={1}
                borderColor={theme.colors.gray3}
            >
                <Txt>Xem lịch sử</Txt>
            </Btn>
        </>
    )
}

export default WithdrawSuccess