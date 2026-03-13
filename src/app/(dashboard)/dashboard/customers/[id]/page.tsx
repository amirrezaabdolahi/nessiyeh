import { CustomerType } from "@/data/DashboardCustomers";
import CustomerPageHeader from "@/features/dashboard/components/CustomerPageHeader";
import GetCustomer from "@/features/dashboard/hooks/GetCustomer";
import { AddRounded } from "@mui/icons-material";
import { Avatar, Box, Button, Card, Chip, Typography } from "@mui/material";

interface customerProps {
    params: Promise<{
        id: string;
    }>;
}

const Customer = async ({ params }: customerProps) => {
    const { id } = await params;

    const customer = GetCustomer(id);

    console.log(customer);

    if (!customer) {
        return (
            <div className="flex items-center justify-center w-full h-full">
                هیچ مشتری با این شناسه پیدا نشد
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col gap-8">
            <CustomerPageHeader />
            <Card className="flex items-center justify-between p-6 rounded-lg!">
                <Box className="flex items-center gap-4">
                    <Avatar
                        alt={customer.username}
                        variant="rounded"
                        className="w-20! h-20! rounded-lg!"
                    >
                        {customer.username[0]}
                    </Avatar>
                    <Box className="flex flex-col ">
                        <Typography variant="h5" className="font-bold!">
                            {customer.username}
                        </Typography>
                        <Box className="flex gap-2">
                            <Typography variant="body2">
                                {customer.phone}
                            </Typography>
                            <Typography variant="body2">.</Typography>
                            {customer.status === "active" ? (
                                <Typography
                                    className="bg-blue-400/10 text-blue-500 rounded-full  text-center w-max px-3"
                                    variant="body2"
                                >
                                    فعال
                                </Typography>
                            ) : customer.status === "overdue" ? (
                                <Typography
                                    className="bg-red-400/10 text-red-500 rounded-full  text-center w-max px-3"
                                    variant="body2"
                                >
                                    غیر فعال
                                </Typography>
                            ) : (
                                <Typography
                                    className="bg-green-400/10 text-green-500 rounded-full  text-center w-max px-3"
                                    variant="body2"
                                >
                                    عالی
                                </Typography>
                            )}
                        </Box>
                    </Box>
                </Box>
                <Box className="flex gap-4">
                    <Box className="flex flex-col gap-0 items-center">
                        <Typography variant="h6" color="warning">
                            {customer.totalCredit - customer.paid} ریال
                        </Typography>
                        <Typography variant="caption">باقی مانده</Typography>
                    </Box>
                    <Box className="flex flex-col gap-0 items-center">
                        <Typography variant="h6" color="success">
                            {customer.paid} ریال
                        </Typography>
                        <Typography variant="caption">حساب شده</Typography>
                    </Box>
                </Box>
            </Card>
            <Box>
                <Card className="flex flex-col rounded-lg! p-4">
                    <Box className="flex items-center justify-between">
                        <Typography variant="h6" className="font-bold!">
                            جدول اقساط
                        </Typography>
                        <Button
                            size="small"
                            variant="contained"
                            endIcon={<AddRounded />}
                        >
                            نسیه جدید
                        </Button>
                    </Box>
                </Card>
                <Card>
                    <Box>
                        <Box>
                            <Typography variant="caption">تاریخ : </Typography>
                            <Typography variant="body2" >ریال</Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2">مانده : </Typography>
                        </Box>
                    </Box>
                </Card>
            </Box>
        </div>
    );
};

export default Customer;
