import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function CategorySelect() {
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
            sx={{ width: "100%" }}
        />
    );
}
