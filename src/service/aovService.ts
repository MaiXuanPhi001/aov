import { Order, ReqGetChartLotery } from "@interface/winGo"
import { callFailed, callSuccess } from "@method/requestResult"
import axiosInstance from "./axios"

export const orderAov = async (data: Order) => {
    try {
        const res = await axiosInstance.post('/api/lotery/orderAov', data)
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}

export const getAovLotery = async (data: ReqGetChartLotery) => {
    try {
        const res = await axiosInstance.post('/api/lotery/getAovLotery', data)
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}