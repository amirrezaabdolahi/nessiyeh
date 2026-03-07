import DashboardsPageHeader from "@/components/dash/DashboardsPageHeader";
import { CreditBranchName } from "@/data/DashboardCredits";
import BranchHead from "@/features/dashboard/components/BranchHead";
import { AddRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const Orders = () => {
    return (
        <div className="h-full flex flex-col gap-8 ">
            <DashboardsPageHeader
                title="حساب ها"
                caption="128 حساب ، 180000000 ریال جمع حساب ها"
            >
                <Button endIcon={<AddRounded />} variant="contained">
                    حساب
                </Button>
            </DashboardsPageHeader>
            <BranchHead branches={CreditBranchName} />
        </div>
    );
};

export default Orders;
