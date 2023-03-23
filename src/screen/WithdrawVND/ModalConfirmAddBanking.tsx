import React from 'react'
import Modality from '@reuse/Modality'
import Box from '@commom/Box'
import Img from '@commom/Img'
import Txt from '@commom/Txt'
import Btn from '@commom/Btn'
import { theme } from '@theme/index'
import LoadingWhite from '@reuse/LoadingWhite'

type Props = {
    show: boolean,
    setShow: Function,
    bank: string,
    accountNumber: number,
    boss: string,
    loading: boolean,
    onAddBanking: Function,
}

const ModalConfirmAddBanking = ({
    show,
    setShow,
    bank,
    accountNumber,
    boss,
    loading,
    onAddBanking,
}: Props) => {
    return (
        <Modality
            show={show}
            setShow={setShow}
            animation={''}
            onPress={() => { setShow(false) }}
        >
            <Box
                backgroundColor={'white'}
                width={'90%'}
                radius={10}
                row
                padding={10}
            >
                <Box>
                    <Img
                        source={require('@images/account/infoyellow.png')}
                        width={25}
                        height={25}
                        marginRight={10}
                    />
                </Box>
                <Box paddingRight={20}>
                    <Txt bold size={15}>Xác nhận</Txt>
                    <Box marginVertical={15}>
                        <Txt numberOfLines={2}>Vui lòng kiểm tra thông tin ngân hàng của bạn.</Txt>
                        <Txt>Thông tin không thể thay đổi sau này.</Txt>
                    </Box>

                    <Txt>Tên ngân hàng: <Txt bold>{bank}</Txt></Txt>
                    <Txt>Số tài khoản: <Txt bold>{accountNumber}</Txt></Txt>
                    <Txt>Tên chủ tài khoản: <Txt bold>{boss}</Txt></Txt>

                    <Box
                        row
                        justifyEnd
                        marginTop={20}
                    >
                        <Btn
                            onPress={() => setShow(false)}
                            borderWidth={1}
                            borderColor={theme.colors.gray3}
                            width={70}
                            height={35}
                            radius={5}
                        >
                            <Txt>Huỷ bỏ</Txt>
                        </Btn>

                        <Btn
                            onPress={onAddBanking}
                            disabled={loading}
                            borderWidth={1}
                            borderColor={theme.colors.gray3}
                            width={140}
                            height={35}
                            radius={5}
                            marginLeft={10}
                            backgroundColor={theme.colors.textRed}
                        >
                            {loading ?
                                <LoadingWhite /> :
                                <Txt color={'white'}>Thêm ngân hàng</Txt>
                            }
                        </Btn>
                    </Box>
                </Box>
            </Box>
        </Modality>
    )
}

export default ModalConfirmAddBanking