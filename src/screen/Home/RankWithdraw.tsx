import { ImageBackground, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { styled } from '@theme/styled'
import UserWithdraw from './UserWithdraw'
import { data } from './rankData'

type User = {
    id: number,
    name: string,
    amount: string,
    time: string,
}

const RankWithdraw = () => {
    const [users, setUsers] = useState<User[]>([])
    const opacity = useSharedValue(1)

    // hàm xoá trộn vị trí trong mảng
    const shuffleArray = (array: User[]): void => {
        'worklet'
        for (let i = array.length - 1; i > 0; i--) {
            const j: number = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const opacityStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value
        }
    })

    // animation hiện lại danh sách
    const animationEnd = (finished: boolean | undefined): void => {
        if (finished) {
            // Xáo trộn vị trí
            handleSetUser()
            opacity.value = withTiming(1, {
                duration: 1000,
                easing: Easing.out(Easing.exp)
            })
        }
    }

    // Xáo trộn vị trí data, lấy 5 phần tử đầu tiên sau khi xáo trộn rùi gán cho users
    const handleSetUser = (): void => {
        'worklet'
        shuffleArray(data)
        const users: User[] = data.slice(0, 5)

        const date: Date = new Date()
        const hours: number = date.getHours() - 1

        let arrayRandom: number[] = []
        // Thêm 5 phần tử được random ngẫu nhiên vào arrayRandom
        for (let index = 0; index < users.length; index++) {
            let randNum: number = Math.floor(Math.random() * 20) + 1
            arrayRandom.push(randNum)
        }
        // Sắp xếp mảng theo thứ tự giảm dần
        arrayRandom.sort(function (a, b) { return b - a })
        
        // Đổi thời gian (field: time) mặc định của mỗi phần tử trong mảng users 
        for (let index = 0; index < users.length; index++) {
            users[index].time = hours + ':' + (59 - arrayRandom[index])
        }

        setUsers(users)
    }

    useEffect(() => {
        handleSetUser()
        // Mỗi 7 giây tạo animation ẩn danh sách
        const time = setInterval(() => {
            opacity.value = withTiming(0, {
                duration: 1000,
                easing: Easing.out(Easing.exp)
            }, (finished) => runOnJS(animationEnd)(finished))
        }, 7000)

        return () => clearInterval(time)
    }, [])

    return (
        <Box marginTop={30}>
            <ImageBackground
                source={require('@images/home/banners.png')}
                style={styles.imageBackground}
            >
                <Txt
                    marginBottom={5}
                    size={16}
                    bold
                    color={'white'}
                >
                    BẢNG XẾP HẠNG RÚT TIỀN
                </Txt>
            </ImageBackground>

            <Box
                backgroundColor={'white'}
                radius={10}
                style={[styled.shadow]}
                paddingHorizontal={20}
                paddingVertical={10}
                marginTop={20}
            >
                <Animated.View style={opacityStyle}>
                    {users.map((user: User) =>
                        <UserWithdraw
                            key={user.id}
                            user={user}
                        />
                    )}
                </Animated.View>
            </Box>
        </Box>
    )
}

export default RankWithdraw

const styles = StyleSheet.create({
    imageBackground: {
        height: 40,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})