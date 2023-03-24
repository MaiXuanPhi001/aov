import { ItemHistoryDeposit } from "@interface/deposite";
import { RootState } from "../store";

export const loadingDepositeSelector = (state: RootState) =>  state.deposite.loading

export const bankingDepositeSelector = (state: RootState) => state.deposite.banking

export const depositeSelector = (state: RootState) => state.deposite

export const stepDepositeSelector = (state: RootState) => state.deposite.step 

export const transferInfoDepositSelector = (state: RootState) => state.deposite.transferInfo

export const totalDepositSelector = (state: RootState) => state.deposite.total

export const pageDepositSelector = (state: RootState) => state.deposite.page

export const historyDepositSelector = (state: RootState) => state.deposite.history