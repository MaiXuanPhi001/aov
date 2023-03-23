import { verifyTransactionDepositVndThunk } from '@asyncThunk/depositeAsyncThunk'
import Box from '@commom/Box'
import Btn from '@commom/Btn'
import Img from '@commom/Img'
import Txt from '@commom/Txt'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import LoadingWhite from '@reuse/LoadingWhite'
import Modality from '@reuse/Modality'
import { loadingDepositeSelector, transferInfoDepositSelector } from '@selector/depositeSelector'
import { styled } from '@theme/styled'
import React from 'react'
import { Alert } from 'react-native'

interface Props {
  show: boolean,
  setShow: Function,
}

const ModalConfirmTransfer = ({ show, setShow }: Props) => {
  const dispatch = useAppDispatch()
  const loading = useAppSelector(loadingDepositeSelector)
  const transferInfo = useAppSelector(transferInfoDepositSelector)

  const handleVerifyTransactionDepositVnd = async () => {
    const { payload } = await dispatch(
      verifyTransactionDepositVndThunk(transferInfo.id?.toString() || '')
    )

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
        row
        width={'90%'}
        backgroundColor={'white'}
        padding={10}
      >
        <Img
          source={require('@images/account/infoyellow.png')}
          width={25}
          height={25}
          marginRight={10}
        />
        <Box width={'90%'}>
          <Txt bold>Xác nhận đã chuyển tiền</Txt>
          <Txt numberOfLines={2} marginVertical={10}>Bạn có chắc chắn xác nhận đã chuyển tiền?</Txt>

          <Box row>
            <Btn
              onPress={() => setShow(false)}
              style={styled.btnCancel}
            >
              <Txt>Huỷ bỏ</Txt>
            </Btn>

            <Btn
              onPress={handleVerifyTransactionDepositVnd}
              style={styled.redButton2}
              disabled={loading}
              flex={1}
            >
              {loading ? (
                <LoadingWhite />
              ) : (
                <Txt color={'white'} bold>Tôi đã chuyển đến</Txt>
              )}
            </Btn>
          </Box>
        </Box>
      </Box>
    </Modality>
  )
}

export default ModalConfirmTransfer