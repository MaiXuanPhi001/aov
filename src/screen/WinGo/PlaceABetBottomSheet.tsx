import React, { useState } from 'react'
import BottomSheet from '@reuse/BottomSheet'
import { height } from '@util/responsive'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'
import { numberWithCommas } from '@method/format'
import Btn from '@commom/Btn'
import Input from '@commom/Input'
import { chooseWinGoSelector, colorWinGoSelector, loadingWinGoSelector, orderWinGoSelector, timeLimitWinGoSelector, typeWinGoSelector } from '@selector/wingoSelector'
import { useAppSelector } from '@hooks/index'
import { Keyboard, Pressable } from 'react-native'
import LoadingWhite from '@reuse/LoadingWhite'

const PlaceABetBottomSheet = ({ bottomSheetRef, onOrder }: any) => {
  const color = useAppSelector(colorWinGoSelector)
  const timeLimit = useAppSelector(timeLimitWinGoSelector)
  const choose = useAppSelector(chooseWinGoSelector)
  const order = useAppSelector(orderWinGoSelector)
  const type = useAppSelector(typeWinGoSelector)
  const loading = useAppSelector(loadingWinGoSelector)

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

  const SIZE: number = 40

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
      <Pressable
        onPress={() => Keyboard.dismiss()}
      >
        <Box
          row
          height={80}
          marginTop={height <= 600 ? -27 : -24}
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
        >
          <Box
            backgroundColor={color.left}
            width={'50%'}
            borderTopLeftRadius={10}
          />
          <Box
            backgroundColor={color.right}
            width={'50%'}
            borderTopRightRadius={10}
          />

          <Box
            absolute
            width={'100%'}
            height={'100%'}
            alignCenter
            justifyCenter
          >
            <Txt color={'white'} bold size={16}>{timeLimit + ' phút'}</Txt>
            <Box
              row
              alignCenter
              marginTop={10}
            >
              <Txt color={'white'} bold marginRight={5} size={16}>Bạn chọn</Txt>
              <Box
                borderWidth={2}
                borderColor={'white'}
                paddingHorizontal={10}
                height={30}
                alignCenter
                justifyCenter
                radius={5}
              >
                <Txt color={'white'} bold size={16}>
                  {choose}
                </Txt>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          row
          paddingHorizontal={10}
          justifySpaceBetween
          marginTop={20}
          alignCenter
        >
          <Txt size={16}>Số tiền</Txt>
          <Box row>
            {prices.map((price: number) =>
              <Price
                key={price}
                price={price}
                choose={amount === price}
                onChangeAmount={handleChangeAmount}
                color={color}
              />
            )}
          </Box>
        </Box>

        <Box
          row
          paddingHorizontal={10}
          justifySpaceBetween
          marginTop={20}
          alignCenter
        >
          <Txt>Số lượng</Txt>
          <Box
            row
            alignCenter
          >
            <Btn
              onPress={() => setMultiplication(multiplication - 1)}
              disabled={multiplication < 2}
              width={SIZE}
              height={SIZE}
              borderWidth={1}
              radius={50}
              borderColor={theme.colors.gray3}
              backgroundColor={multiplication > 1 ? 'white' : theme.colors.gray3}
              marginRight={10}
            >
              <Txt>-</Txt>
            </Btn>

            <Input
              value={multiplication.toString()}
              onChangeText={(text: string) => setMultiplication(Number(text))}
              width={100}
              height={SIZE}
              borderColor={theme.colors.gray3}
              borderWidth={1}
              textAlign={'center'}
              keyboardType={'numeric'}
              onFocus={() => bottomSheetRef.current.onPenInputFocus()}
            />

            <Btn
              onPress={() => setMultiplication(multiplication + 1)}
              width={SIZE}
              height={SIZE}
              borderWidth={1}
              radius={50}
              borderColor={theme.colors.gray3}
              marginLeft={10}
            >
              <Txt>+</Txt>
            </Btn>
          </Box>
        </Box>

        <Box
          row
          marginTop={15}
          alignSelf={'flex-end'}
          marginRight={10}
        >
          {multiplications.map((number: number) =>
            <Multiplication
              key={number}
              number={number}
              choose={number === multiplication}
              onChangeMultiplication={handleChangeMultiplication}
              color={color}
            />
          )}
        </Box>

        <Box
          row
          marginTop={20}
          paddingHorizontal={10}
        >
          <Btn
            onPress={() => {
              bottomSheetRef.current.close()
              Keyboard.dismiss()
            }}
            borderWidth={1}
            height={40}
            width={80}
            radius={20}
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
                api: 'order',
              })
              onOpendBottomSheet()
            }}
            disabled={loading}
            height={40}
            paddingHorizontal={20}
            radius={20}
            marginLeft={10}
            backgroundColor={color.left}
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

const Multiplication = ({ number, choose, onChangeMultiplication, color }:
  { number: number, choose: boolean, onChangeMultiplication: Function, color: any }
) => {
  return (
    <Btn
      onPress={() => onChangeMultiplication(number)}
      backgroundColor={choose ? color.left : theme.colors.gray3}
      marginLeft={5}
      paddingHorizontal={5}
      height={30}
      alignCenter
      justifyCenter
    >
      <Txt color={choose ? 'white' : 'black'}>
        x{number}
      </Txt>
    </Btn>
  )
}

const Price = ({ price, choose, onChangeAmount, color }:
  { price: number, choose: boolean, onChangeAmount: Function, color: any }
) => {
  return (
    <Btn
      onPress={() => onChangeAmount(price)}
      backgroundColor={choose ? color.left : theme.colors.gray3}
      marginLeft={5}
      paddingHorizontal={5}
      height={30}
      alignCenter
      justifyCenter
    >
      <Txt color={choose ? 'white' : 'black'}>
        {numberWithCommas(price)}
      </Txt>
    </Btn>
  )
}

export default PlaceABetBottomSheet