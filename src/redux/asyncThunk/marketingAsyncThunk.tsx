import { ReqHistoryCommission } from "@interface/marketing";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { historyCommission } from "@service/marketingService";

export const historyCommissionThunk =
    createAsyncThunk('marketing/historyCommission', async (data: ReqHistoryCommission) => {
        const res = await historyCommission(data)
        return {...res, page: data.page}
    })