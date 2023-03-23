import React, { useState } from 'react'
import { styled } from '@theme/styled'
import Box from '@commom/Box'
import Img from '@commom/Img'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'
import Btn from '@commom/Btn'
import ModalBanking from './ModalBanking'
import { Bank } from '@util/banking'
import InputView from './InputView'
import TextError from '@reuse/TextError'
import ModalConfirmAddBanking from './ModalConfirmAddBanking'
import _ from 'lodash'
import { addBankingUser } from '@service/withdrawService'

type Props = {
    onGetBankingUser: Function,
}

const AddBanking = ({ onGetBankingUser} : Props) => {
    const [bank, setBank] = useState<Bank>()
    const [accountNumber, setAccountNumber] = useState<string>('')
    const [boss, setBoss] = useState<string>('')
    const [showModalBanking, setShowModalBanking] = useState<boolean>(false)
    const [showModalConfirmBanking, setShowConfirmBanking] = useState<boolean>(false)
    const [checkForm, setCheckForm] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const handleSetBank = (bank: Bank) => {
        setBank(bank)
        setShowModalBanking(false)
    }

    const handleShowModalConfirm = () => {
        if (_.isEmpty(bank) || accountNumber.trim() === '' || boss.trim() === '') {
            return setCheckForm(true)
        }
        setShowConfirmBanking(true)
    }

    const handleAddBanking = async () => {
        setLoading(true)
        const res = await addBankingUser({
            owner_banking: boss,
            name_banking: bank?.name || '',
            number_banking: Number(accountNumber),
        })
        if (!res.error) {
            if (res.status) {
                onGetBankingUser()
            }
        }
        setShowConfirmBanking(false)
        setLoading(false)
    }

    return (
        <Box
            backgroundColor={'white'}
            style={styled.shadow}
            padding={20}
            marginTop={15}
            radius={10}
        >
            <Box
                row
                backgroundColor={theme.colors.yellowInfo}
                padding={10}
                alignCenter
                marginBottom={20}
            >
                <Img
                    source={require('@images/account/infoyellow.png')}
                    width={20}
                    height={20}
                />
                <Box paddingHorizontal={10}>
                    <Txt numberOfLines={3} >Vui lòng nhập thông tin tài khoản ngân hàng trước khi rút tiền.</Txt>
                </Box>
            </Box>

            <Box
                row
                alignCenter
            >
                <Img
                    source={require('@images/account/wallet.png')}
                    width={20}
                    height={20}
                    marginRight={10}
                />
                <Txt color={theme.colors.textRed} bold>THÊM TÀI KHOẢN NGÂN HÀNG</Txt>
            </Box>

            <Txt marginTop={20} marginBottom={5}>Tên ngân hàng</Txt>
            <Btn
                onPress={() => setShowModalBanking(true)}
                borderColor={theme.colors.gray3}
                borderWidth={1}
                height={45}
                radius={5}
                alignCenter={false}
                padding={10}
            >
                {bank?.name ?
                    <Box
                        row
                        alignCenter
                    >
                        <Img
                            source={bank.image}
                            width={40}
                            height={40}
                            marginRight={10}
                        />
                        <Txt bold>{bank.name}</Txt>
                    </Box> :
                    <Txt>Chọn ngân hàng</Txt>
                }
            </Btn>
            {(checkForm && _.isEmpty(bank)) && <TextError text='Vui lòng chọn ngân hàng' />}

            <InputView
                title={'Số tài khoản'}
                value={accountNumber}
                setValue={setAccountNumber}
                keyBoardType={'numeric'}
                error={checkForm && accountNumber.trim() === ''}
                messError={'Số tài khoản trống'}
            />

            <InputView
                title={'Tên chủ tài khoản'}
                value={boss}
                setValue={setBoss}
                keyBoardType={'default'}
                error={checkForm && boss.trim() === ''}
                messError={'Tên chủ tài khoản trống'}
                autoCapitalize={'characters'}
            />

            <Btn
                onPress={handleShowModalConfirm}
                width={150}
                height={45}
                radius={5}
                backgroundColor={theme.colors.textRed}
                alignSelf={'center'}
                marginTop={20}
            >
                <Txt bold color={'white'}>Thêm ngân hàng</Txt>
            </Btn>

            <ModalBanking
                show={showModalBanking}
                setShow={setShowModalBanking}
                onSetBank={handleSetBank}
            />
            <ModalConfirmAddBanking
                show={showModalConfirmBanking}
                setShow={setShowConfirmBanking}
                bank={bank?.name || ''}
                accountNumber={Number(accountNumber)}
                boss={boss}
                loading={loading}
                onAddBanking={handleAddBanking}
            />
        </Box>
    )
}

export default AddBanking