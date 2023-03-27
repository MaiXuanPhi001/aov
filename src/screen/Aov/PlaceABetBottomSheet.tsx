import Box from '@commom/Box'
import Btn from '@commom/Btn'
import Img from '@commom/Img'
import Input from '@commom/Input'
import Txt from '@commom/Txt'
import { useAppSelector } from '@hooks/index'
import { numberWithCommas } from '@method/format'
import BottomSheet from '@reuse/BottomSheet'
import LoadingWhite from '@reuse/LoadingWhite'
import { imageAovSelector, loadingAovSelector, orderAovSelector, timeLimitAovSelector, typeAovSelector } from '@selector/aovSelector'
import { theme } from '@theme/index'
import { height } from '@util/responsive'
import React, { useState } from 'react'
import { Keyboard, Pressable, StyleSheet } from 'react-native'
import Multiplication from './Multiplication'
import Price from './Price'
const SIZE: number = 40

const PlaceABetBottomSheet = ({ bottomSheetRef, onOrder }: any) => {
    const timeLimit = useAppSelector(timeLimitAovSelector)
    const order = useAppSelector(orderAovSelector)
    const type = useAppSelector(typeAovSelector)
    const image = useAppSelector(imageAovSelector)
    const loading = useAppSelector(loadingAovSelector)

    const [amount, setAmount] = useState<number>(1000)
    const [multiplication, setMultiplication] = useState<number>(1)

    const handleChangeAmount = (amount: number) => {
        setAmount(amount)
    }

    const handleChangeMultiplication = (number: number) => {
        setMultiplication(number)
    }

    const onOpendBottomSheet = () => {
        setAmount(1000)
        setMultiplication(1)
    }

    const prices: number[] = [1000, 10_000, 100_000, 1_000_000]
    const multiplications: number[] = [1, 5, 10, 20, 50, 100]

    return (
        <BottomSheet
            activeHeight={height * 0.6}
            activeHeightFocus={height * 0.8}
            backgroundColor={'white'}
            backDropColor={'black'}
            ref={bottomSheetRef}
            onOpendBottomSheet={onOpendBottomSheet}
        >
            <Pressable onPress={() => Keyboard.dismiss()}>
                <Box style={styles.container}>
                    <Box style={styles.characterContainer}>
                        <Img 
                            source={image}
                            width={45}
                            height={45}
                            radius={50}
                        />
                    </Box>
                    <Txt bold color={'white'} size={16}>{timeLimit} phút</Txt>
                </Box>

                <Box style={styles.balanceContainer}>
                    <Txt size={16}>Số tiền</Txt>
                    <Box row>
                        {prices.map((price: number) =>
                            <Price
                                key={price}
                                price={price}
                                choose={amount === price}
                                onChangeAmount={handleChangeAmount}
                            />
                        )}
                    </Box>
                </Box>

                <Box style={styles.amountContainer}>
                    <Txt>Số lượng</Txt>
                    <Box row alignCenter>
                        <Btn
                            onPress={() => setMultiplication(multiplication - 1)}
                            disabled={multiplication < 2}
                            backgroundColor={multiplication > 1 ? 'white' : theme.colors.gray3}
                            style={styles.buttonSubPlus}
                        >
                            <Txt>-</Txt>
                        </Btn>

                        <Input
                            value={multiplication.toString()}
                            onChangeText={(text: string) => setMultiplication(Number(text))}
                            textAlign={'center'}
                            keyboardType={'numeric'}
                            onFocus={() => bottomSheetRef.current.onPenInputFocus()}
                            style={styles.input}
                        />

                        <Btn
                            onPress={() => setMultiplication(multiplication + 1)}
                            marginLeft={10}
                            style={styles.buttonSubPlus}
                        >
                            <Txt>+</Txt>
                        </Btn>
                    </Box>
                </Box>

                <Box style={styles.multiplicationContainer}>
                    {multiplications.map((number: number) =>
                        <Multiplication
                            key={number}
                            number={number}
                            choose={number === multiplication}
                            onChangeMultiplication={handleChangeMultiplication}
                        />
                    )}
                </Box>

                <Box style={styles.buttonContainer}>
                    <Btn
                        onPress={() => {
                            bottomSheetRef.current.close()
                            Keyboard.dismiss()
                        }}
                        style={styles.buttonCancel}
                    >
                        <Txt bold>Huỷ</Txt>
                    </Btn>

                    <Btn
                        onPress={() => {
                            onOrder({
                                time: timeLimit,
                                amount: multiplication.toString(),
                                balance: amount.toString(),
                                order: order.toString(),
                                type: type,
                                api: 'orderAOV',
                            })
                            onOpendBottomSheet()
                        }}
                        disabled={loading}
                        style={styles.buttonOrder}
                    >
                        {loading ?
                            <LoadingWhite /> :
                            <Txt bold color={'white'}>Đặt cược {numberWithCommas(amount * multiplication)} đ</Txt>
                        }
                    </Btn>
                </Box>
            </Pressable>
        </BottomSheet>
    )
}

export default PlaceABetBottomSheet

const styles = StyleSheet.create({
    characterContainer: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 50,
        marginRight: 10
    },
    buttonOrder: {
        height: 40,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginLeft: 10,
        backgroundColor: theme.colors.purpleOrder,
    },
    buttonCancel: {
        borderWidth: 1,
        height: 40,
        width: 80,
        borderRadius: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        paddingHorizontal: 10,
    },
    multiplicationContainer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 15,
        alignSelf: 'center',
        marginRight: 10,
        justifyContent: 'flex-end',
        paddingRight: 5,
    },
    input: {
        width: 100,
        height: SIZE,
        borderColor: theme.colors.gray3,
        borderWidth: 1,
    },
    buttonSubPlus: {
        width: SIZE,
        height: SIZE,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: theme.colors.gray3,
        marginRight: 10,
    },
    amountContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        marginTop: 20,
        alignItems: 'center',
    },
    balanceContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        marginTop: 20,
        alignItems: 'center',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 80,
        marginTop: height <= 60 ? -27 : -24,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: theme.colors.purpleOrder
    }
})