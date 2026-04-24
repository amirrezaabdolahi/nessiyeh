import { CustomersUsernameAndId } from "@/data/AutoCompletesData";
import { ProductType } from "./productTypes";
import { formPayMethod, MetodsType } from "./methods";



export interface DebtType {
    customer?: CustomersUsernameAndId | null,
    products?: ProductType[] | [],
    price?: string | number,
    date?: string,
    period?: { id: number, name: string, value: string } | null,
    description?: string
}



export interface PaymentType {
    customer?: CustomersUsernameAndId | null,
    debts?: CustomersUsernameAndId | null,
    price?: string | number,
    method: formPayMethod | null ,
    date?: string,
    description?: string
}