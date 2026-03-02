import DashboardsPageHeader from "@/components/dash/DashboardsPageHeader";
import { Customers, CustomersBranchName } from "@/data/DashboardCustomers";
import { AddRounded } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";

const DashboardCustomers = () => {
    return (
        <div className="h-full flex flex-col gap-8">
            <DashboardsPageHeader
                title="مشتری ها"
                caption="247 مشتری ثبت نام کرده ، 6 نا مشتری این ماه"
            >
                <Button endIcon={<AddRounded />} variant="contained">
                    مشتری
                </Button>
            </DashboardsPageHeader>
            <Box className="w-full overflow-x-scroll xl:overflow-auto">
                <Card className="w-300 xl:w-full rounded-lg! sticky top-0 z-50 grid grid-cols-8 items-center justify-between">
                    {CustomersBranchName.map((name, index) => (
                        <Typography key={index} variant="body2" className="text-start">
                            {name}
                        </Typography>
                    ))}
                </Card>
                {Customers.map((customer) => (
                    <Box
                        key={customer.id}
                        className="w-300 xl:w-full rounded-lg! sticky top-0 z-50 grid grid-cols-8 items-center justify-between"
                    >
                        <Typography variant="body2" className="text-start">
                            {customer.username}
                        </Typography>
                        <Typography variant="body2" className="text-start">
                            {customer.phone}
                        </Typography>
                        <Typography variant="body2" className="text-start">
                            {customer.totalCredit} ریال
                        </Typography>
                        <Typography variant="body2" className="text-start">
                            {customer.paid} ریال
                        </Typography>
                        <Typography variant="body2" className="text-start">
                            {customer.totalCredit - customer.paid} ریال
                        </Typography>
                        <Typography variant="body2" className="text-start">
                            {customer.status}
                        </Typography>
                        <Typography variant="body2" className="text-start">
                            {customer.lastPayment}
                        </Typography>
                        <Typography variant="body2" className="text-start">
                            {customer.username}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </div>
    );
};

export default DashboardCustomers;
