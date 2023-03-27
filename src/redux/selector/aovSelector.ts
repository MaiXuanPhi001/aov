import { RootState } from "../store";

export const timeLimitAovSelector = (state: RootState) => state.aov.timeLimit

export const timeAovSelector = (state: RootState) => state.aov.time

export const timeTypeAovSelector = (state: RootState) => state.aov.timeType

export const imageAovSelector = (state: RootState) => state.aov.image

export const loadingAovSelector = (state: RootState) => state.aov.loading

export const orderAovSelector = (state: RootState) => state.aov.order 

export const typeAovSelector = (state: RootState) => state.aov.type

export const loadingStatisticalAovSelector = (state: RootState) => state.aov.loadingStatistical

export const gameHistoryAovSelector = (state: RootState) => state.aov.gameHistory

export const historyOrderAovSelector = (state: RootState) => state.aov.historyOrder