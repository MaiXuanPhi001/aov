import { ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { styled } from '@theme/styled'
import ItemAmount from './ItemAmount'
import { numberWithCommas } from '@method/format'

const Amount = () => {
    const randomUserAmount = (): string => {
        const time: number = Math.floor(Date.now())
        const amount: string = time.toString().slice(3, 8)
        return numberWithCommas(Number(amount))
    }

    const randomPlayAmount = (): string => {
        const time: number = Math.floor(Date.now())
        const amount: string = time.toString().slice(2, 10)
        return numberWithCommas(Number(amount))
    }

    const randomAomountOnline = (): string => {
        const amount = Math.floor(Math.random() * 300) + 200
        return numberWithCommas(Number(amount))
    }

    return (
        <ImageBackground
            source={require('@images/home/bg_amount.png')}
            resizeMode={'cover'}
            imageStyle={{ borderRadius: 10 }}
            style={styles.image}
        >
            <ItemAmount
                amount={randomUserAmount()}
                textFirst={'Số lượng'}
                textSecond={'người dùng'}
                icon={require('@images/tab/user-white.png')}
            />

            <ItemAmount
                amount={randomPlayAmount()}
                textFirst={'Số lần'}
                textSecond={'đặt cược'}
                icon={require('@images/home/dice.png')}
            />

            <ItemAmount
                amount={randomAomountOnline()}
                textFirst={'Số lượng'}
                textSecond={'trực tuyến'}
                icon={require('@images/home/group.png')}
            />
        </ImageBackground>
    )
}

export default Amount

const styles = StyleSheet.create({
    image: {
        padding: 20,
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        ...styled.shadow,
    }
})