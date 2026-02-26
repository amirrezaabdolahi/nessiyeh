import { Button, Card, TextField, Typography } from "@mui/material";
import Link from "next/link";

const page = () => {
    return (
        <Card  className="p-4 flex flex-col gap-2 w-md rounded-xl! " variant="elevation" >
            <Typography variant="h6" className="text-center">
                ثبت نام
            </Typography>
            <form className="w-full flex flex-col gap-2">
                <TextField label="نام کاربری" fullWidth size="small" />
                <TextField
                    label="رمز عبور"
                    fullWidth
                    size="small"
                    type="password"
                />
                <Button variant="contained" color="primary">
                    ثبت نام
                </Button>
            </form>
            <Typography variant="body2" className="text-center">
                قبلا ثبت نام کرده‌اید؟{" "}
                <Link className="text-blue-500" href="/auth/signin">
                    وارد شوید
                </Link>
            </Typography>
        </Card>
    );
};

export default page;
