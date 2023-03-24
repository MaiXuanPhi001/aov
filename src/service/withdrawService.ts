import { callFailed, callSuccess } from "@method/requestResult"
import axiosInstance from "./axios"
import { ReqAddBankingUser, ReqHisToryWithdraw } from "@interface/withdraw"

export const getBankingUser = async () => {
    try {
        const res = await axiosInstance.post('/api/depositVND/getBankingUser', {})
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}

export const addBankingUser = async (data: ReqAddBankingUser) => {
    try {
        const res = await axiosInstance.post('/api/depositVND/addListBanking', data)
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}

export const withdrawVND = async (amount: number) => {
    try {
        const res = await axiosInstance.post('/api/depositVND/widthdrawVND', { amount })
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}

export const getHistoryWithdraw = async (data: ReqHisToryWithdraw) => {
    try {
        const res = await axiosInstance.post('/api/depositVND/getHistoryWidthdraw', data)
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}