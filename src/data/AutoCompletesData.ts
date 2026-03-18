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

export const SelectedCustomersDebts