import { RootState } from "../store";

export const isLoginSelector = (state: RootState) => state.user.isLogin

export const profileSelector = (state: RootState) => state.user.profile

export const loadingUserSelector = (state: RootState) => state.user.loading