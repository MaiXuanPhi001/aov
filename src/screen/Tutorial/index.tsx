import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import Safe from '@reuse/Safe'
import ForegroundHome from '@reuse/ForegroundHome'
import Txt from '@commom/Txt'
import { theme } from '@theme/index'
import { styled } from '@theme/styled'
import BackHeader from '@reuse/BackHeader'
import T from './T'
import { height } from '@util/responsive'

const Tutorial = () => {
    return (
        <Safe>
            <BackHeader />
            <ForegroundHome height={230} />
            <View style={[styled.shadow, styles.container]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Txt
                        bold
                        color={theme.colors.red}
                        size={18}
                        marginBottom={30}
                        marginTop={25}
                        alignSelf={'center'}
                    >
                        QUY ĐỊNH ĐẶT CƯỢC
                    </Txt>

                    <T text='(1) Đối với hình thức cược Lớn/Nhỏ: Trong một kỳ xổ số không được đặt cược vừa Lớn vừa Nhỏ.' />

                    <T text='(2) Đối với hình thức cược Xanh/Tím/Đỏ: Trong một kỳ xổ số không được đặt cược nhiều hơn một màu.' />

                    <T text='(3) Đối với hình thức cược số 0-9: Trong một kỳ xổ số không được đặt cược nhiều hơn 7 số.' />

                    <T text={'(4) Mỗi kỳ xổ số, bạn được phép đặt cược tối thiểu 0 lần và tối đa 9 lần (bao gồm 1 lần cược Lớn/Nhỏ, 1 lần cược Xanh/Tím/Đỏ, 7 lần cược số)'} />

                    <Txt
                        bold
                        color={theme.colors.red}
                        size={18}
                        marginBottom={30}
                        marginTop={25}
                        alignSelf={'center'}
                    >
                        HƯỚNG DẪN TÍNH THƯỞNG
                    </Txt>

                    <T text={'(1) Mỗi kỳ xổ số kéo dài 1 phút, trong đó 55 giây đầu là thời gian đặt cược, 5 giây cuối là thời gian tạm ngưng đặt cược và chờ mở kết quả. Giải thưởng sẽ được mở cả ngày. Tổng số kỳ xổ số mỗi ngày là 1440 kỳ.'} />

                    <T text={'(2) Phí giao dịch mỗi lần đặt cược là 2% tính trên số tiền đặt cược ban đầu. VD: Nếu bạn đặt cược 100đ, phí sẽ là 2đ, vậy nên tiền đặt cược thực tế của bạn sẽ là 98đ.'} />

                    <Txt marginBottom={20} bold>
                        (3) Trường hợp đặt cược màu Xanh:
                    </Txt>

                    <T text={'* Nếu kết quả là 1, 3, 7, 9: bạn thắng 2 lần số tiền cược thực tế.'} />

                    <T text={'* Nếu kết quả là 5: bạn thắng 1.5 lần số tiền cược thực tế.'} />

                    <T text={'* Nếu kết quả là số khác: bạn không thắng.'} />

                    <Txt marginBottom={20} bold>
                        (4) Trường hợp đặt cược màu Đỏ:
                    </Txt>

                    <T text={'* Nếu kết quả là 2, 4, 6, 8: bạn thắng 2 lần số tiền cược thực tế.'} />

                    <T text={'* Nếu kết quả là 0: bạn thắng 1.5 lần số tiền cược thực tế.'} />

                    <T text={'* Nếu kết quả là số khác: bạn không thắng.'} />

                    <Txt marginBottom={20} bold>
                        (5) Trường hợp đặt cược màu Tím:
                    </Txt>

                    <T text={'* Nếu kết quả là 0, 5: bạn thắng 4.5 lần số tiền cược thực tế.'} />

                    <T text={'* Nếu kết quả là số khác: bạn không thắng.'} />

                    <Txt marginBottom={20} bold>
                        (6) Trường hợp đặt cược số từ 0 đến 9:
                    </Txt>

                    <T text={'* Nếu kết quả là đúng số bạn đặt cược: bạn thắng 9 lần số tiền cược thực tế.'} />

                    <T text={'* Nếu kết quả là số khác: bạn không thắng.'} />

                    <Txt marginBottom={20} bold>
                        (7) Trường hợp đặt cược Lớn:
                    </Txt>

                    <T text={'* Nếu kết quả là 5, 6, 7, 8, 9: bạn thắng 2 lần số tiền cược thực tế.'} />

                    <T text={'* Nếu kết quả là số khác: bạn không thắng.'} />

                    <Txt marginBottom={20} bold>
                        (8) Trường hợp đặt cược Nhỏ:
                    </Txt>

                    <T text={'* Nếu kết quả là 0, 1, 2, 3, 4: bạn thắng 2 lần số tiền cược thực tế.'} />

                    <T text={'* Nếu kết quả là số khác: bạn không thắng.'} />
                </ScrollView>
            </View>
        </Safe>
    )
}

export default Tutorial

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '92%',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 15,
        paddingHorizontal: 20,
        marginBottom: height <= 600 ? 150 : 120,
    }
})