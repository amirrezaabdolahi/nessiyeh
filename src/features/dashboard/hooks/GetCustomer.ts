import { Customers } from "@/data/DashboardCustomers";

const GetCustomer = (id: string | number) => {
    const numericId = Number(id);

    const customer = Customers.find(customer => customer.id === numericId);

    return customer || null; 
};

export default GetCustomer;