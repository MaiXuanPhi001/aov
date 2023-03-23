import { uploadImageDeposiVNDThunk } from '@asyncThunk/depositeAsyncThunk'
import Box from '@commom/Box'
import Btn from '@commom/Btn'
import Img from '@commom/Img'
import Txt from '@commom/Txt'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import LoadingWhite from '@reuse/LoadingWhite'
import TextError from '@reuse/TextError'
import { loadingDepositeSelector, transferInfoDepositSelector } from '@selector/depositeSelector'
import { theme } from '@theme/index'
import { styled } from '@theme/styled'
import React, { useState } from 'react'
import { Alert, Platform } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'
import Warning from './Warning'

const SendImage = () => {
  const dispatch = useAppDispatch()
  const loading = useAppSelector(loadingDepositeSelector)
  const transferInfo = useAppSelector(transferInfoDepositSelector)

  const [image, setImage] = useState<string>('')
  const [checkForm, setCheckForm] = useState<boolean>(false)

  const handleUploadImageDeposiVND = async () => {
    if (image.trim() === '') {
      return setCheckForm(true)
    }

    let formdata = new FormData()
    formdata.append('userid', transferInfo.userid)
    formdata.append('idTransaction', transferInfo.id)
    formdata.append('image', { uri: Platform.OS === 'ios' ? image.replace('file://', '') : image, name: 'image.jpg', type: 'image/jpg' })

    const { payload } = await dispatch(
      uploadImageDeposiVNDThunk(formdata)
    )

    !payload.status && Alert.alert(payload.message)
  }

  const handleChooseImage = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 300,
      cropping: true,
      multiple: false
    }).then(image => {
      setImage(image.path)
    }).catch(err => console.log(err))
  }

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
        <Txt color={theme.colors.textRed} bold numberOfLines={2}>
          GỬI MINH CHỨNG ĐÃ CHUYỂN KHOẢN
        </Txt>
      </Box>

      <Warning text={'Hãy sử dụng ảnh chụp màn hình giao dịch'} />

      <Btn
        onPress={handleChooseImage}
        borderWidth={1}
        radius={5}
        marginTop={10}
        paddingVertical={20}
        borderColor={theme.colors.gray3}
      >
        {image ? (
          <Img
            source={{ uri: image }}
            width={'90%'}
            height={200}
            resizeMode={'contain'}
          />
        ) : (
          <>
            <Img
              source={require('@images/account/upload.png')}
              width={60}
              height={60}
            />
            <Txt>Nhấn vào đây để tải ảnh lên</Txt>
          </>
        )}

      </Btn>

      {(checkForm && image.trim() === '') && <TextError text={'Vui lòng chọn hình ảnh'} />}

      <Btn
        onPress={handleUploadImageDeposiVND}
        width={130}
        alignSelf={'center'}
        style={styled.redButton}
        disabled={loading}
      >
        {loading ? (
          <LoadingWhite />
        ) : (
          <Txt bold color={'white'}>Gửi hình ảnh</Txt>
        )}
      </Btn>
    </Box>
  )
}

export default SendImage