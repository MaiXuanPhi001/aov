import { ItemHistoryDeposit, ReqCreateDepositVND, ReqHistoryDepositVnd } from "@interface/deposite";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { cancelTransactionDepositVnd, checkTransactionDepositVnd, getBanking, createDepositVND, verifyTransactionDepositVnd, uploadImageDeposiVND, historyDepositVnd } from "@service/depositeService";
import { STEP } from "@slice/depositSlice";
import { banking } from "@util/banking";

export const getBankingThunk =
    createAsyncThunk('deposite/getBanking', async () => {
        const res = await getBanking()
        let data = []
        if (res.status) {
            for (let index = 0; index < res.data.length; index++) {
                for (let position = 0; position < banking.length; position++) {
                    if (res.data[index].name_banking === banking[position].name) {
                        data.push({ ...res.data[index], image: banking[position].image })
                        break
                    }
                }
            }
        }
        return { ...res, data }
    })

export const checkTransactionDepositVndThunk =
    createAsyncThunk('deposite/checkTransactionDepositVnd', async () => {
        const res = await checkTransactionDepositVnd()
        if (!res.error) {
            if (res.status) {
                if (res.data.type_admin == 0 && res.data.type_user == 0) {
                    return { ...res, step: STEP.CONFIRM_TRANSFER, data: res.data }
                } else if (res.data.type_admin == 2 && res.data.type_user == 0) {
                    if (res.data.images) {
                        return { ...res, step: STEP.DONE, data: res.data }
                    } else {
                        return { ...res, step: STEP.SUMMIT_IMG, data: res.data }
                    }
                }
            } else {
                return { ...res, step: STEP.TRANSFER, data: {} }
            }
        }
        return { ...res, step: STEP.TRANSFER, data: {} }
    })

export const createDepositVNDThunk =
    createAsyncThunk('deposite/createDepositVND', async (data: ReqCreateDepositVND) => {
        const res = await createDepositVND(data)
        return res
    })

export const cancelTransactionDepositVndThunk =
    createAsyncThunk('deposite/cancelTransactionDepositVnd', async (idTransaction: string) => {
        const res = await cancelTransactionDepositVnd(idTransaction)
        return res
    })

export const verifyTransactionDepositVndThunk =
    createAsyncThunk('deposite/verifyTransactionDepositVnd', async (idTransaction: string) => {
        const res = await verifyTransactionDepositVnd(idTransaction)
        return res
    })

export const uploadImageDeposiVNDThunk =
    createAsyncThunk('deposite/uploadImageDeposiVND', async (formData: FormData) => {
        const res = await uploadImageDeposiVND(formData)
        return res
    })

export const historyDepositVndThunk =
    createAsyncThunk('deposite/historyDepositVnd', async (data: ReqHistoryDepositVnd) => {
        const res = await historyDepositVnd(data)
        let history: ItemHistoryDeposit[] = []
        if (res.status) {
            for (let index = 0; index < res.data.array.length; index++) {
                for (let position = 0; position < banking.length; position++) {
                    if (res.data.array[index].bank_name === banking[position].name) {
                        history.push({...res.data.array[index], image: banking[position].image})
                        break
                    }
                }
            }
        }
        
        return {
            ...res, 
            page: data.page,
            data: {
                ...res.data,
                array: history,
            }
        }
    })

