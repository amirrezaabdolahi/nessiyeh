"use client";
import SideBar from "@/features/dashboard/components/SideBar";
import { MenuOpenRounded, MenuRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);
    return (
        <>
            <div
                className={`absolute top-0 right-0 left-0 bottom-0 transition-all ${isOpen ? "bg-black/20 z-900 opacity-100" : "bg-black/0 -z-1 opacity-0"} `}
                onClick={handleOpenMenu}
            ></div>
            <div
                className={`fixed lg:hidden top-0 ${isOpen ? "right-0" : "-right-75"} transition-all  bottom-0 z-998 flex items-start`}
            >
                <SideBar />

                <IconButton
                    size="large"
                    className="bg-white! m-2!"
                    onClick={handleOpenMenu}
                >
                    {isOpen ? (
                        <MenuOpenRounded fontSize="large" />
                    ) : (
                        <MenuRounded fontSize="large" />
                    )}
                </IconButton>
            </div>
        </>
    );
};

export default MobileMenu;
