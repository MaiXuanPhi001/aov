export interface Login {
    email: string,
    password: string,
}

export interface SignUp {
    email: string,
    password: string,
    referral: string,
}

export interface Profile {
    id: number,
    userName: string,
    email: string,
    balance: number,
    numberWithdraw: number,
    level: number,
    commissionBalance: number,
    commissionTeam: number,
    revenueTeam: number,
    rechargeTeam: number,
    referral: string,
}

export interface ChangePassword {
    password: string,
    newPassword: string,
}