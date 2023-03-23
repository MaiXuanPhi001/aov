export interface GetBanking {
    id: number,
    name_banking: string,
    number_banking: string,
    created_at: string,
    owner_banking: string,
    image: string,
}

export interface DataCheckTransactionDepositVnd {
    id?: number,
    bank_name?: string,
    amount?: number,
    created_at?: string,
    note?: null | string,
    type_admin?: number,
    type_user?: number,
    percent?: number,
    id_banking_admin?: number,
    userid?: number,
    images?: null | string,
    code_unique?: string,
    email?: string,
    name_banking_admin?: string,
    number_banking_admin?: string,
    owner_banking_admin?: string,
}

export interface ReqCreateDepositVND {
    amount: number,
    idBanking: number | undefined,
    message: string,
}

export interface ReqHistoryDepositVnd {
    limit: number;
    page: number;
}

export interface ItemHistoryDeposit {
    id: number,
    bank_name: string,
    amount: number,
    created_at: string,
    note: string,
    type_admin: number,
    type_user: number,
    percent: number,
    id_banking_admin: number,
    userid: number,
    images: string,
    code_unique: string,
    email: string,
    image: string,
}