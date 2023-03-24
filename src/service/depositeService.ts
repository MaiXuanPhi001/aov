import { ReqCreateDepositVND, ReqHistoryDepositVnd } from "@interface/deposite"
import { callFailed, callSuccess } from "@method/requestResult"
import axiosInstance from "./axios"
import axiosUpload from "./axiosUpload"

export const getBanking = async () => {
    try {
        const res = await axiosInstance.post('/api/depositVND/getBanking', {})
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}

export const checkTransactionDepositVnd = async () => {
    try {
        const res = await axiosInstance.post('/api/depositVND/checkTransactionDepositVnd')
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}

export const createDepositVND = async (data: ReqCreateDepositVND) => {
    try {
        const res = await axiosInstance.post('/api/depositVND/createDepositVND', data)
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}

export const cancelTransactionDepositVnd = async (idTransaction: string) => {
    try {
        const res = await axiosInstance.post('/api/depositVND/cancelTransactionDepositVnd', { idTransaction })
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}

export const verifyTransactionDepositVnd = async (idTransaction: string) => {
    try {
        const res = await axiosInstance.post('/api/depositVND/verifyTransactionDepositVnd', { idTransaction })
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}

export const uploadImageDeposiVND = async (formData: FormData) => {
    try {
        const res = await axiosUpload.post('/api/depositVND/uploadImageDeposiVND', formData)
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}

export const historyDepositVnd = async (data: ReqHistoryDepositVnd) => {
    try {
        const res = await axiosInstance.post('/api/depositVND/historyDepositVnd', data)
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}