import { links } from "@/data/DashboardMenuData";
import { Card, Typography } from "@mui/material";
import Link from "next/link";

const SideBar = () => {
    return (
        <Card className="h-full p-4!">
            {links.map((link, index) => (
                <div key={index}>
                    <Typography
                        variant="body2"
                        className="text-gray-500 mb-2 mt-4"
                    >
                        {link.group}
                    </Typography>
                    <div className="flex flex-col gap-2">
                        {link.items.map((item, idx) => (
                            <Typography key={idx} variant="body1">
                                <Link
                                    href={item.href}
                                    className="flex items-center text-sm gap-2 p-2 rounded hover:bg-gray-100"
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </Link>
                            </Typography>
                        ))}
                    </div>
                </div>
            ))}
        </Card>
    );
};

export default SideBar;
