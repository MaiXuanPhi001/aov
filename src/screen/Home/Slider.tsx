import { ScrollView, StyleSheet, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Box from '@commom/Box'
import Img from '@commom/Img'
import { width } from '@util/responsive'

type Event = {
    nativeEvent: {
        contentOffset: {
            x: number
        }
    }
}

const Slider = () => {
    const stepCarousel = useRef<any>(null)
    const [currentImage, setCurrentImage] = useState<number>(0)

    const PADING_HOZ = 39
    const PERCENT = 43.58974358974359
    const HEIGHT_IMG = width * PERCENT / 100

    const images = [
        require('@images/slide/aov_banner_1.jpg'),
        require('@images/slide/aov_banner_2.jpg'),
        require('@images/slide/aov_banner_3.jpg'),
    ]

    const handleScroll = (e: Event) => {
        if (!e) return
        const { nativeEvent } = e
        if (nativeEvent && nativeEvent.contentOffset) {
            let imageIndex: number = 0
            if (nativeEvent.contentOffset.x > 0) {
                imageIndex = (Math.floor(nativeEvent.contentOffset.x + width / 2) / width) - 0.4
            }
            setCurrentImage(Number(imageIndex.toFixed(0)))
        }
    }

    useEffect(() => {
        let index: number = 0
        const timeInterval = setInterval(() => {
            if (stepCarousel?.current?.scrollTo) {
                const w = width - PADING_HOZ
                stepCarousel.current.scrollTo({ x: index * w, y: 0, animated: true })
                index += 1
                if (index === images.length) index = 0
            }
        }, 3000)

        return () => clearInterval(timeInterval)
    }, [])

    return (
        <Box>
            <ScrollView
                horizontal
                pagingEnabled
                ref={stepCarousel}
                onScroll={handleScroll}
                scrollEventThrottle={10000}
                style={styles.scrollView}
            >
                {images.map((image: string) =>
                    <Img
                        key={image}
                        source={image}
                        resizeMode={'cover'}
                        width={width - PADING_HOZ}
                        height={HEIGHT_IMG} // 170
                        radius={10}
                    />
                )}
            </ScrollView>
            <Box row alignSelf={'center'} marginTop={-20}>
                {images.map((image: string, index: number) =>
                    <Text
                        key={image}
                        style={currentImage == index ? styles.dotActive : styles.dot}
                    >
                        ●
                    </Text>
                )}
            </Box>
        </Box>
    )
}

export default Slider

const styles = StyleSheet.create({
    scrollView: {
        // width: '90%',
        alignSelf: 'center',
    },
    dotActive: {
        margin: 3,
        color: 'white',
        fontSize: 10,
    },
    dot: {
        margin: 3,
        color: 'black',
        fontSize: 10,
        opacity: 0.5
    }
})