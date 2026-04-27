"use client";

import { Button, TextField, Typography, Box } from "@mui/material";
import Link from "next/link";
import React, { useRef, useState } from "react";

const Code = () => {
    const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
    const inputRef = useRef<HTMLInputElement[]>([]);

   
    const handleChange = (value: string, index: number) => {
        if (!/^[0-9]?$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value && index < otp.length - 1) {
            inputRef.current[index + 1]?.focus();
        }
    };

   
    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number,
    ) => {
        if (e.key === "Backspace") {
            if (otp[index]) {
                const newOtp = [...otp];
                newOtp[index] = "";
                setOtp(newOtp);
            } else if (index > 0) {
                inputRef.current[index - 1]?.focus();
            }
        }
    };

    return (
        <>
            <div className="flex flex-col gap-4 w-100 border-b pb-6 border-gray-400">
                <Typography variant="body1">کد ارسال شده رو وارد کن</Typography>

                <Box display="flex" gap={2} dir="ltr">
                    {otp.map((value, index) => (
                        <TextField
                            key={index}
                            value={value}
                            variant="filled"
                            size="small"
                            type="tel"
                            autoComplete="off"
                            inputRef={(el) => {
                                if (el) inputRef.current[index] = el;
                            }}
                            onChange={(e) =>
                                handleChange(e.target.value, index)
                            }
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            inputProps={{
                                maxLength: 1,
                                inputMode: "numeric",
                                style: {
                                    textAlign: "center",
                                    fontSize: "1.5rem",
                                    width: "45px",
                                },
                            }}
                        />
                    ))}
                </Box>

                <Button variant="contained">ارسال کد</Button>
            </div>

            <Typography variant="body2" className="mt-4!">
                قبلا اکانت نداشتید؟{" "}
                <Link className="text-blue-500" href="?mode=signup">
                    ساخت اکانت
                </Link>
            </Typography>
        </>
    );
};

export default Code;
