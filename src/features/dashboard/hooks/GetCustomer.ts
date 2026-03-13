import { Customers, CustomersPayments } from "@/data/DashboardCustomers";

const GetCustomer = (id: string | number) => {
    const numericId = Number(id);

    const customer = Customers.find(customer => customer.id === numericId);

    let payeds ;

    if (customer) {
        payeds = CustomersPayments[customer?.id]
    }



    return customer || null;
};

export default GetCustomer;