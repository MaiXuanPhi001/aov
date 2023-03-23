import { Order, ReqGetChartLotery, ReqHistoryOrder } from "@interface/winGo";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getChartLotery, historyOrder, orderWinGo } from "@service/winGoService";

export const orderWinGoThunk = createAsyncThunk('wingo/orderWinGo', async (data: Order) => {
    const res = await orderWinGo(data)
    return res
})

export const getChartLoteryThunk = createAsyncThunk('wingo/getChartLotery', async (data: ReqGetChartLotery) => {
    const res = await getChartLotery(data)
    return {...res, page: data.page}
})

export const historyOrderThunk = createAsyncThunk('wingo/historyOrder', async (data: ReqHistoryOrder) => {
    const res = await historyOrder(data)
    return {...res, page: data.page}
})