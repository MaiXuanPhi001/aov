import React, { useState } from 'react'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import BackHeader from '@reuse/BackHeader'
import { theme } from '@theme/index'
import Item from './Item'
import Btn from '@commom/Btn'
import TextError from '@reuse/TextError'
import LoadingWhite from '@reuse/LoadingWhite'
import { changePassword } from '@service/userService'
import { Alert } from 'react-native'

const ChangePassword = () => {
    const [password, setPassword] = useState<string>('')
    const [securityPassword, setSecurityPassword] = useState<boolean>(true)
    const [newPassword, setNewPassword] = useState<string>('')
    const [securiryNewPassword, setSecurityNewPassword] = useState<boolean>(true)
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [securityConfirmPassword, setSecurityConfirmPassword] = useState<boolean>(true)
    const [checkForm, setCheckForm] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const handleChangePassword = async () => {
        if (password.trim() === '' || newPassword.trim() === '' || confirmPassword.trim() === '' ||
            newPassword.trim() !== confirmPassword.trim()) {
            return setCheckForm(true)
        }
        setLoading(true)
        const res = await changePassword({
            password,
            newPassword,
        })
        Alert.alert(res.message)
        setLoading(false)
    }

    return (
        <KeyBoardSafe>
            <BackHeader />
            <Box
                alignCenter
                paddingHorizontal={20}
            >
                <Txt
                    size={18}
                    color={theme.colors.textRed}
                    bold
                    marginVertical={20}
                >
                    THAY ĐỔI MẬT KHẨU
                </Txt>

                <Item
                    title={'Mật khẩu hiện tại'}
                    value={password}
                    setValue={setPassword}
                    onPress={() => setSecurityPassword(!securityPassword)}
                    security={securityPassword}
                    error={checkForm && password.trim() === ''}
                    errorMessage={'Mật khẩu trống'}
                />

                <Item
                    title={'Mật khẩu mới'}
                    value={newPassword}
                    setValue={setNewPassword}
                    onPress={() => setSecurityNewPassword(!securiryNewPassword)}
                    security={securiryNewPassword}
                    error={checkForm && newPassword.trim() === ''}
                    errorMessage={'Mật khẩu mới trống'}
                />

                <Item
                    title={'Xác nhận mật khẩu mới'}
                    value={confirmPassword}
                    setValue={setConfirmPassword}
                    onPress={() => setSecurityConfirmPassword(!securityConfirmPassword)}
                    security={securityConfirmPassword}
                    error={checkForm && confirmPassword.trim() === ''}
                    errorMessage={'Xác nhận mật khẩu mới trống'}
                />
                {(checkForm && newPassword.trim() !== confirmPassword.trim()) && <TextError text={'Mật khẩu không trùng khớp'} />}

                <Btn
                    onPress={handleChangePassword}
                    backgroundColor={theme.colors.textRed}
                    height={45}
                    width={150}
                    radius={5}
                    marginTop={40}
                >
                    {loading ?
                        <LoadingWhite /> :
                        <Txt bold color={'white'}>Đổi mật khẩu</Txt>
                    }
                </Btn>
            </Box>
        </KeyBoardSafe>
    )
}

export default ChangePassword