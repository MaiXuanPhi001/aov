import { loginThunk } from '@asyncThunk/userAsyncThunk'
import Box from '@commom/Box'
import Btn from '@commom/Btn'
import Input from '@commom/Input'
import Txt from '@commom/Txt'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import { alertCannotConnect } from '@method/alert'
import { useNavigation } from '@react-navigation/native'
import LoadingWhite from '@reuse/LoadingWhite'
import TextError from '@reuse/TextError'
import { loadingUserSelector } from '@selector/userSelector'
import { theme } from '@theme/index'
import { styled } from '@theme/styled'
import { width } from '@util/responsive'
import routes from '@util/routes'
import React, { useState } from 'react'
import { Alert } from 'react-native'

const BORDER = 30

const Form = () => {
    const dispatch = useAppDispatch()

    const navigation = useNavigation<any>()

    const [email, setEmail] = useState<string>('test@gmail.com')
    const [password, setPassword] = useState<string>('123123')
    const [security, setSecurity] = useState<boolean>(true)
    const [checkForm, setCheckForm] = useState<boolean>(false)

    const loading = useAppSelector(loadingUserSelector)

    const handlerLogin = async () => {
        if (email.trim() === '' || password.trim() === '') {
            return setCheckForm(true)
        }
        const { payload } = await dispatch(loginThunk({
            email,
            password,
        }))

        if (payload.error) return alertCannotConnect()
        !payload.status && Alert.alert(payload.message)
    }

    return (
        <Box>
            <Box
                width={width}
                backgroundColor={'white'}
                alignCenter
                absolute
                top={-35}
                borderTopLeftRadius={BORDER}
                borderTopRightRadius={BORDER}
                paddingHorizontal={45}
            >
                <Txt
                    bold
                    color={theme.colors.textRed}
                    marginVertical={20}
                    size={18}
                >
                    ĐĂNG NHẬP
                </Txt>

                <Input
                    value={email}
                    onChangeText={setEmail}
                    hint={'Địa chỉ email'}
                    iconOne={require('@images/email.png')}
                    width={'100%'}
                    style={styled.inputOne}
                />
                {(checkForm && email.trim() === '') && <TextError text='Email trống' />}
                <Input
                    value={password}
                    onChangeText={setPassword}
                    hint={'Mật khẩu'}
                    security={security}
                    onPress={() => setSecurity(!security)}
                    iconOne={require('@images/padlock.png')}
                    iconTwo={security ?
                        require('@images/eye-open.png') :
                        require('@images/eye-close.png')
                    }
                    width={'100%'}
                    marginTop={15}
                    style={styled.inputOne}
                />
                {(checkForm && password.trim() === '') && <TextError text={'Mật khẩu trống'} />}
                <Btn
                    onPress={handlerLogin}
                    disabled={loading}
                    width={120}
                    style={styled.redButton}
                >
                    {loading ?
                        <LoadingWhite /> :
                        <Txt color={'white'} bold>Đăng nhập</Txt>
                    }
                </Btn>
                <Btn onPress={() => navigation.navigate(routes.FORGOT_PASSWORD)}>
                    <Txt bold marginVertical={15}>Quên mật khẩu?</Txt>
                </Btn>
                <Btn onPress={() => navigation.navigate(routes.SIGN_UP)}>
                    <Txt bold>Đăng ký tài khoản</Txt>
                </Btn>
            </Box>

        </Box>
    )
}

export default Form