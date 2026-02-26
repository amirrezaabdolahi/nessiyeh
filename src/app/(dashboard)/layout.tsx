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
            
            {children}
        </div>
    );
}
