import Code from "@/features/auth/components/Code";
import Signin from "@/features/auth/components/Signin";
import Signup from "@/features/auth/components/Signup";
import { Button, TextField, Typography } from "@mui/material";
import Link from "next/link";

const Authentication = async ({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
    const { mode } = await searchParams;

    return (
        <div className="flex flex-col items-center shadow p-4 rounded">
            <Typography variant="h5" className="mb-6!">
                نسیه
            </Typography>
            {mode === "signup" ? (
                <Signup />
            ) : mode === "code" ? (
                <Code />
            ) : (
                <Signin />
            )}
        </div>
    );
};

export default Authentication;
