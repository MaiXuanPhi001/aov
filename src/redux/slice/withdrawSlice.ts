import { getHistoryWithdrawThunk } from "@asyncThunk/withdrawAsyncThunk";
import { ItemHistoryWithdraw } from "@interface/withdraw";
import { createSlice } from "@reduxjs/toolkit";

export interface WithdrawSlice {
    history: ItemHistoryWithdraw[],
    loading: boolean,
    total: number,
    page: number,
}

const initialState: WithdrawSlice = {
    history: [],
    loading: false,
    total: 0,
    page: 1,
}

const withdrawSlice = createSlice({
    name: 'withdraw',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getHistoryWithdrawThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(getHistoryWithdrawThunk.fulfilled, (state, { payload }) => {
                state.loading = false
                if (payload.status) {
                    state.history = payload.data.array
                    state.total = payload.data.total
                    state.page = payload.page
                }
            })
    }
})

export default withdrawSlice