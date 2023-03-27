import { Order, ReqGetChartLotery } from "@interface/winGo"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { getAovLotery, orderAov } from "@service/aovService"

export const orderAovThunk = createAsyncThunk('aov/orderAov', async (data: Order) => {
    const res = await orderAov(data)
    return res
})

export const getAovLoteryThunk = createAsyncThunk('aov/getChartLotery', async (data: ReqGetChartLotery) => {
    const res = await getAovLotery(data)
    return {...res, page: data.page}
})