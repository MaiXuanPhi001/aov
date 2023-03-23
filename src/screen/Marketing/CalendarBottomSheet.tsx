import React, { useState } from 'react'
import BottomSheet from '@reuse/BottomSheet'
import { height } from '@util/responsive'
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import { markedDatesStatisticalMarketingSelector } from '@selector/marketingSelector';
import marketingSlice from '@slice/marketingSlice';
import { getToDayYMD } from '@method/date';

LocaleConfig.locales['fr'] = {
    monthNames: [
        'Tháng một',
        'Tháng hai',
        'Tháng ba',
        'Tháng tư',
        'Tháng năm',
        'Tháng sáu',
        'Tháng bảy',
        'Tháng tám',
        'Tháng chín',
        'Tháng mười',
        'Tháng mười một',
        'Tháng mười hai'
    ],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
    today: "Aujourd'hui"
};
LocaleConfig.defaultLocale = 'fr';

const CalendarBottomSheet = ({ bottomSheetRef }: any) => {
    const dispatch = useAppDispatch()
    const markedDate = useAppSelector(markedDatesStatisticalMarketingSelector)

    return (
        <BottomSheet
            activeHeight={height * 0.6}
            activeHeightFocus={height * 0.8}
            backgroundColor={'white'}
            backDropColor={'black'}
            ref={bottomSheetRef}
        >
            <Calendar
                onDayPress={day => {
                    dispatch(marketingSlice.actions.setDateChoose(day.dateString))
                }}
                markedDates={markedDate}
                maxDate={getToDayYMD()}
            />
        </BottomSheet>
    )
}

export default CalendarBottomSheet