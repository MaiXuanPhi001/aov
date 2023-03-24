import { RootState } from "../store";

export const timeLimitWinGoSelector = (state: RootState) => state.wingo.timeLimit

export const timeWinGoSelector = (state: RootState) => state.wingo.time

export const timeTypeWinGoSelector = (state: RootState) => state.wingo.timeType

export const colorWinGoSelector = (state: RootState) => state.wingo.color

export const chooseWinGoSelector = (state: RootState) => state.wingo.choose

export const loadingWinGoSelector = (state: RootState) => state.wingo.loading

export const orderWinGoSelector = (state: RootState) => state.wingo.order 

export const typeWinGoSelector = (state: RootState) => state.wingo.type

export const loadingStatisticalWinGoSelector = (state: RootState) => state.wingo.loadingStatistical

export const gameHistoryWinGoSelector = (state: RootState) => state.wingo.gameHistory

export const historyOrderWinGoSelector = (state: RootState) => state.wingo.historyOrder