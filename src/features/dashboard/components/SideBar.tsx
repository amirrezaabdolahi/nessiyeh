import { links } from "@/data/DashboardMenuData";
import { Avatar, Box, Card, Typography } from "@mui/material";
import Link from "next/link";

const SideBar = () => {
    return (
        <Card className="h-full p-4! flex flex-col justify-between">
            <div className="flex flex-col gap-4">
                {links.map((link, index) => (
                    <div key={index}>
                        <Typography variant="body2" className="text-gray-500">
                            {link.group}
                        </Typography>
                        <div className="flex flex-col ">
                            {link.items.map((item, idx) => (
                                <Typography
                                    key={idx}
                                    variant="body1"
                                    className="hover:bg-gray-100 hover:text-black rounded transition-all duration-100 text-gray-600 "
                                >
                                    <Link
                                        href={item.href}
                                        className="flex items-center text-sm gap-2 p-2 "
                                    >
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </Link>
                                </Typography>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <Box className="flex gap-2 border-t border-gray-300 p-2 items-center cursor-pointer "  >
                <Avatar sx={{ bgcolor: "primary.main" }}>P</Avatar>
                <span className="flex flex-col ">
                    <Typography variant="body1">امیررضا عبدالهی</Typography>
                    <Typography variant="caption">ادمین</Typography>
                </span>
            </Box>
        </Card>
    );
};

export default SideBar;
