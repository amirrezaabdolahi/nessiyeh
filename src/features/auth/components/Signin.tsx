"use client";

import { Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

const Signin = () => {
    const [phone, setPhone] = useState<string>("");
    const [errors, setErrors] = useState<{
        length: boolean;
        pattern: boolean;
        startWith: boolean;
    }>({
        length: false,
        pattern: false,
        startWith: false,
    });
    const buttonRef = useRef(null);
    const [loading, setLoading] = useState<boolean>(false);

    const isValidPhone = (phone: string): boolean => {
        if (!phone) return false;

        // Remove spaces, dashes, parentheses
        phone = phone.replace(/[\s\-()]/g, "");

        // 1) must be at least 11 digits
        if (phone.length < 11) {
            setErrors((prev) => ({
                ...prev,
                length: true,
            }));
            return false;
        }

        // 2) must not contain alphabet characters
        if (/[a-zA-Z]/.test(phone)) {
            setErrors((prev) => ({
                ...prev,
                pattern: true,
            }));
            return false;
        }

        // 3) must start with +98 or 09
        if (!(phone.startsWith("+98") || phone.startsWith("09"))) {
            setErrors((prev) => ({
                ...prev,
                startWith: true,
            }));
            return false;
        }

        // 4) must contain numbers only after removing +
        const digitsOnly = phone.startsWith("+") ? phone.slice(1) : phone;
        if (!/^\d+$/.test(digitsOnly)) {
            setErrors((prev) => ({
                ...prev,
                pattern: true,
            }));
            return false;
        }

        setErrors({
            length: false,
            pattern: false,
            startWith: false,
        });
        return true;
    };

    console.log(errors);

    const handleSendOtpCode = () => {
        const flag = isValidPhone(phone);
        if (!flag) {
            return;
        }

        setLoading(true);
        toast.loading("درحال ارسال کد");
        const sendCode = new Promise((resolve, reject) => {
            setTimeout(() => {
                let success = true;
                if (success) {
                    resolve("کد ارسال شد");
                } else reject("خطا کد ارسال نشد");

                setLoading(false);
            }, 2000);
        });

        toast.promise(sendCode, {
            pending: "درحال ارسال کد",
            success: "کد ارسال شد",
            error: "اوهو ارور داریم !",
        });
    };

    return (
        <>
            <div className="flex flex-col gap-4 w-100 border-b pb-6 border-gray-400">
                <Typography variant="body1">ورود به اکانت</Typography>
                <TextField
                    label="شماره موبایل"
                    size="small"
                    type="tel"
                    helperText="شماره ای که با آن ثبت نام کردید"
                    placeholder="09123456789"
                    required
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => {
                        setPhone(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            buttonRef.current?.click();
                        }
                    }}
                    inputProps={{
                        inputMode: "numeric", // فعال‌سازی صفحه‌کلید عددی در موبایل
                        pattern: "[0-9]*", // فقط عدد قبول کنه
                        maxLength: 11, // مثلا برای شماره‌های ایران
                    }}
                    error={errors.length || errors.pattern || errors.startWith}
                />
                {errors.length && (
                    <Typography variant="caption" color="error">
                        شماره باید 11 رقم باشد
                    </Typography>
                )}
                {errors.pattern && (
                    <Typography variant="caption" color="error">
                        شماره معتبر نیست
                    </Typography>
                )}
                {errors.startWith && (
                    <Typography variant="caption" color="error">
                        شماره باید با 09 یا +98 شروع شود
                    </Typography>
                )}
                <Button
                    variant="contained"
                    disabled={phone.length < 11 || loading}
                    onClick={handleSendOtpCode}
                    ref={buttonRef}
                    loading={loading}
                >
                    ارسال کد
                </Button>
            </div>
            <Typography variant="body2" className="mt-4!">
                قبلا اکانت نداشتید ؟{" "}
                <Link className="text-blue-500" href={"?mode=signup"}>
                    {" "}
                    ساخت اکانت{" "}
                </Link>
            </Typography>
        </>
    );
};

export default Signin;
