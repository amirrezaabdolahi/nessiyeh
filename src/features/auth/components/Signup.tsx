"use client";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Button,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const Signup = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [formData , setFormData] = useState({
        phone : '',
        username : '',
        email : '',
        password : '',
    })

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault(); // جلوگیری از دیفالت براوزر موقع کلیک
    };
    return (
        <>
            <div className="flex flex-col gap-4 w-100 border-b pb-6 border-gray-400 ">
                <Typography variant="body1">یه اکانت بساز</Typography>
                <TextField
                    label="شماره موبایل"
                    size="small"
                    type="tel"
                    helperText="از شماره ای استفاده کن که قبلا باهاش ثبت نام نکردی"
                    required
                    inputProps={{
                        inputMode: "numeric", // فعال‌سازی صفحه‌کلید عددی در موبایل
                        pattern: "[0-9]*", // فقط عدد قبول کنه
                        maxLength: 11, // مثلا برای شماره‌های ایران
                    }}
                />
                <TextField
                    label="نام کاربری"
                    size="small"
                    helperText="اسم خودت یا مغازت"
                    required
                />
                <TextField
                    label="ایمیل"
                    size="small"
                    type="email"
                    helperText="ایمیلت رو وارد کن ( اختیاری )"
                />
                <TextField
                    label="گذرواژه"
                    size="small"
                    type={showPassword ? "text" : "password"}
                    helperText="یه رمز انتخاب کن که یادت نر ( بعدا میتونی عوض کنی )"
                    required
                    InputProps={{
                        // این قسمت برای قرار دادن آیکون در انتهای فیلده
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end" // برای چسبیدن آیکون به لبه
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Button variant="contained">ثبت نام</Button>
            </div>
            <Typography variant="body2" className="mt-4!">
                قبلا اکانت داشتید ؟{" "}
                <Link className="text-blue-500" href={"?mode=signin"}>
                    {" "}
                    ورود اکانت{" "}
                </Link>
            </Typography>
        </>
    );
};

export default Signup;
