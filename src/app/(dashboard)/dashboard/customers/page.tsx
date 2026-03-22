"use client";
import Container from "@/components/dash/Container";
import DashboardsPageHeader from "@/components/dash/DashboardsPageHeader";
import { Customers, CustomersBranchName } from "@/data/DashboardCustomers";
import AddCustomerModal from "@/features/dashboard/components/AddCustomerModal";
import BranchHead from "@/features/dashboard/components/BranchHead";
import { AddRounded } from "@mui/icons-material";
import { Avatar, Box, Button, Card, Chip, Typography } from "@mui/material";
import Link from "next/link";

const DashboardCustomers = () => {
    return (
        <Container>
            <DashboardsPageHeader
                title="مشتری ها"
                caption="247 مشتری ثبت نام کرده ، 6 نا مشتری این ماه"
            >
                <AddCustomerModal />
            </DashboardsPageHeader>

            <Box className="w-full overflow-x-scroll xl:overflow-auto">
                <Box className="flex gap-2 mb-4">
                    <Link href={"/dashboard/customers"}>
                        <Button variant="outlined">همه</Button>
                    </Link>
                    <Link href={"?filter=active"}>
                        <Button variant="outlined">باز</Button>
                    </Link>
                    <Link href={"?filter=overdue"}>
                        <Button variant="outlined">پرداخت نشده</Button>
                    </Link>
                    <Link href={"?filter=settled"}>
                        <Button variant="outlined">پرداخت شده</Button>
                    </Link>
                </Box>
                {/* branches */}
                <BranchHead branches={CustomersBranchName} />
                {Customers.map((customer) => (
                    <Link href={`customers/${customer.id}`} key={customer.id}>
                        <Box
                            onClick={() => {
                                console.log(customer);
                            }}
                            className="w-300
                                  xl:w-full
                                  sticky top-0
                                  z-50
                                  grid 
                                  grid-cols-8
                                  items-center
                                  justify-between
                                  p-4
                                  border-b
                                  border-gray-400
                                  hover:bg-gray-100
                                  transition-all
                                  cursor-pointer
                               "
                        >
                            <Box className="flex items-center gap-2">
                                <Avatar alt={customer.username}>
                                    {customer.username[0]}
                                </Avatar>
                                <Typography
                                    variant="body2"
                                    className="text-start"
                                >
                                    {customer.username}
                                </Typography>
                            </Box>
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
                            {customer.status === "active" ? (
                                <Typography
                                    className="bg-blue-400/10 text-blue-500 rounded-full  text-center w-max px-3"
                                    variant="body2"
                                >
                                    باز
                                </Typography>
                            ) : customer.status === "overdue" ? (
                                <Typography
                                    className="bg-red-400/10 text-red-500 rounded-full  text-center w-max px-3"
                                    variant="body2"
                                >
                                    نشده
                                </Typography>
                            ) : (
                                <Typography
                                    className="bg-green-400/10 text-green-500 rounded-full  text-center w-max px-3"
                                    variant="body2"
                                >
                                    بسته
                                </Typography>
                            )}
                            <Typography variant="body2" className="text-start">
                                {customer.lastPayment}
                            </Typography>
                            <Button variant="text">پرداخت</Button>
                        </Box>
                    </Link>
                ))}
            </Box>
        </Container>
    );
};

export default DashboardCustomers;
