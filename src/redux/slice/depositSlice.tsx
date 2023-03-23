import { cancelTransactionDepositVndThunk, checkTransactionDepositVndThunk, createDepositVNDThunk, getBankingThunk, historyDepositVndThunk, uploadImageDeposiVNDThunk, verifyTransactionDepositVndThunk } from "@asyncThunk/depositeAsyncThunk";
import { DataCheckTransactionDepositVnd, GetBanking, ItemHistoryDeposit } from "@interface/deposite";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";

export const STEP = {
    TRANSFER: 'transfer',
    CONFIRM_TRANSFER: 'confirmTransfer',
    SUMMIT_IMG: 'summitImg',
    DONE: 'done',
}

interface DepositSlice {
    loading: boolean,
    banking: GetBanking[],
    step: string,
    transferInfo: DataCheckTransactionDepositVnd,
    history: ItemHistoryDeposit[] | any,
    total: number,
    page: number,
}

const initialState: DepositSlice = {
    loading: false,
    banking: [],
    step: STEP.TRANSFER,
    transferInfo: {},
    history: [],
    total: 0,
    page: 1,
}

const depositSlice = createSlice({
    name: 'deposit',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getBankingThunk.fulfilled, (state, { payload }) => {
                state.loading = false
                if (payload.status) {
                    state.banking = payload.data
                }
            })
            .addCase(checkTransactionDepositVndThunk.fulfilled, (state, { payload }) => {
                if (!payload.error) {
                    state.transferInfo = payload.data
                    state.step = payload.step
                }
            })
            .addCase(createDepositVNDThunk.fulfilled, (state, { payload }) => {
                state.loading = false
                if (payload.status) {
                    state.step = payload.step
                }
            })
            .addCase(historyDepositVndThunk.fulfilled, (state, { payload }) => {
                state.loading = false
                if (payload.status) {
                    state.history = payload.data.array
                    state.page = payload.page
                    state.total = payload.data.total
                }
            })
            .addMatcher(isAnyOf(
                cancelTransactionDepositVndThunk.fulfilled,
                verifyTransactionDepositVndThunk.fulfilled,
                uploadImageDeposiVNDThunk.fulfilled,
            ), (state, { payload }) => {
                state.loading = false
                if (payload.status) {
                    state.step = STEP.TRANSFER
                }
            })
            .addMatcher(isAnyOf(
                getBankingThunk.pending,
                createDepositVNDThunk.pending,
                cancelTransactionDepositVndThunk.pending,
                verifyTransactionDepositVndThunk.pending,
                uploadImageDeposiVNDThunk.pending,
                historyDepositVndThunk.pending,
            ), (state) => {
                state.loading = true
            })
    }
})

export default depositSlice