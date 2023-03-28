import Box from '@commom/Box'
import Btn from '@commom/Btn'
import Input from '@commom/Input'
import Txt from '@commom/Txt'
import { goBack } from '@navigation/navigationRef'
import BackHome from '@reuse/BackHome'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import LoadingWhite from '@reuse/LoadingWhite'
import TextError from '@reuse/TextError'
import { sendmailforgetpassword } from '@service/userService'
import { theme } from '@theme/index'
import { styled } from '@theme/styled'
import routes from '@util/routes'
import React, { useState } from 'react'
import { Alert } from 'react-native'

const ForgotPassword = ({ navigation }: any) => {
  const [email, setEmail] = useState<string>('')
  const [checkForm, setCheckForm] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const handleForgotPassword = async () => {
    if (email.trim() === '') return setCheckForm(true)
    setLoading(true)
    const res = await sendmailforgetpassword(email)
    Alert.alert(res.message)
    setLoading(false)
    setEmail('')
  }

  return (
    <KeyBoardSafe>
      <BackHome onBack={() => goBack()} />
      <Box
        paddingHorizontal={20}
        alignCenter
      >
        <Txt
          color={theme.colors.textRed}
          bold
          size={18}
          marginVertical={20}
        >
          LẤY LẠI MẬT KHẨU
        </Txt>

        <Txt numberOfLines={3}>Hãy nhập email bạn đã đăng ký tài khoản. Hệ thống sẽ gửi link lấy lại mật khẩu qua địa chỉ email đó</Txt>

        <Input
          width={'100%'}
          value={email}
          onChangeText={setEmail}
          borderColor={theme.colors.grayBorderInput}
          borderWidth={1}
          height={45}
          iconOne={require('@images/email.png')}
          radius={5}
          paddingHorizontal={45}
          marginTop={20}
          hint={'Địa chỉ email'}
        />
        {(checkForm && email.trim() === '') && <TextError text='Vui lòng nhập email' />}
        <Btn
          onPress={handleForgotPassword}
          disabled={loading}
          width={160}
          style={styled.redButton}
        >
          {loading ?
            <LoadingWhite /> :
            <Txt color={'white'} bold>Lấy lại mật khẩu</Txt>
          }
        </Btn>
        <Btn onPress={() => navigation.navigate(routes.LOGIN)}>
          <Txt bold>Đăng nhập</Txt>
        </Btn>
      </Box>
    </KeyBoardSafe>
  )
}

export default ForgotPassword