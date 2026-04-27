import { Button, TextField, Typography } from "@mui/material";
import Link from "next/link";

const Code = () => {
    return (
        <>
            <div className="flex flex-col gap-4 w-100 border-b pb-6 border-gray-400">
                <Typography variant="body1">کد ارسال شده رو وارد کن</Typography>
                <TextField
                    label="شماره موبایل"
                    size="small"
                    type="tel"
                    helperText="شماره ای که با آن ثبت نام کردید"
                    required
                    inputProps={{
                        inputMode: "numeric", // فعال‌سازی صفحه‌کلید عددی در موبایل
                        pattern: "[0-9]*", // فقط عدد قبول کنه
                        maxLength: 11, // مثلا برای شماره‌های ایران
                    }}
                />
                <Button variant="contained">ارسال کد</Button>
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

export default Code;
