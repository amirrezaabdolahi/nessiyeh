import ChoseMarketDialog from "@/features/dashboard/components/ChoseMarketDialog";
import { Notifications } from "@mui/icons-material";
import { Avatar, Card, IconButton, TextField, Typography } from "@mui/material";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full h-screen">
            <Card className="w-full p-4!  flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Typography
                        variant="h6"
                        className="text-center border-l border-gray-300 pl-4"
                    >
                        داشبورد
                    </Typography>
                    <ChoseMarketDialog />
                </div>
                <div className="flex items-center gap-4">
                    <TextField
                        variant="outlined"
                        size="small"
                        label="جستجو"
                        placeholder="فروش ، خرید ، ..."
                    />
                    <IconButton size="large">
                        <Notifications />
                    </IconButton>
                    <Avatar
                        className="cursor-pointer"
                        sx={{ bgcolor: "primary.main" }}
                    >
                        P
                    </Avatar>
                </div>
            </Card>
            {children}
        </div>
    );
}
