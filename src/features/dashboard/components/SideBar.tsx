"use client";
import { links } from "@/data/DashboardMenuData";
import { Avatar, Box, Card, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import DashLinks from "./DashLinks";
import DashProfileBox from "./DashProfileBox";

const SideBar = () => {
    const pathname = usePathname();

    return (
        <Card className="h-full p-4! flex flex-col justify-between">
            <div className="flex flex-col gap-4">
                {links.map((link, index) => (
                    <DashLinks key={index} link={link} pathname={pathname} />
                ))}
            </div>
            <DashProfileBox />
        </Card>
    );
};

export default SideBar;
