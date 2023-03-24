export const callSuccess = (res: any) => {
    return { ...res, error: false }
}

export const callFailed = () => {
    return {
        error: true,
        status: false,
        message: 'Không thể kết nối với server, vui lòng thử lại!'
    }
}