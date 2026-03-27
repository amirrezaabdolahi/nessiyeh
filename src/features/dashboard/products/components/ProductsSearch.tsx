import BranchSelect from "@/components/dash/BranchSelectField";
import CategorySelect from "@/components/dash/CategorySelectField";
import { TextField } from "@mui/material";
import React from "react";

const ProductsSearch = () => {
    return (
        <div className="grid grid-cols-2 w-full ">
            <div className="flex flex-col md:flex-row col-span-full lg:col-span-1 items-center w-full gap-4 ">
                <TextField
                    size="small"
                    label="جستوجو"
                    placeholder="نام محصول ، بارکد ، شناسه و ..."
                    fullWidth
                />
                <div className="flex  w-full gap-2">
                    <CategorySelect />
                    <BranchSelect />
                </div>
            </div>
        </div>
    );
};

export default ProductsSearch;
