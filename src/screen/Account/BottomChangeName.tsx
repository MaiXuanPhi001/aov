import { Alert, Keyboard } from 'react-native'
import React, { useState } from 'react'
import BottomSheet from '@reuse/BottomSheet'
import { height } from '@util/responsive'
import Txt from '@commom/Txt'
import Box from '@commom/Box'
import Btn from '@commom/Btn'
import { theme } from '@theme/index'
import Input from '@commom/Input'
import TextError from '@reuse/TextError'
import { useAppSelector } from '@hooks/index'
import { profileSelector } from '@selector/userSelector'
import { Profile } from '@interface/user'
import { changeUserName } from '@service/userService'
import LoadingWhite from '@reuse/LoadingWhite'

const BottomChangeName = ({ bottomSheetRef, onGetProfile }: any) => {
    const profile: Profile = useAppSelector<any>(profileSelector)

    const [name, setName] = useState<string>(profile.userName)
    const [loading, setLoading] = useState<boolean>(false)
    const [checkForm, setCheckForm] = useState<boolean>(false)

    const handleChangeName = async () => {
        if (name.trim() === '') return setCheckForm(true)
        setLoading(true)
        const res = await changeUserName(name)
        Alert.alert(res.message)
        setLoading(false)
        onGetProfile()
        bottomSheetRef.current.close()
        Keyboard.dismiss()
    }

    const handleOpendBottomSheet = async () => {
        setName(profile.userName)
    }

    return (
        <BottomSheet
            activeHeight={height * 0.4 + 85}
            activeHeightFocus={height * 0.6 + 85}
            backgroundColor={'white'}
            backDropColor={'black'}
            ref={bottomSheetRef}
            onOpendBottomSheet={handleOpendBottomSheet}
        >
            <Box
                flex={1}
                paddingHorizontal={20}
            >
                <Txt marginBottom={10}>Chỉnh sửa tên người dùng</Txt>

                <Input
                    width={'100%'}
                    value={name}
                    onChangeText={setName}
                    borderColor={theme.colors.grayBorderInput}
                    borderWidth={1}
                    height={45}
                    iconOne={require('@images/email.png')}
                    radius={5}
                    paddingHorizontal={45}
                    hint={'Tên người dùng'}
                    onFocus={() => bottomSheetRef.current.onPenInputFocus()}
                />
                {(checkForm && name.trim() === '') && <TextError text='Vui lòng nhập tên người dùng' />}

                <Btn
                    onPress={handleChangeName}
                    width={170}
                    height={45}
                    backgroundColor={theme.colors.textRed}
                    radius={5}
                    marginTop={10}
                    alignSelf={'center'}
                >
                    {loading ?
                        <LoadingWhite /> :
                        <Txt color={'white'} bold>Cập nhật thông tin</Txt>
                    }
                </Btn>
            </Box>
        </BottomSheet>
    )
}

export default BottomChangeName