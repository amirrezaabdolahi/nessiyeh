import { Avatar, Box, Typography } from "@mui/material";

const DashProfileBox = () => {
    return (
        <Box className="flex gap-2 border-t border-gray-300 p-2 items-center cursor-pointer ">
            <Avatar sx={{ bgcolor: "primary.main" }}>P</Avatar>
            <span className="flex flex-col ">
                <Typography variant="body1">امیررضا عبدالهی</Typography>
                <Typography variant="caption">ادمین</Typography>
            </span>
        </Box>
    );
};

export default DashProfileBox;
