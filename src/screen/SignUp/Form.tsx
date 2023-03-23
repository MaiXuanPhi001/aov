import React, { useState } from 'react'
import Box from '@commom/Box'
import { width } from '@util/responsive'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'
import Input from '@commom/Input'
import TextError from '@reuse/TextError'
import Btn from '@commom/Btn'
import LoadingWhite from '@reuse/LoadingWhite'
import { useNavigation } from '@react-navigation/native'
import routes from '@util/routes'
import { signUp } from '@service/userService'
import { alertCannotConnect } from '@method/alert'
import { Alert } from 'react-native'
import { styled } from '@theme/styled'

const Form = () => {
    const navigation = useNavigation<any>()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [referral, setReferral] = useState<string>('')
    const [securityPassword, setSecurityPassword] = useState<boolean>(true)
    const [securityConfirmPassword, setSecurityConfirmPassword] = useState<boolean>(true)
    const [checkForm, setCheckForm] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const BORDER = 30

    const handleSignUp = async () => {
        if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' ||
            password.trim() !== confirmPassword.trim() || referral.trim() === '') {
            return setCheckForm(true)
        }
        setLoading(true)
        const res = await signUp({
            email,
            password,
            referral,
        })

        res.error && alertCannotConnect()
        !res.error && Alert.alert(res.message)
        setLoading(false)
        setCheckForm(false)
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
                    ĐĂNG KÝ TÀI KHOẢN
                </Txt>

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
                    hint={'Địa chỉ email'}
                />
                {(checkForm && email.trim() === '') && <TextError text='Email trống' />}
                <Input
                    onPress={() => setSecurityPassword(!securityPassword)}
                    width={'100%'}
                    value={password}
                    onChangeText={setPassword}
                    borderColor={theme.colors.grayBorderInput}
                    borderWidth={1}
                    height={45}
                    iconOne={require('@images/padlock.png')}
                    radius={5}
                    paddingHorizontal={45}
                    hint={'Mật khẩu'}
                    marginTop={15}
                    security={securityPassword}
                    iconTwo={securityPassword ?
                        require('@images/eye-open.png') :
                        require('@images/eye-close.png')
                    }
                />
                {(checkForm && password.trim() === '') && <TextError text={'Mật khẩu trống'} />}
                <Input
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    hint={'Xác nhận mật khẩu'}
                    security={securityConfirmPassword}
                    onPress={() => setSecurityConfirmPassword(!securityConfirmPassword)}
                    iconOne={require('@images/padlock.png')}
                    iconTwo={securityConfirmPassword ?
                        require('@images/eye-open.png') :
                        require('@images/eye-close.png')
                    }
                    width={'100%'}
                    borderColor={theme.colors.grayBorderInput}
                    borderWidth={1}
                    height={45}
                    radius={5}
                    paddingHorizontal={45}
                    marginTop={15}
                />
                {(checkForm && confirmPassword.trim() === '') && <TextError text={'Xác nhận mật khẩu trống'} />}
                {(checkForm && confirmPassword.trim() !== '' && confirmPassword.trim() !== password.trim()) &&
                    <TextError text={'Xác nhận mật khẩu không giống'} />}
                <Input
                    value={referral}
                    onChangeText={setReferral}
                    iconOne={require('@images/qr.png')}
                    hint={'Mã giới thiệu'}
                    width={'100%'}
                    borderColor={theme.colors.grayBorderInput}
                    borderWidth={1}
                    height={45}
                    radius={5}
                    paddingHorizontal={45}
                    marginTop={15}
                />
                {(checkForm && referral.trim() === '') && <TextError text='Mã giới thiệu trống' />}
                <Btn
                    onPress={handleSignUp}
                    disabled={loading}
                    width={120}
                    style={styled.redButton}
                >
                    {loading ?
                        <LoadingWhite /> :
                        <Txt color={'white'} bold>Đăng ký</Txt>
                    }
                </Btn>
                <Btn onPress={() => navigation.navigate(routes.LOGIN)}>
                    <Txt bold marginVertical={15}>Đăng nhập?</Txt>
                </Btn>
            </Box>
        </Box>
    )
}

export default Form