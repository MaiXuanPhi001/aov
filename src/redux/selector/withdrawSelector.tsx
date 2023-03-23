import { WithdrawSlice } from "@slice/withdrawSlice";
import { RootState } from "../store";

export const withdrawSelector = (state: RootState): WithdrawSlice => state.withdraw

export const loadingWithdrawSelector = (state: RootState): boolean => state.withdraw.loading

export const totalWithdrawSelector = (state: RootState): number => state.withdraw.total

export const pageWithdrawSelector = (state: RootState): number => state.withdraw.page 