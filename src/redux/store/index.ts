import { configureStore } from "@reduxjs/toolkit"
import aovSlice from "@slice/aovSlice"
import depositSlice from "@slice/depositSlice"
import marketingSlice from "@slice/marketingSlice"
import userSlice from "@slice/userSlice"
import wingoSlice from "@slice/wingoSlice"
import withdrawSlice from "@slice/withdrawSlice"

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        aov: aovSlice.reducer,
        wingo: wingoSlice.reducer,
        withdraw: withdrawSlice.reducer,
        deposite: depositSlice.reducer,
        marketing: marketingSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store