export interface Revenue {
    level: number,
    people: number,
    teamRevenue: string,
    teamDeposit: string,
}

export const revenues: Revenue[] = [
    {
        level: 0,
        people: 0,
        teamRevenue: '0',
        teamDeposit: '0',
    },
    {
        level: 1,
        people: 10,
        teamRevenue: '500,000,000',
        teamDeposit: '50,000,000',
    },
    {
        level: 2,
        people: 15,
        teamRevenue: '750,000,000',
        teamDeposit: '75,000,000',
    },
    {
        level: 3,
        people: 30,
        teamRevenue: '1,000,000,000',
        teamDeposit: '100,000,000',
    },
    {
        level: 4,
        people: 45,
        teamRevenue: '1,250,000,000',
        teamDeposit: '125,000,000',
    },
    {
        level: 5,
        people: 50,
        teamRevenue: '1,500,000,000',
        teamDeposit: '150,000,000',
    },
    {
        level: 6,
        people: 60,
        teamRevenue: '2,500,000,000',
        teamDeposit: '250,000,000',
    },
]

export interface Commission {
    level: number,
    level1: number,
    level2: number,
    level3: number,
    level4: number,
}

export const commissions: Commission[] = [
    {
        level: 0,
        level1: 1.2,
        level2: 0.36,
        level3: 0.108,
        level4: 0.0324,
    },
    {
        level: 1,
        level1: 1.4,
        level2: 0.42,
        level3: 0.126,
        level4: 0.0378,
    },
    {
        level: 2,
        level1: 1.5,
        level2: 0.45,
        level3: 0.135,
        level4: 0.0405,
    },
    {
        level: 3,
        level1: 1.6,
        level2: 0.48,
        level3: 0.144,
        level4: 0.0432,
    },
    {
        level: 4,
        level1: 1.7,
        level2: 0.51,
        level3: 0.153,
        level4: 0.0459,
    },
    {
        level: 5,
        level1: 1.8,
        level2: 0.54,
        level3: 0.162,
        level4: 0.0486,
    },
    {
        level: 6,
        level1: 2,
        level2: 0.6,
        level3: 0.18,
        level4: 0.054,
    },
]