import { historyCommissionThunk } from "@asyncThunk/marketingAsyncThunk";
import { ItemHistoryCommission } from "@interface/marketing";
import { createSlice } from "@reduxjs/toolkit";

interface MarketingSlice {
    statistical: {
        loading: boolean,
        dateChoose: string,
        markedDates: any,
        history: ItemHistoryCommission[],
        total: number,
        page: number,
        totalAmount: number,
        totalAmountReceive: number,
    }
}

const initialState: MarketingSlice = {
    statistical: {
        loading: false,
        dateChoose: '',
        markedDates: {},
        history: [],
        total: 0,
        page: 1,
        totalAmount: 0,
        totalAmountReceive: 0,
    }
}

const marketingSlice = createSlice({
    name: 'marketing',
    initialState,
    reducers: {
        setDateChoose: (state, action) => {
            state.statistical.dateChoose = action.payload
            state.statistical.markedDates = { [action.payload]: { selected: true, selectedColor: '#40BFFF' } }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(historyCommissionThunk.fulfilled, (state, { payload }) => {
                state.statistical.loading = false
                if (payload.status) {
                    state.statistical.history = payload.data.array
                    state.statistical.total = payload.data.total
                    state.statistical.page = payload.page
                    state.statistical.totalAmount = payload.data.totalAmount
                    state.statistical.totalAmountReceive = payload.data.totalAmountReceive
                }
            })
            .addCase(historyCommissionThunk.pending, (state) => {
                state.statistical.loading = true
            })
    }
})

export default marketingSlice