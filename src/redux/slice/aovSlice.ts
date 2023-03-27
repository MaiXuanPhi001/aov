import { getAovLoteryThunk, orderAovThunk } from "@asyncThunk/aovAsyncThunk";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { ImageSourcePropType } from "react-native/types";

interface InitialState {
    loading: boolean,
    timeLimit: number,
    timeType: string,
    time: number,
    image: ImageSourcePropType,
    order: string,
    type: string,
    loadingStatistical: boolean,
    gameHistory: {
        total: number,
        indexPage: number,
        data: [],
    },
    historyOrder: {
        total: number,
        indexPage: number,
        data: [],
        detail: {},
        showModalDetail: boolean,
    },
}

const initialState: InitialState = {
    loading: false,
    timeLimit: 1,
    timeType: 'TIME',
    time: 0,
    image: require('@images/aov/nhanvat0.png'),
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
}

const aovSlice = createSlice({
    name: 'aov',
    initialState,
    reducers: {
        setTimeLimit: (state, action) => {
            state.timeLimit = action.payload.number
            state.timeType = action.payload.timeType
        },
        setTime: (state, action) => {
            state.time = action.payload
        },
        order: (state, action) => {
            state.image = action.payload.image
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
            .addCase(orderAovThunk.fulfilled, (state) => {
                state.loading = false
            })
            .addCase(getAovLoteryThunk.fulfilled, (state, { payload }) => {
                state.loadingStatistical = false
                if (payload.status) {
                    state.gameHistory.data = payload.data.array
                    state.gameHistory.total = payload.data.total
                    state.gameHistory.indexPage = payload.page
                }
            })
            .addMatcher(isAnyOf(
                getAovLoteryThunk.pending,
            ), (state) => {
                state.loadingStatistical = true
            })
            .addMatcher(isAnyOf(
                orderAovThunk.pending,
            ), (state) => {
                state.loading = true
            })
    }
})

export default aovSlice