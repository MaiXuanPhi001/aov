import { getProfileThunk, loginThunk } from "@asyncThunk/userAsyncThunk";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLogin: false,
        profile: {},
        loading: false,
    },
    reducers: {
        signOut: (state) => {
            state.profile = {}
            state.isLogin = false
        }
    },
    extraReducers: builder => {
        builder
            .addMatcher(isAnyOf(loginThunk.fulfilled, getProfileThunk.fulfilled), (state, action) => {
                state.loading = false
                if (action.payload.status) {
                    state.isLogin = true
                    state.profile = action.payload.data
                }
            })
            .addMatcher(isAnyOf(loginThunk.pending, getProfileThunk.pending), (state, action) => {
                state.loading = true
            })
    }
})

export default userSlice