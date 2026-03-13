import { ArrowBackRounded, ArrowForwardIosRounded } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const CustomerPageHeader = () => {
    return (
        <div className="w-full flex items-center justify-between">
            <Link href={"dashboard/customers"}>
                <Button size="small"
                    startIcon={<ArrowForwardIosRounded fontSize="small" />}
                    variant="outlined"
                >
                    برگشت
                </Button>
            </Link>
            <Box className="flex gap-2">
                <Button size="small" variant="outlined">پرداخت</Button>
                <Button size="small" variant="contained">نسیه جدید</Button>
            </Box>
        </div>
    );
};

export default CustomerPageHeader;
