export interface Banking {
    id: number,
    userid: number,
    created_at: string,
    owner_banking: string,
    name_banking: string,
    number_banking: number,
}

export interface ReqAddBankingUser {
    owner_banking: string,
    name_banking: string,
    number_banking: number,
}

export interface ItemHistoryWithdraw {
    id: number,
    userid: number,
    userName: string | null,
    amount: number,
    cost: number,
    feeWidthdraw: number,
    ownerBanking: string,
    nameBanking: string,
    numberBanking: string,
    created_at: string,
    email: string,
    type: number,
    image?: string,
}

export interface ReqHisToryWithdraw {
    limit : number,
    page : number,
}