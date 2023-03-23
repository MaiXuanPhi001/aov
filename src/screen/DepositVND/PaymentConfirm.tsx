import Box from '@commom/Box'
import Btn from '@commom/Btn'
import Img from '@commom/Img'
import Txt from '@commom/Txt'
import { useAppSelector } from '@hooks/index'
import { numberWithCommas } from '@method/format'
import { transferInfoDepositSelector } from '@selector/depositeSelector'
import { theme } from '@theme/index'
import { styled } from '@theme/styled'
import React, { useState } from 'react'
import ModalCancelPayment from './ModalCancelPayment'
import ModalConfirmTransfer from './ModalConfirmTransfer'
import TextCoppy from './TextCoppy'
import Warning from './Warning'

interface Info {
    title: string,
    value: string | undefined | null,
    copy: boolean,
}

const PaymentConfirm = () => {
    const transferInfo = useAppSelector(transferInfoDepositSelector)

    const [showModalCancel, setShowModalCancel] = useState<boolean>(false)
    const [showModalConfirm, setShowModalConfirm] = useState<boolean>(false)

    const infomations: Info[] = [
        { title: 'Ngân hàng', value: transferInfo.bank_name, copy: false },
        { title: 'Số tài khoản', value: transferInfo.number_banking_admin, copy: true },
        { title: 'Tên tài khoản', value: transferInfo.owner_banking_admin, copy: false },
        { title: 'Số tiền', value: numberWithCommas(transferInfo.amount || 0), copy: true },
        { title: 'Nội dung', value: transferInfo.code_unique, copy: true },
    ]

    return (
        <Box style={styled.box1}>
            <Box
                row
                alignCenter
                marginBottom={10}
            >
                <Img
                    source={require('@images/account/wallet.png')}
                    width={20}
                    height={20}
                    marginRight={10}
                />
                <Txt color={theme.colors.textRed} bold>THÔNG TIN CHUYỂN KHOẢN</Txt>
            </Box>

            <Warning text={'Quý khách phải chuyển khoản đúng lệnh đã tạo như thông tin dưới đây. Nếu chuyển khoản sai, khoản tiền bị thất thoát chúng tôi sẽ không chịu trách nhiệm.'} />

            <Box height={20} />

            {infomations.map((info: Info) =>
                <TextCoppy
                    key={info.title}
                    title={info.title}
                    value={info.value}
                    copy={info.copy}
                />
            )}

            <Btn
                onPress={() => setShowModalConfirm(true)}
                height={40}
                backgroundColor={theme.colors.textRed}
                width={170}
                radius={5}
                alignSelf={'center'}
                marginVertical={20}
            >
                <Txt bold color={'white'}>Tôi đã chuyển tiền</Txt>
            </Btn>

            <Btn
                onPress={() => setShowModalCancel(true)}
                height={40}
                width={120}
                radius={5}
                alignSelf={'center'}
                borderWidth={1}
                borderColor={theme.colors.gray3}
            >
                <Txt>Huỷ</Txt>
            </Btn>
            <ModalCancelPayment
                show={showModalCancel}
                setShow={setShowModalCancel}
            />
            <ModalConfirmTransfer
                show={showModalConfirm}
                setShow={setShowModalConfirm}
            />
        </Box>
    )
}

export default PaymentConfirm