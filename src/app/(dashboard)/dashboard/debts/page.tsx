"use client";

import Container from "@/components/dash/Container";
import DashboardsPageHeader from "@/components/dash/DashboardsPageHeader";
import { CreditBranchName, Credits } from "@/data/DashboardCredits";
import BranchHead from "@/features/dashboard/components/BranchHead";
import { AddRounded } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const Orders = () => {
    return (
        <Container>
            <DashboardsPageHeader
                title="حساب ها"
                caption="128 حساب ، 180000000 ریال جمع حساب ها"
            >
                <Button endIcon={<AddRounded />} variant="contained">
                    حساب
                </Button>
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
                <BranchHead branches={CreditBranchName} />
                {Credits.map((credit) => (
                    <Box
                        key={credit.id}
                        onClick={() => {
                            console.log(credit);
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
                        <Typography variant="body2" className="text-start">
                            {credit.id}
                        </Typography>
                        <Typography variant="body2" className="text-start">
                            {credit.customer}
                        </Typography>
                        <Typography variant="body2" className="text-start">
                            {credit.description}
                        </Typography>
                        <Typography variant="body2" className="text-start">
                            {credit.total} ریال
                        </Typography>
                        <Typography variant="body2" className="text-start">
                            {credit.paid} ریال
                        </Typography>
                        <Typography variant="body2" className="text-start">
                            {credit.total - credit.paid} ریال
                        </Typography>
                        <Typography variant="body2" className="text-start">
                            {credit.date}
                        </Typography>
                        {credit.status === "active" ? (
                            <Typography
                                className="bg-blue-400/10 text-blue-500 rounded-full  text-center w-max px-3"
                                variant="body2"
                            >
                                باز
                            </Typography>
                        ) : credit.status === "overdue" ? (
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
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default Orders;
