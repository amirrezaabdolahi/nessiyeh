import { CreditBranchName } from "@/data/DashboardCredits";
import BranchHead from "@/features/dashboard/components/BranchHead";
import React from "react";

const Orders = () => {
    return (
        <div>
            <BranchHead branches={CreditBranchName} />
        </div>
    );
};

export default Orders;
