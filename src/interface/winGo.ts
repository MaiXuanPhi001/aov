export interface Order {
    time: number,
    amount: string,
    balance: string,
    order: string,
    type: number,
    api: string
}

export interface ReqGetChartLotery {
    time: number,
    limit: number,
    page: number,
}

export interface ReqHistoryOrder {
    limit : number,
    page : number,
    time : number,
}

export interface DataHistoryOrder {
    id: number,
    idChartLottery: number,
    amount: number,
    balance: number,
    fee: number,
    order: string,
    status: string,
    type: number,
    profit: number,
    created_at: string,
    userid: number,
    email: string,
    idLottery: number,
    time: number,
    marketing: number,
    username: string,
}