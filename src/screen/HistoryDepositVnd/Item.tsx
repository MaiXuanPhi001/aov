import React from 'react'
import { ItemHistoryDeposit } from '@interface/deposite'
import Box from '@commom/Box'
import { styled } from '@theme/styled'
import Txt from '@commom/Txt'
import Btn from '@commom/Btn'
import Img from '@commom/Img'
import { numberWithCommas } from '@method/format'

type Props = {
    history: ItemHistoryDeposit,
    onShowModalTransfer: Function,
    onShowModalImage: Function,
}

const result = {
    PENDING: {
        title: 'ĐANG ĐƯỢC XÉT DUYỆT',
        color: '#066dd9',
        background: '#e5f7ff',
        border: '#91d5ff',
    },
    FAIL: {
        title: 'GIAO DỊCH BỊ TỪ CHỐI',
        color: '#cf1421',
        background: '#fff1f0',
        border: '#ffa39e',
    },
    USER_CANCEL: {
        title: 'NGƯỜI DÙNG HUỶ GIAO DỊCH',
        color: 'white',
        background: '#808080',
        border: '#808080',
    },
    SUCCESS: {
        title: 'GIAO DỊCH THÀNH CÔNG',
        color: '#3ea018',
        background: '#f6ffec',
        border: '#b8ea8f',
    },
}

const Item = ({ history, onShowModalTransfer, onShowModalImage }: Props) => {
    const status =
        history.type_admin == 3 && history.type_user == 3 ? result.FAIL :
            history.type_admin == 0 && history.type_user == 2 ? result.USER_CANCEL :
                history.type_admin == 1 && history.type_user == 1 ? result.SUCCESS : result.PENDING

    return (
        <Box style={styled.itemHistory}>
            <Box
                row
                alignCenter
            >
                <Box
                    backgroundColor={status.background}
                    borderWidth={1}
                    borderColor={status.border}
                    paddingVertical={3}
                    paddingHorizontal={5}
                    radius={5}
                    marginRight={10}
                >
                    <Txt bold color={status.color} size={12}>{status.title}</Txt>
                </Box>
                {(status === result.FAIL) &&
                    <Btn onPress={() => onShowModalTransfer(history.note)}>
                        <Img
                            source={require('@images/account/questionmark.png')}
                            width={20}
                            height={20}
                        />
                    </Btn>
                }
            </Box>

            <Box
                row
                alignCenter
            >
                <Img
                    source={history.image}
                    width={40}
                    height={40}
                    marginRight={5}
                />
                <Txt>{history.bank_name}</Txt>
            </Box>

            <Box
                row
                alignCenter
                justifySpaceBetween
                marginVertical={5}
            >
                <Txt bold>{numberWithCommas(history.amount)} VNĐ</Txt>
                <Txt>{history.code_unique}</Txt>
                <Btn
                    onPress={() => onShowModalImage(history.images)}
                    opacity={status === result.FAIL ? 1 : 0}
                    disabled={status !== result.FAIL}
                >
                    <Img
                        source={require('@images/account/share.png')}
                        width={20}
                        height={20}
                        marginRight={10}
                    />
                </Btn>
            </Box>

            <Txt>{history.created_at}</Txt>
        </Box>
    )
}

export default Item