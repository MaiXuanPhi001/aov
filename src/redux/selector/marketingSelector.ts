import { RootState } from "../store";

export const loadingStatisticalMarketingSelector = (state: RootState) => state.marketing.statistical.loading 

export const statisticalMarketingSelector = (state: RootState) => state.marketing.statistical

export const dateChooseStatisticalMarketingSelector = (state: RootState) => state.marketing.statistical.dateChoose

export const markedDatesStatisticalMarketingSelector= (state: RootState) => state.marketing.statistical.markedDates

export const historyStatisticalMarketingSelector = (state: RootState) => state.marketing.statistical.history

export const totalStatisticalMarketingSelector = (state: RootState) => state.marketing.statistical.total 

export const pageStatisticalMarketingSelector = (state: RootState) => state.marketing.statistical.page

export const totalAmountStatisticalMarketingSelector = (state: RootState) => state.marketing.statistical.totalAmount

export const totalAmountReceiveStatisticalMarketingSelector = (state: RootState) => state.marketing.statistical.totalAmountReceive 

