import { Login } from "@interface/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile, login } from "@service/userService";
import contants from "@util/contants";

export const loginThunk = createAsyncThunk('user/login', async (data: Login) => {
    const res = await login(data)
    if (!res.error && res.status) {
        // console.log(res.data.token)
        await AsyncStorage.setItem(contants.TOKEN, res.data.token)
        const response = await getProfile()
        return response
    }
    return res
})

export const getProfileThunk = createAsyncThunk('user/getProfile', async () => {
    const res = await getProfile()
    return res
})