"use client";
import SideBar from "@/features/dashboard/components/SideBar";
import { MenuOpenRounded, MenuRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div
            className={`fixed top-0 ${isOpen ? "right-0" : "-right-[300px]"} transition-all  bottom-0 z-998 flex items-start`}
        >
            <SideBar />
            <IconButton size="large" onClick={handleOpenMenu}>
                {isOpen ? (
                    <MenuOpenRounded fontSize="large" />
                ) : (
                    <MenuRounded fontSize="large" />
                )}
            </IconButton>
        </div>
    );
};

export default MobileMenu;
