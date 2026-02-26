import ChoseMarketDialog from "@/features/dashboard/components/ChoseMarketDialog";
import DashboardNavBar from "@/features/dashboard/components/DashboardNavBar";
import SideBar from "@/features/dashboard/components/SideBar";
import { Notifications } from "@mui/icons-material";
import { Avatar, Card, IconButton, TextField, Typography } from "@mui/material";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen grid  grid-rows-[auto_1fr]">
            {/* Navbar */}
            <div className="z-10">
                <DashboardNavBar />
            </div>

            {/* Main Area */}
            <div className="grid grid-cols-12">
                <aside className="col-span-2">
                    <SideBar />
                </aside>

                <main className="col-span-10 p-4 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
