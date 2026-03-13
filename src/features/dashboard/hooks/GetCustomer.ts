import { Customers } from "@/data/DashboardCustomers"



interface GetCustomerProp {
    id: number | string
}

const GetCustomer = ({ id }: GetCustomerProp) => {
    const customer = Customers.find(customer => customer.id == id)
    if (customer) {
        return customer
    }
    return false
}

export default GetCustomer