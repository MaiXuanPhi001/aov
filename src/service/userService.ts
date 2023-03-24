import { ChangePassword, Login, SignUp } from "@interface/user"
import { callFailed, callSuccess } from "@method/requestResult"
import axiosInstance from "./axios"

export const login = async (data: Login) => {
    try {
        const res = await axiosInstance.post('/api/user/login', data)
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}

export const getProfile = async () => {
    try {
        const res = await axiosInstance.post('/api/user/getProfile')
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}

export const signUp = async (data: SignUp) => {
    try {
        const res = await axiosInstance.post('/api/user/signup', data)
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}

export const sendmailforgetpassword = async (email: string) => {
    try {
        const res = await axiosInstance.post('/api/user/sendmailforgetpassword', { email })
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}

export const changeUserName = async (userNameNew: string) => {
    try {
        const res = await axiosInstance.post('/api/user/changeUserName', { userNameNew })
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}

export const changePassword = async (data: ChangePassword) => {
    try {
        const res = await axiosInstance.post('/api/user/changePassword', data)
        return callSuccess(res)
    } catch (error) {
        return callFailed()
    }
}