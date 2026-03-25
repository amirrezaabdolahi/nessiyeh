"use client";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { categories } from "@/utils/filteringData";

export default function () {
    return (
        <Autocomplete
            disablePortal
            id="category-select"
            options={categories}
            getOptionLabel={(option) => option.name} // نمایش نام دسته به کاربر
            // اگر می‌خواهید مقدار ذخیره شده در استیت همان value باشد:
            // isOptionEqualToValue={(option, value) => option.value === value.value}

            renderInput={(params) => (
                <TextField
                    {...params}
                    label="دسته‌بندی محصول"
                    placeholder="انتخاب کنید..."
                />
            )}
            size="small"
            fullWidth
        />
    );
}
