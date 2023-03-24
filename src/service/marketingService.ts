import { ReqGetListUserF1, ReqHistoryCommission, ReqHistoryCommissionTransfer } from "@interface/marketing"
import { callFailed, callSuccess } from "@method/requestResult"
import axiosInstance from "./axios"

export const historyCommissionTransfer = async (data: ReqHistoryCommissionTransfer) => {
    try {
        const res = await axiosInstance.post('/api/lotery/historyCommissionTransfer', data)
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}

export const getParent = async (userid: number) => {
    try {
        const res = await axiosInstance.post('/api/user/getParent', { userid })
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}

export const getParentToLevel = async (level: number) => {
    try {
        const res = await axiosInstance.post('/api/lotery/getParentToLevel', { level })
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}

export const getListUserF1 = async (data: ReqGetListUserF1) => {
    try {
        const res = await axiosInstance.post('/api/lotery/getListUserF1', data)
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}

export const historyCommission = async (data: ReqHistoryCommission) => {
    try {
        const res = await axiosInstance.post('/api/lotery/historyCommission', data)
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}