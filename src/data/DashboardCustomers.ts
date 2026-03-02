

type Customer = {
    id: number,
    username: string,
    phone: string,
    totalCredit: number,
    paid: number,
    status: "active" | "overdue" | "settled",
    lastPayment: string
}


export const Customers: Array<Customer> = [
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