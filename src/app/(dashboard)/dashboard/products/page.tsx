import DashboardsPageHeader from "@/components/dash/DashboardsPageHeader";
import { AddRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const Products = () => {
    return (
        <div className="h-full flex flex-col gap-8 ">
            <DashboardsPageHeader title="حساب ها" caption="200 محصول">
                <Button endIcon={<AddRounded />} variant="contained">
                    محصول
                </Button>
            </DashboardsPageHeader>
        </div>
    );
};

export default Products;
