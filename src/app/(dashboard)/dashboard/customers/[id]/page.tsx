import { CustomerType } from "@/data/DashboardCustomers";
import GetCustomer from "@/features/dashboard/hooks/GetCustomer";

interface customerProps {
    params: Promise<{
        id: number | string;
    }>;
}

const Customer = async ({ params }: customerProps) => {
    const { id } = await params;

    const customer: CustomerType | false = GetCustomer(id);

    console.log(customer);

    if (!customer) {
        return (
            <div className="flex items-center justify-center w-full h-full">
                هیچ مشتری با این شناسه پیدا نشد
            </div>
        );
    }

    return <div>Customer</div>;
};

export default Customer;
