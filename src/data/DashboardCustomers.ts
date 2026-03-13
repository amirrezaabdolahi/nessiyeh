

type statusType = "active" | "overdue" | "settled"


export type CustomerType = {
    id: number,
    username: string,
    phone: string,
    totalCredit: number,
    paid: number,
    status: statusType,
    lastPayment: string
}

export interface CustomerPayedType {
    id: string,
    amount: number,
    paid: number
    date: string,
    status: statusType
}


export const Customers: Array<CustomerType> = [
    {
        id: 1,
        username: "علیرضا",
        phone: "09225621256",
        totalCredit: 30_000_000,
        paid: 12_000_000,
        status: "active",
        lastPayment: "12 اردیبهشت"
    },
    {
        id: 2,
        username: "مریم حسینی",
        phone: "09225621256",
        totalCredit: 10_000_000,
        paid: 5_000_000,
        status: "active",
        lastPayment: "13 اردیبهشت"
    },
    {
        id: 3,
        username: "رضا کریمی",
        phone: "09225621256",
        totalCredit: 6_000_000,
        paid: 0,
        status: "overdue",
        lastPayment: "16 اردیبهشت"
    },
    {
        id: 4,
        username: "فاطمه احمدی",
        phone: "09225621256",
        totalCredit: 60_000_000,
        paid: 59_000_000,
        status: "active",
        lastPayment: "12 اردیبهشت"
    },
    {
        id: 5,
        username: "حسن مرادی",
        phone: "09225621256",
        totalCredit: 2_000_000,
        paid: 2_000_000,
        status: "settled",
        lastPayment: "12 اردیبهشت"
    },
    {
        id: 6,
        username: "کامران تهرانی",
        phone: "09225621256",
        totalCredit: 11_000_000,
        paid: 3_000_000,
        status: "active",
        lastPayment: "12 اردیبهشت"
    },
    {
        id: 7,
        username: "کامران تهرانی",
        phone: "09225621256",
        totalCredit: 11_000_000,
        paid: 3_000_000,
        status: "active",
        lastPayment: "12 اردیبهشت"
    },
    {
        id: 8,
        username: "کامران تهرانی",
        phone: "09225621256",
        totalCredit: 11_000_000,
        paid: 3_000_000,
        status: "active",
        lastPayment: "12 اردیبهشت"
    },
]

export const CustomersBranchName: Array<string> = [
    "مشتری", "شماره", "جمع حساب", "پرداخت شده", "باقیمانده", "شرایط", "آخرین پرداخت", "",
]


export const CustomersPayments: Record<number, CustomerPayedType[]> = {
    1: [ // علیرضا
        { id: "101", amount: 4_000_000, paid: 4_000_000, date: "12 اردیبهشت", status: "active" },
        { id: "102", amount: 4_000_000, paid: 4_000_000, date: "10 اردیبهشت", status: "active" },
        { id: "103", amount: 4_000_000, paid: 4_000_000, date: "1 اردیبهشت", status: "active" },
    ],
    2: [ // مریم حسینی
        { id: "201", amount: 2_500_000, paid: 2_500_000, date: "13 اردیبهشت", status: "active" },
        { id: "202", amount: 2_500_000, paid: 2_500_000, date: "5 اردیبهشت", status: "active" },
    ],
    3: [], // رضا کریمی (هنوز پرداختی نداشته)
    4: [ // فاطمه احمدی
        { id: "401", amount: 10_000_000, paid: 10_000_000, date: "12 اردیبهشت", status: "active" },
        { id: "402", amount: 10_000_000, paid: 10_000_000, date: "1 اردیبهشت", status: "active" },
        { id: "403", amount: 10_000_000, paid: 10_000_000, date: "20 فروردین", status: "active" },
        { id: "404", amount: 10_000_000, paid: 10_000_000, date: "10 فروردین", status: "active" },
        { id: "405", amount: 10_000_000, paid: 10_000_000, date: "1 فروردین", status: "active" },
        { id: "406", amount: 9_000_000, paid: 9_000_000, date: "20 اسفند", status: "active" },
    ],
    5: [ // حسن مرادی (تسویه شده)
        { id: "501", amount: 1_000_000, paid: 1_000_000, date: "12 اردیبهشت", status: "settled" },
        { id: "502", amount: 1_000_000, paid: 1_000_000, date: "1 اردیبهشت", status: "settled" },
    ],
    6: [ // کامران تهرانی (شعبه ۶)
        { id: "601", amount: 1_500_000, paid: 1_500_000, date: "12 اردیبهشت", status: "active" },
        { id: "602", amount: 1_500_000, paid: 1_500_000, date: "5 اردیبهشت", status: "active" },
    ],
    7: [ // کامران تهرانی (شعبه ۷)
        { id: "701", amount: 1_500_000, paid: 1_500_000, date: "12 اردیبهشت", status: "active" },
        { id: "702", amount: 1_500_000, paid: 1_500_000, date: "5 اردیبهشت", status: "active" },
    ],
    8: [ // کامران تهرانی (شعبه ۸)
        { id: "801", amount: 1_500_000, paid: 1_500_000, date: "12 اردیبهشت", status: "active" },
        { id: "802", amount: 1_500_000, paid: 1_500_000, date: "5 اردیبهشت", status: "active" },
    ],
};