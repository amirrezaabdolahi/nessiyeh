import { CustomersUsernameAndId } from "@/data/AutoCompletesData";
import { ProductType } from "./productTypes";



export interface DebtType {
    customer?: CustomersUsernameAndId | null,
    products?: ProductType[] | [],
    price?: string | number ,
    date?: string,
    period?: { id: number, name: string, value: string } | null,
    description?: string
}