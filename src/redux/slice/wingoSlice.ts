import { getChartLoteryThunk, historyOrderThunk, orderWinGoThunk } from "@asyncThunk/winGoAsyncThunk";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";

const wingoSlice = createSlice({
    name: 'wingo',
    initialState: {
        loading: false,
        timeLimit: 1,
        timeType: 'TIME',
        time: 0,
        color: {
            left: '',
            right: '',
        },
        choose: '',
        order: '',
        type: '',
        loadingStatistical: false,
        gameHistory: {
            total: 0,
            indexPage: 0,
            data: [],
        },
        historyOrder: {
            total: 0,
            indexPage: 0,
            data: [],
            detail: {},
            showModalDetail: false,
        },
    },
    reducers: {
        setTimeLimit: (state, action) => {
            state.timeLimit = action.payload.number
            state.timeType = action.payload.timeType
        },
        setTime: (state, action) => {
            state.time = action.payload
        },
        order: (state, action) => {
            state.color = action.payload.color
            state.choose = action.payload.choose
            state.order = action.payload.order
            state.type = action.payload.type
        },
        setHistoryDetail: (state, action) => {
            state.historyOrder.detail = action.payload
            state.historyOrder.showModalDetail = true
        },
        setShowModalDetail: (state, action) => {
            state.historyOrder.showModalDetail = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(orderWinGoThunk.fulfilled, (state) => {
                state.loading = false
            })
            .addCase(getChartLoteryThunk.fulfilled, (state, { payload }) => {
                state.loadingStatistical = false
                if (payload.status) {
                    state.gameHistory.data = payload.data.array
                    state.gameHistory.total = payload.data.total
                    state.gameHistory.indexPage = payload.page
                }
            })
            .addCase(historyOrderThunk.fulfilled, (state, { payload }) => {
                state.loadingStatistical = false
                if (payload.status) {
                    state.historyOrder.data = payload.data.array
                    state.historyOrder.total = payload.data.total
                    state.historyOrder.indexPage = payload.page
                }
            })
            .addMatcher(isAnyOf(
                getChartLoteryThunk.pending,
                historyOrderThunk.pending,
            ), (state) => {
                state.loadingStatistical = true
            })
            .addMatcher(isAnyOf(
                orderWinGoThunk.pending,
            ), (state) => {
                state.loading = true
            })
    }
})

export default wingoSlice