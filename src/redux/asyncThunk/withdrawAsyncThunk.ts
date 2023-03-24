import { ItemHistoryWithdraw, ReqHisToryWithdraw } from "@interface/withdraw";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getHistoryWithdraw } from "@service/withdrawService";
import { banking } from "@util/banking";

export const getHistoryWithdrawThunk =
    createAsyncThunk('withdraw/getHistoryWithdraw', async (data: ReqHisToryWithdraw) => {
        const res = await getHistoryWithdraw(data)
        let history: ItemHistoryWithdraw[] = []
        if (res.status) {
            for (let index = 0; index < res.data.array.length; index++) {
                for (let position = 0; position < banking.length; position++) {
                    if (res.data.array[index].nameBanking === banking[position].name) {
                        history.push({...res.data.array[index], image: banking[position].image})
                        break
                    }
                }
            }
        }
        
        return {
            ...res, 
            page: data.page,
            data: {
                ...res.data,
                array: history,
            }
        }
    })