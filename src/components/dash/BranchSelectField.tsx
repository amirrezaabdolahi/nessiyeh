"use client";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { branches } from "@/utils/filteringData";

export default function BranchSelect() {
    return (
        <Autocomplete
            disablePortal
            id="category-select"
            options={branches.dry_food}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="شاخه محصول"
                    placeholder="انتخاب کنید..."
                />
            )}
            size="small"
            sx={{ width: "100%" }}
        />
    );
}
