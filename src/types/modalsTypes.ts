import { ProductType } from "./productTypes";



export interface DebtType {
    customer: string | number,
    products: ProductType[],
    price: string | number,
    date: string,
    period: { id: number, name: string, value: string },
    description?: string
}