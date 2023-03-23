import React from 'react'
import Box from '@commom/Box'
import { TAB } from '.'
import ItemTab from './ItemTab'

interface Data {
    titleTop: string,
    titleDown: string,
    value: string,
}

interface Props {
    tab: string,
    setTab: any,
}

const HeaderTab = ({ tab, setTab }: Props) => {
    const data: Data[] = [
        {
            titleTop: 'TỔNG',
            titleDown: 'QUANG',
            value: TAB.OVERVIEW,
        },
        {
            titleTop: 'LỊCH SỬ',
            titleDown: 'NHẬN',
            value: TAB.HISTORY
        },
        {
            titleTop: 'THỐNG KÊ',
            titleDown: 'HOA HỒNG',
            value: TAB.STATISTICAL
        },
        {
            titleTop: 'ĐỘI',
            titleDown: 'CỦA TÔI',
            value: TAB.TEAM
        },
        {
            titleTop: 'HƯỚNG',
            titleDown: 'DẪN',
            value: TAB.TUTORIAL
        },
    ]

    return (
        <Box
            row
            justifySpaceAround
            alignCenter
            backgroundColor={'#f4f4f6'}
            height={50}
        >
            {data.map((item: Data) =>
                <ItemTab
                    key={item.titleTop}
                    item={item}
                    tab={tab}
                    setTab={setTab}
                />
            )}
        </Box>
    )
}

export default HeaderTab