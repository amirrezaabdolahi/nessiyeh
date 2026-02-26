import { Button, Card, TextField, Typography } from "@mui/material";
import Link from "next/link";

const page = () => {
    return (
        <Card className="p-4 flex flex-col gap-2 w-md" variant="elevation">
            <Typography variant="h6" className="text-center">
                ورود
            </Typography>
            <form className="w-full flex flex-col gap-2">
                <TextField label="نام کاربری" fullWidth size="small" />
                <TextField
                    label="رمز عبور"
                    fullWidth
                    size="small"
                    type="password"
                />
                <Button variant="contained" color="primary" fullWidth>
                    ورود
                </Button>
            </form>
            <Typography variant="body2" className="text-center">
                قبلا ثبت نام نکرده‌اید؟{" "}
                <Link className="text-blue-500" href="/auth/signup">
                    ثبت نام
                </Link>
            </Typography>
        </Card>
    );
};

export default page;
