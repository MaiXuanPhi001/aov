import { Order, ReqGetChartLotery, ReqHistoryOrder } from "@interface/winGo"
import { callFailed, callSuccess } from "@method/requestResult"
import axiosInstance from "./axios"

export const orderWinGo = async (data: Order) => {
    try {
        const res = await axiosInstance.post('/api/lotery/order', data)
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}

export const getChartLotery = async (data: ReqGetChartLotery) => {
    try {
        const res = await axiosInstance.post('/api/lotery/getChartLotery', data)
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}

export const historyOrder = async (data: ReqHistoryOrder) => {
    try {
        const res = await axiosInstance.post('/api/lotery/historyOrder', data)
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}

