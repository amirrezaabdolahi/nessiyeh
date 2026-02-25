import { Button, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex items-center justify-between p-6">
            <Typography variant="h6">داشبورد</Typography>
            <Button variant="contained">ذخیره</Button>
        </div>
    );
}
