import { cancelTransactionDepositVndThunk } from '@asyncThunk/depositeAsyncThunk'
import Box from '@commom/Box'
import Btn from '@commom/Btn'
import Img from '@commom/Img'
import Txt from '@commom/Txt'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import LoadingWhite from '@reuse/LoadingWhite'
import Modality from '@reuse/Modality'
import { loadingDepositeSelector, transferInfoDepositSelector } from '@selector/depositeSelector'
import { theme } from '@theme/index'
import { styled } from '@theme/styled'
import React from 'react'
import { Alert } from 'react-native'

interface Props {
    show: boolean,
    setShow: Function,
}

const ModalCancelPayment = ({ show, setShow }: Props) => {
    const dispatch = useAppDispatch()
    const loading = useAppSelector(loadingDepositeSelector)
    const transferInfo = useAppSelector(transferInfoDepositSelector)

    const handleCancelTransactionDepositVnd = async () => {
        const { payload } = await dispatch(cancelTransactionDepositVndThunk(transferInfo.id?.toString() || ''))

        !payload.status && Alert.alert(payload.message)
    }

    return (
        <Modality
            show={show}
            setShow={setShow}
            animation={'slide'}
            onPress={() => setShow(false)}
        >
            <Box
                backgroundColor={'white'}
                width={'90%'}
                row
                padding={10}
            >

                <Img
                    source={require('@images/account/infoyellow.png')}
                    width={25}
                    height={25}
                    marginRight={5}
                />
                <Box width={'90%'}>
                    <Txt bold marginVertical={5}>Xác nhận lệnh chuyển tiền</Txt>
                    <Txt numberOfLines={10}>
                        Bạn có chắc chắn xác nhận huỷ lệnh chuyển tiền?
                    </Txt>
                    <Box
                        row
                        padding={10}
                        backgroundColor={theme.colors.yellowInfo}
                        alignCenter
                        marginVertical={3}
                        width={'100%'}
                        marginTop={10}
                    >
                        <Img
                            source={require('@images/account/infoyellow.png')}
                            width={20}
                            height={20}
                            marginRight={10}
                        />
                        <Txt numberOfLines={10} marginRight={10}>Không huỷ nếu đã chuyển tiền thành công</Txt>
                    </Box>

                    <Box
                        row
                        justifyEnd
                        marginTop={10}
                    >
                        <Btn
                            onPress={() => setShow(false)}
                            style={styled.btnCancel}
                        >
                            <Txt>Quay lại</Txt>
                        </Btn>

                        <Btn
                            onPress={handleCancelTransactionDepositVnd}
                            disabled={loading}
                            style={styled.redButton2}
                        >
                            {loading ? (
                                <LoadingWhite />
                            ) : (
                                <Txt bold color={'white'}>Huỷ lệnh chuyển tiền</Txt>
                            )}
                        </Btn>
                    </Box>
                </Box>
            </Box>
        </Modality>
    )
}

export default ModalCancelPayment