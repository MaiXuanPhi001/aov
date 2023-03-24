export interface ReqHistoryCommissionTransfer {
    limit: number,
    page: number,
}

export interface DataGetparent {
    data: ItemGetParent[],
    profile: {
        userName: string,
        email: string,
    }
}

export interface ItemGetParent {
    id: number,
    userName: string,
    email: string,
    referral: string,
    parentId: number,
    userNameParent: any,
    active: number,
    created_at: string,
    block: number,
    secret: any,
    twofa: number,
    balance: number,
    level: number,
    commissionBalance: number,
    commissionTeam: number,
    marketing: number,
    totalOrder: number,
    revenueTeam: number,
    rechargeTeam: number,
    numberWithdraw: number,
    array?: ItemGetParent[],
}

export interface ReqGetListUserF1 {
    limit: number,
    page: number,
}

export interface ItemHistoryCommission {
    id: number,
    userid: number,
    userName: string
    parentId: number,
    parentUserName: string,
    level: number,
    amount: number,
    amountReceive: number,
    created_at: string,
    percent: number,
    percentF: number,
    email: string,
}

export interface ReqHistoryCommission {
    limit: number,
    page: number,
    timeStart: number,
    timeEnd: number,
}