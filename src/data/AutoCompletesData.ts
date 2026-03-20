import GetCustomer from "@/features/dashboard/hooks/GetCustomer"
import { Customers } from "./DashboardCustomers"


interface CustomersUsernameAndId {
    id: string | number
    username: string
}

export const CustomersDataAutoComplete: Array<CustomersUsernameAndId> = Customers.map(customer => {
    return {
        id: customer.id, username: customer.username
    }
})

export const SelectedCustomersDebts = (id: string | number) => {
    const { payeds } = GetCustomer(id);
    console.log(payeds);
    return payeds
}

export const methodsAutocomplete = [
    { id: 1, name: "کارت", value: 'card' },
    { id: 2, name: "درگاه", value: 'bankTransfer' },
    { id: 3, name: "نقد", value: 'cash' },
]

export const installmentTime : Array<{id : number , name : string , value : string}> = [
    {id : 1 , name : "روزانه"  , value : "daily"},
    {id : 2 , name : "هفتگانی"  , value : "weekly"},
    {id : 3 , name : "ماهانه"  , value : "monthly"},
]